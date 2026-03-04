import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Loader2, Eye, EyeOff, User, KeyRound, CheckCircle } from 'lucide-react';

const AdminProfile = () => {
  const navigate = useNavigate();

  // Infos affichage
  const [displayName, setDisplayName] = useState('');
  const [username, setUsername] = useState('');

  // Nouveau mot de passe
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);

  // UI
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const stored = sessionStorage.getItem('oenoros_admin_user');
    if (!stored) {
      navigate('/admin');
      return;
    }
    setDisplayName(stored);
    const storedUsername = sessionStorage.getItem('oenoros_admin_username') || '';
    setUsername(storedUsername);
  }, [navigate]);

  const handleSave = async () => {
    setError('');
    setSuccess('');

    if (!displayName.trim()) {
      setError('Le nom ne peut pas être vide.');
      return;
    }

    if (newPassword) {
      if (newPassword.length < 8) {
        setError('Le nouveau mot de passe doit faire au moins 8 caractères.');
        return;
      }
      if (newPassword !== confirmPassword) {
        setError('Les mots de passe ne correspondent pas.');
        return;
      }
      if (!currentPassword) {
        setError('Renseigne le mot de passe actuel pour le changer.');
        return;
      }
    }

    setIsSaving(true);
    try {
      const body: Record<string, string> = {
        username,
        newDisplayName: displayName.trim(),
      };
      if (newPassword) {
        body.currentPassword = currentPassword;
        body.newPassword = newPassword;
      }

      const response = await fetch('/api/update-profile', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Erreur lors de la mise à jour');
      }

      // Mettre à jour la session
      sessionStorage.setItem('oenoros_admin_user', displayName.trim());

      setSuccess('✅ Profil mis à jour ! Les changements seront visibles dans 2-3 min.');
      setCurrentPassword('');
      setNewPassword('');
      setConfirmPassword('');
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => navigate('/admin')}
              className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors font-body text-sm"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour
            </button>
            <h1 className="font-display text-xl text-foreground">Mon profil</h1>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="flex items-center gap-2 px-6 py-2 bg-gold hover:bg-gold-light text-wine-dark rounded-lg font-body text-sm transition-colors disabled:opacity-50"
            >
              {isSaving ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Enregistrement...</>
              ) : (
                <><Save className="w-4 h-4" /> Enregistrer</>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Messages */}
      {success && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border-b border-green-200 px-6 py-3 flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-4 h-4 text-green-600" />
          <p className="font-body text-sm text-green-800">{success}</p>
        </motion.div>
      )}
      {error && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-50 border-b border-red-200 px-6 py-3 text-center"
        >
          <p className="font-body text-sm text-red-800">❌ {error}</p>
        </motion.div>
      )}

      {/* Contenu */}
      <main className="container mx-auto px-6 py-12">
        <div className="max-w-xl mx-auto space-y-6">

          {/* Informations */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-gold/20 rounded-full flex items-center justify-center">
                <User className="w-4 h-4 text-gold" />
              </div>
              <h2 className="font-body font-semibold text-foreground">Informations</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-body text-sm text-muted-foreground mb-1 block">
                  Identifiant (login) — non modifiable ici
                </label>
                <input
                  type="text"
                  value={username}
                  disabled
                  className="w-full px-4 py-3 rounded-xl border border-border bg-cream/40 font-body text-muted-foreground cursor-not-allowed"
                />
                <p className="text-xs text-muted-foreground mt-1">
                  Pour changer l'identifiant, contacte ton développeur.
                </p>
              </div>

              <div>
                <label className="font-body text-sm text-foreground mb-1 block">
                  Nom affiché *
                </label>
                <input
                  type="text"
                  value={displayName}
                  onChange={(e) => setDisplayName(e.target.value)}
                  placeholder="Ex: Melvyn GUEPET"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body"
                />
              </div>
            </div>
          </div>

          {/* Mot de passe */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-primary/10 rounded-full flex items-center justify-center">
                <KeyRound className="w-4 h-4 text-primary" />
              </div>
              <h2 className="font-body font-semibold text-foreground">Changer le mot de passe</h2>
            </div>

            <div className="space-y-4">
              <div>
                <label className="font-body text-sm text-foreground mb-1 block">
                  Mot de passe actuel
                </label>
                <div className="relative">
                  <input
                    type={showCurrent ? 'text' : 'password'}
                    value={currentPassword}
                    onChange={(e) => setCurrentPassword(e.target.value)}
                    placeholder="Mot de passe actuel"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-border focus:border-primary focus:outline-none font-body"
                    autoComplete="current-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowCurrent(!showCurrent)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showCurrent ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              <div>
                <label className="font-body text-sm text-foreground mb-1 block">
                  Nouveau mot de passe
                </label>
                <div className="relative">
                  <input
                    type={showNew ? 'text' : 'password'}
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    placeholder="8 caractères minimum"
                    className="w-full px-4 py-3 pr-12 rounded-xl border border-border focus:border-primary focus:outline-none font-body"
                    autoComplete="new-password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowNew(!showNew)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showNew ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
                {newPassword && (
                  <div className="mt-2 flex gap-1">
                    {[1,2,3,4].map(i => (
                      <div
                        key={i}
                        className={`h-1 flex-1 rounded-full transition-colors ${
                          newPassword.length >= i * 3
                            ? newPassword.length >= 12 ? 'bg-green-500'
                              : newPassword.length >= 8 ? 'bg-gold'
                              : 'bg-red-400'
                            : 'bg-border'
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>

              <div>
                <label className="font-body text-sm text-foreground mb-1 block">
                  Confirmer le nouveau mot de passe
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Répéter le nouveau mot de passe"
                  className={`w-full px-4 py-3 rounded-xl border focus:outline-none font-body transition-colors ${
                    confirmPassword && confirmPassword !== newPassword
                      ? 'border-red-400 focus:border-red-400'
                      : confirmPassword && confirmPassword === newPassword
                      ? 'border-green-400 focus:border-green-400'
                      : 'border-border focus:border-primary'
                  }`}
                  autoComplete="new-password"
                />
                {confirmPassword && confirmPassword !== newPassword && (
                  <p className="text-xs text-red-500 mt-1">Les mots de passe ne correspondent pas</p>
                )}
              </div>
            </div>

            <p className="font-body text-xs text-muted-foreground mt-4">
              Laisse ces champs vides si tu ne veux pas changer ton mot de passe.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminProfile;
