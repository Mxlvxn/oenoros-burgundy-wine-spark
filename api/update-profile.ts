import type { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') return res.status(200).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const GITHUB_TOKEN = process.env.GITHUB_TOKEN;
  const GITHUB_OWNER = 'Mxlvxn';
  const GITHUB_REPO = 'oenoros-burgundy-wine-spark';
  const FILE_PATH = 'src/pages/AdminBlog.tsx';

  if (!GITHUB_TOKEN) {
    return res.status(500).json({ error: 'Token GitHub non configuré' });
  }

  try {
    const { username, newDisplayName, currentPassword, newPassword } = req.body;

    if (!username || !newDisplayName) {
      return res.status(400).json({ error: 'Données manquantes' });
    }

    // 1. Récupérer AdminBlog.tsx depuis GitHub
    const getResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
        },
      }
    );

    if (!getResponse.ok) {
      throw new Error('Impossible de récupérer AdminBlog.tsx');
    }

    const fileData: any = await getResponse.json();
    let content = Buffer.from(fileData.content, 'base64').toString('utf-8');

    // 2. Trouver l'utilisateur dans ADMIN_USERS par username
    // Regex pour matcher l'objet user avec cet username
    const userBlockRegex = new RegExp(
      `(\\{[^}]*username:\\s*'${username}'[^}]*\\})`,
      's'
    );
    const match = content.match(userBlockRegex);
    if (!match) {
      return res.status(404).json({ error: `Utilisateur '${username}' introuvable dans le code` });
    }

    const oldBlock = match[1];

    // Vérifier le mot de passe actuel si on veut le changer
    if (newPassword) {
      if (!currentPassword) {
        return res.status(400).json({ error: 'Mot de passe actuel requis' });
      }
      const pwMatch = oldBlock.match(/password:\s*'([^']+)'/);
      const storedPw = pwMatch?.[1];
      if (storedPw !== currentPassword) {
        return res.status(403).json({ error: 'Mot de passe actuel incorrect' });
      }
    }

    // 3. Construire le nouveau bloc
    let newBlock = oldBlock.replace(
      /name:\s*'[^']*'/,
      `name: '${newDisplayName.replace(/'/g, "\\'")}'`
    );
    if (newPassword) {
      newBlock = newBlock.replace(
        /password:\s*'[^']*'/,
        `password: '${newPassword.replace(/'/g, "\\'")}'`
      );
    }

    content = content.replace(oldBlock, newBlock);

    // 4. Push sur GitHub
    const updateResponse = await fetch(
      `https://api.github.com/repos/${GITHUB_OWNER}/${GITHUB_REPO}/contents/${FILE_PATH}`,
      {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${GITHUB_TOKEN}`,
          Accept: 'application/vnd.github.v3+json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          message: `👤 Mise à jour profil: ${newDisplayName}`,
          content: Buffer.from(content, 'utf-8').toString('base64'),
          sha: fileData.sha,
          branch: 'main',
        }),
      }
    );

    if (!updateResponse.ok) {
      const err = await updateResponse.json();
      throw new Error(`Erreur GitHub: ${JSON.stringify(err)}`);
    }

    return res.status(200).json({ success: true, message: 'Profil mis à jour !' });
  } catch (error: any) {
    console.error('❌ update-profile error:', error);
    return res.status(500).json({ error: error.message || 'Erreur interne' });
  }
}
