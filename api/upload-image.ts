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
    const { fileName, fileContent } = req.body;

    if (!fileName || !fileContent) {
      return res.status(400).json({ error: 'Nom et contenu requis' });
    }

    const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
    const GITHUB_OWNER = 'Mxlvxn';
    const GITHUB_REPO = 'oenoros-burgundy-wine-spark';
    const FILE_PATH = `public/blog/${fileName}`;

    if (!GITHUB_TOKEN) {
      return res.status(500).json({ error: 'Token GitHub non configuré' });
    }

    // Uploader l'image sur GitHub
    const response = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${GITHUB_TOKEN}`,
          'Accept': 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `📸 Upload image: ${fileName}`,
          content: fileContent,
          branch: 'main',
        }),
      }
    );

    if (!response.ok) {
      const error = await response.json();
      throw new Error(`Erreur GitHub: ${JSON.stringify(error)}`);
    }

    return res.status(200).json({ 
      success: true,
      path: `/blog/${fileName}`,
      message: 'Image uploadée avec succès !'
    });

  } catch (error: any) {
    console.error('❌ Erreur upload:', error);
    return res.status(500).json({ 
      error: 'Erreur lors de l\'upload',
      details: error.message 
    });
  }
}
