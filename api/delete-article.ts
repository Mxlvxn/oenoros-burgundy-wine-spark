import type { VercelRequest, VercelResponse } from '@vercel/node';

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
    const { articleId } = req.body;

    if (!articleId) {
      return res.status(400).json({ error: 'ID article manquant' });
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

    // 2. Supprimer l'article
    const lines = currentContent.split('\n');
    let articleStart = -1;
    let articleEnd = -1;
    let braceCount = 0;
    let foundArticle = false;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i];
      
      // Trouver l'article avec cet ID
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

      // Compter les accolades pour trouver la fin
      if (foundArticle && i >= articleStart) {
        const openBraces = (line.match(/{/g) || []).length;
        const closeBraces = (line.match(/}/g) || []).length;
        braceCount += openBraces - closeBraces;
        
        if (braceCount === 0) {
          articleEnd = i;
          // Inclure la virgule qui suit si elle existe
          if (lines[i + 1]?.trim() === ',') {
            articleEnd = i + 1;
          }
          break;
        }
      }
    }

    if (articleStart === -1 || articleEnd === -1) {
      return res.status(404).json({ error: 'Article non trouvé' });
    }

    // Supprimer les lignes
    lines.splice(articleStart, articleEnd - articleStart + 1);
    const newContent = lines.join('\n');

    // 3. Pusher sur GitHub
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
          message: `🗑️ Suppression article ID: ${articleId}`,
          content: Buffer.from(newContent, 'utf-8').toString('base64'),
          sha: fileData.sha,
          branch: 'main',
        }),
      }
    );

    if (!updateResponse.ok) {
      throw new Error('Erreur GitHub lors de la suppression');
    }

    return res.status(200).json({ 
      success: true,
      message: 'Article supprimé avec succès !'
    });

  } catch (error: any) {
    console.error('❌ Erreur:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de la suppression',
      details: error.message 
    });
  }
}
