// Fonction serverless Vercel pour l'inscription newsletter.
// La clé API Brevo reste côté serveur (BREVO_API_KEY, sans préfixe VITE_).

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email } = req.body || {};

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    return res.status(400).json({ error: 'Email invalide' });
  }

  if (!process.env.BREVO_API_KEY) {
    console.error('BREVO_API_KEY manquante dans les variables d\'environnement Vercel');
    return res.status(500).json({ error: 'Configuration serveur manquante' });
  }

  try {
    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        accept: 'application/json',
        'api-key': process.env.BREVO_API_KEY,
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        listIds: [parseInt(process.env.BREVO_LIST_ID || '3', 10)],
        updateEnabled: false
      })
    });

    if (response.ok) {
      return res.status(200).json({ success: true, message: 'Inscription réussie' });
    }

    const data = await response.json().catch(() => ({}));

    if (data.code === 'duplicate_parameter') {
      return res.status(409).json({ code: 'duplicate_parameter', error: 'Cet email est déjà inscrit' });
    }

    console.error('Brevo error:', response.status, data);
    return res.status(502).json({ error: 'Erreur lors de l\'inscription' });
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Erreur serveur' });
  }
}
