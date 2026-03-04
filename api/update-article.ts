import type { VercelRequest, VercelResponse } from '@vercel/node';

interface UpdateData {
  articleId: string;
  updates: {
    title?: string;
    excerpt?: string;
    content?: string;
    category?: string;
    tags?: string[];
    readTime?: number;
    seo?: {
      metaTitle?: string;
      metaDescription?: string;
      keywords?: string[];
    };
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
    const { articleId, updates } = req.body as UpdateData;

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
    let content = Buffer.from(fileData.content, 'base64').toString('utf-8');

    // 2. Modifier les champs demandés
    if (updates.title) {
      content = content.replace(
        new RegExp(`(id:\\s*'${articleId}'[\\s\\S]*?title:\\s*')[^']*'`, 'g'),
        `$1${updates.title.replace(/'/g, "\\'")}',`
      );
    }

    if (updates.excerpt) {
      content = content.replace(
        new RegExp(`(id:\\s*'${articleId}'[\\s\\S]*?excerpt:\\s*')[^']*'`, 'g'),
        `$1${updates.excerpt.replace(/'/g, "\\'")}',`
      );
    }

    if (updates.content) {
      content = content.replace(
        new RegExp(`(id:\\s*'${articleId}'[\\s\\S]*?content:\\s*\`)[^\`]*\``, 'g'),
        `$1${updates.content.replace(/`/g, '\\`')}\`,`
      );
    }

    // 3. Pusher les modifications
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
          message: `✏️ Modification article ID: ${articleId}`,
          content: Buffer.from(content, 'utf-8').toString('base64'),
          sha: fileData.sha,
          branch: 'main',
        }),
      }
    );

    if (!updateResponse.ok) {
      throw new Error('Erreur GitHub lors de la modification');
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
