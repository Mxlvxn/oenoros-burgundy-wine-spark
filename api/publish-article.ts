import type { VercelRequest, VercelResponse } from '@vercel/node';

interface ArticleData {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: string;
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: number;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export default async function handler(
  req: VercelRequest,
  res: VercelResponse
) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const articleData = req.body as ArticleData;

    if (!articleData.title || !articleData.content) {
      return res.status(400).json({ error: 'Titre et contenu requis' });
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = 'Mxlvxn';
    const GITHUB_REPO = 'oenoros-burgundy-wine-spark';
    const FILE_PATH = 'src/data/blogPosts.ts';

    if (!GITHUB_TOKEN) {
      return res.status(500).json({ 
        error: 'Token GitHub non configuré. Configure GITHUB_TOKEN dans Vercel.' 
      });
    }

    // 1. Récupérer le fichier actuel
    const getResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
        },
      }
    );

    if (!getResponse.ok) {
      throw new Error('Impossible de récupérer blogPosts.ts');
    }

    const fileData: any = await getResponse.json();
    const currentContent = Buffer.from(fileData.content, 'base64').toString('utf-8');

    // 2. Générer le code du nouvel article (AVEC ÉCHAPPEMENT CORRECT)
    const articleCode = `  {
    id: '${articleData.id}',
    slug: '${articleData.slug}',
    title: '${articleData.title.replace(/'/g, "\\'")}',
    excerpt: '${articleData.excerpt.replace(/'/g, "\\'")}',
    content: \`${articleData.content.replace(/`/g, '\\`')}\`,
    coverImage: '${articleData.coverImage}',
    category: '${articleData.category}',
    author: {
      name: '${articleData.author.name.replace(/'/g, "\\'")}',
      role: '${articleData.author.role.replace(/'/g, "\\'")}',
    },
    publishedAt: '${articleData.publishedAt}',
    readTime: ${articleData.readTime},
    tags: [${articleData.tags.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ')}],
    seo: {
      metaTitle: '${articleData.seo.metaTitle.replace(/'/g, "\\'")}',
      metaDescription: '${articleData.seo.metaDescription.replace(/'/g, "\\'")}',
      keywords: [${articleData.seo.keywords.map(k => `'${k.replace(/'/g, "\\'")}'`).join(', ')}],
    },
  },`;

    // 3. Insérer l'article
    const lines = currentContent.split('\n');
    const exportIndex = lines.findIndex(line => 
      line.includes('export const blogPosts: BlogPost[] = [')
    );

    if (exportIndex === -1) {
      throw new Error('Structure blogPosts.ts invalide');
    }

    lines.splice(exportIndex + 1, 0, articleCode);
    const newContent = lines.join('\n');

    // 4. Pusher sur GitHub
    const updateResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `✨ Nouvel article: ${articleData.title}`,
          content: Buffer.from(newContent, 'utf-8').toString('base64'),
          sha: fileData.sha,
          branch: 'main',
        }),
      }
    );

    if (!updateResponse.ok) {
      const error = await updateResponse.json();
      throw new Error(`Erreur GitHub: ${JSON.stringify(error)}`);
    }

    return res.status(200).json({ 
      success: true,
      message: 'Article publié avec succès !',
      slug: articleData.slug
    });

  } catch (error: any) {
    console.error('❌ Erreur:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de la publication',
      details: error.message 
    });
  }
}
