import { NextRequest } from 'next/server';

export const config = {
  runtime: 'edge',
};

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

export default async function handler(req: NextRequest) {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const articleData: ArticleData = await req.json();

    // Récupérer le token GitHub depuis les variables d'environnement
    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = 'Mxlvxn'; // Ton username GitHub
    const GITHUB_REPO = 'oenoros-burgundy-wine-spark';
    const FILE_PATH = 'src/data/blogPosts.ts';

    if (!GITHUB_TOKEN) {
      return new Response(
        JSON.stringify({ error: 'GitHub token non configuré' }),
        { status: 500, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // 1. Récupérer le contenu actuel de blogPosts.ts
    const getFileResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!getFileResponse.ok) {
      throw new Error('Impossible de récupérer le fichier blogPosts.ts');
    }

    const fileData = await getFileResponse.json();
    const currentContent = atob(fileData.content); // Décoder le base64

    // 2. Créer le code du nouvel article
    const newArticleCode = `  {
    id: '${articleData.id}',
    slug: '${articleData.slug}',
    title: '${articleData.title.replace(/'/g, "\\'")}',
    excerpt: '${articleData.excerpt.replace(/'/g, "\\'")}',
    content: \`${articleData.content.replace(/`/g, '\\`')}\`,
    coverImage: '${articleData.coverImage}',
    category: '${articleData.category}',
    author: {
      name: '${articleData.author.name}',
      role: '${articleData.author.role}',
    },
    publishedAt: '${articleData.publishedAt}',
    readTime: ${articleData.readTime},
    tags: [${articleData.tags.map(t => `'${t}'`).join(', ')}],
    seo: {
      metaTitle: '${articleData.seo.metaTitle.replace(/'/g, "\\'")}',
      metaDescription: '${articleData.seo.metaDescription.replace(/'/g, "\\'")}',
      keywords: [${articleData.seo.keywords.map(k => `'${k}'`).join(', ')}],
    },
  },`;

    // 3. Insérer le nouvel article après la ligne "export const blogPosts: BlogPost[] = ["
    const lines = currentContent.split('\n');
    const exportLineIndex = lines.findIndex(line => 
      line.includes('export const blogPosts: BlogPost[] = [')
    );

    if (exportLineIndex === -1) {
      throw new Error('Structure de blogPosts.ts non reconnue');
    }

    // Insérer le nouvel article après la ligne d'export
    lines.splice(exportLineIndex + 1, 0, newArticleCode);
    const newContent = lines.join('\n');

    // 4. Pusher le nouveau contenu sur GitHub
    const updateFileResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `Nouvel article: ${articleData.title}`,
          content: btoa(newContent), // Encoder en base64
          sha: fileData.sha, // SHA du fichier actuel (requis)
          branch: 'main',
        }),
      }
    );

    if (!updateFileResponse.ok) {
      const error = await updateFileResponse.json();
      throw new Error(`Erreur GitHub: ${JSON.stringify(error)}`);
    }

    return new Response(
      JSON.stringify({ 
        success: true, 
        message: 'Article publié avec succès !',
        slug: articleData.slug
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );

  } catch (error) {
    console.error('Erreur publication:', error);
    return new Response(
      JSON.stringify({ 
        error: 'Erreur lors de la publication',
        details: error instanceof Error ? error.message : 'Erreur inconnue'
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
