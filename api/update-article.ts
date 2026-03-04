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
    const { articleId, updates } = req.body;

    if (!articleId || !updates) {
      return res.status(400).json({ error: 'ID et modifications requis' });
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = 'Mxlvxn';
    const GITHUB_REPO = 'oenoros-burgundy-wine-spark';
    const FILE_PATH = 'src/data/blogPosts.ts';

    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: 'Token GitHub non configuré' });
    }

    // 1. Récupérer le fichier
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

    // 2. Trouver et remplacer l'article complet
    const lines = currentContent.split('\n');
    let articleStart = -1;
    let articleEnd = -1;
    let braceCount = 0;
    let foundArticle = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      if (line.includes(`id: '${articleId}'`)) {
        // Remonter pour trouver le début de l'objet
        for (let j = i; j >= 0; j--) {
          if (lines[j].trim().startsWith('{')) {
            articleStart = j;
            foundArticle = true;
            braceCount = 1;
            break;
          }
        }
      }

      if (foundArticle && i >= articleStart) {
        const openBraces = (line.match(/{/g) || []).length;
        const closeBraces = (line.match(/}/g) || []).length;
        braceCount += openBraces - closeBraces;
        
        if (braceCount === 0) {
          articleEnd = i;
          break;
        }
      }
    }

    if (articleStart === -1 || articleEnd === -1) {
      return res.status(404).json({ error: 'Article non trouvé' });
    }

    // 3. Générer le nouvel article
    const updatedArticle = updates as ArticleData;
    const newArticleCode = `  {
    id: '${updatedArticle.id}',
    slug: '${updatedArticle.slug}',
    title: '${updatedArticle.title.replace(/'/g, "\\'")}',
    excerpt: '${updatedArticle.excerpt.replace(/'/g, "\\'")}',
    content: \`${updatedArticle.content.replace(/`/g, '\\`')}\`,
    coverImage: '${updatedArticle.coverImage}',
    category: '${updatedArticle.category}',
    author: {
      name: '${updatedArticle.author.name.replace(/'/g, "\\'")}',
      role: '${updatedArticle.author.role.replace(/'/g, "\\'")}',
    },
    publishedAt: '${updatedArticle.publishedAt}',
    readTime: ${updatedArticle.readTime},
    tags: [${updatedArticle.tags.map(t => `'${t.replace(/'/g, "\\'")}'`).join(', ')}],
    seo: {
      metaTitle: '${updatedArticle.seo.metaTitle.replace(/'/g, "\\'")}',
      metaDescription: '${updatedArticle.seo.metaDescription.replace(/'/g, "\\'")}',
      keywords: [${updatedArticle.seo.keywords.map(k => `'${k.replace(/'/g, "\\'")}'`).join(', ')}],
    },
  },`;

    // 4. Remplacer l'ancien article par le nouveau
    lines.splice(articleStart, articleEnd - articleStart + 1, newArticleCode);
    const newContent = lines.join('\n');

    // 5. Pusher sur GitHub
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
          message: `✏️ Modification article: ${updatedArticle.title}`,
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
      message: 'Article modifié avec succès !'
    });

  } catch (error: any) {
    console.error('❌ Erreur:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de la modification',
      details: error.message 
    });
  }
}
