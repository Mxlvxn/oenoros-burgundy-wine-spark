import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Lock, LogOut, Edit, Trash2, Plus } from 'lucide-react';
import { getAllPosts } from '@/data/blogPosts';
import { BLOG_CATEGORIES } from '@/types/blog';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

// ============================================
// CONFIGURATION DES ACCÈS
// Pour ajouter/modifier/supprimer des utilisateurs,
// modifie ce tableau directement ici.
// ============================================
const ADMIN_USERS = [
  {
    username: 'melvyn',
    password: 'Oenoros2026!', // Change ce mot de passe !
    name: 'Melvyn GUEPET'
  },
  // Ajoute d'autres utilisateurs ici si besoin :
  // {
  //   username: 'ton-associe',
  //   password: 'MotDePasse123!',
  //   name: 'Prénom Nom'
  // },
];

const AdminBlog = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState('');
  
  const allPosts = getAllPosts();

  // Vérifier si déjà connecté (stocké temporairement en mémoire)
  useEffect(() => {
    const stored = sessionStorage.getItem('oenoros_admin_user');
    if (stored) {
      setIsAuthenticated(true);
      setCurrentUser(stored);
    }
  }, []);

  // Fonction de connexion
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const user = ADMIN_USERS.find(
      u => u.username === username && u.password === password
    );

    if (user) {
      setIsAuthenticated(true);
      setCurrentUser(user.name);
      sessionStorage.setItem('oenoros_admin_user', user.name);
    } else {
      setError('Identifiants incorrects');
      setPassword('');
    }
  };

  // Fonction de déconnexion
  const handleLogout = () => {
    setIsAuthenticated(false);
    setCurrentUser('');
    setUsername('');
    setPassword('');
    sessionStorage.removeItem('oenoros_admin_user');
  };

  // ============================================
  // ÉCRAN DE CONNEXION
  // ============================================
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-wine-dark via-primary to-wine-light flex items-center justify-center p-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white rounded-3xl shadow-2xl p-10 w-full max-w-md"
        >
          {/* Logo/Titre */}
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-wine-dark" />
            </div>
            <h1 className="font-display text-3xl text-foreground mb-2">
              Oenoros Admin
            </h1>
            <p className="font-body text-sm text-muted-foreground">
              Gestion du blog
            </p>
          </div>

          {/* Formulaire de connexion */}
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="font-body text-sm text-foreground mb-2 block">
                Identifiant
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body"
                placeholder="Ton identifiant"
                autoComplete="username"
              />
            </div>

            <div>
              <label className="font-body text-sm text-foreground mb-2 block">
                Mot de passe
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body"
                placeholder="Ton mot de passe"
                autoComplete="current-password"
              />
            </div>

            {error && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="bg-red-50 border border-red-200 rounded-xl p-3 text-center"
              >
                <p className="font-body text-sm text-red-600">{error}</p>
              </motion.div>
            )}

            <button
              type="submit"
              className="w-full bg-primary hover:bg-wine-dark text-white font-body py-3 rounded-xl transition-colors duration-300"
            >
              Se connecter
            </button>
          </form>

          {/* Note de sécurité */}
          <p className="font-body text-xs text-muted-foreground text-center mt-6">
            🔒 Accès réservé aux administrateurs Oenoros
          </p>
        </motion.div>
      </div>
    );
  }

  // ============================================
  // PANNEAU ADMIN (après connexion)
  // ============================================
  return (
    <div className="min-h-screen bg-background">
      {/* Header Admin */}
      <header className="bg-white border-b border-border sticky top-0 z-50">
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-display text-2xl text-foreground">
                Gestion du Blog
              </h1>
              <p className="font-body text-sm text-muted-foreground">
                Connecté en tant que <span className="font-medium text-primary">{currentUser}</span>
              </p>
            </div>
            
            <div className="flex items-center gap-4">
              {/* Bouton Nouvel Article (pas encore fonctionnel) */}
              <button
                disabled
                className="flex items-center gap-2 px-6 py-2.5 bg-cream text-muted-foreground rounded-full font-body text-sm cursor-not-allowed opacity-50"
              >
                <Plus className="w-4 h-4" />
                Nouvel article
                <span className="text-xs">(Partie 2)</span>
              </button>

              {/* Bouton Déconnexion */}
              <button
                onClick={handleLogout}
                className="flex items-center gap-2 px-6 py-2.5 bg-primary hover:bg-wine-dark text-white rounded-full font-body text-sm transition-colors"
              >
                <LogOut className="w-4 h-4" />
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Liste des articles */}
      <main className="container mx-auto px-6 py-12">
        <div className="bg-white rounded-3xl shadow-lg overflow-hidden">
          {/* En-tête du tableau */}
          <div className="bg-cream px-8 py-4 border-b border-border">
            <div className="grid grid-cols-12 gap-4 font-body text-sm font-medium text-muted-foreground uppercase tracking-wide">
              <div className="col-span-5">Titre</div>
              <div className="col-span-2">Catégorie</div>
              <div className="col-span-2">Date</div>
              <div className="col-span-1">Lecture</div>
              <div className="col-span-2 text-right">Actions</div>
            </div>
          </div>

          {/* Lignes des articles */}
          <div className="divide-y divide-border">
            {allPosts.length === 0 ? (
              <div className="px-8 py-12 text-center">
                <p className="font-body text-muted-foreground">
                  Aucun article pour le moment.
                </p>
              </div>
            ) : (
              allPosts.map((post, index) => {
                const categoryInfo = BLOG_CATEGORIES[post.category];
                
                return (
                  <motion.div
                    key={post.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05 }}
                    className="px-8 py-6 hover:bg-cream/30 transition-colors"
                  >
                    <div className="grid grid-cols-12 gap-4 items-center">
                      {/* Titre */}
                      <div className="col-span-5">
                        <h3 className="font-body font-medium text-foreground mb-1">
                          {post.title}
                        </h3>
                        <p className="font-body text-xs text-muted-foreground line-clamp-1">
                          {post.excerpt}
                        </p>
                      </div>

                      {/* Catégorie */}
                      <div className="col-span-2">
                        <span
                          className="inline-block px-3 py-1 rounded-full text-xs font-body text-white"
                          style={{ backgroundColor: categoryInfo.color }}
                        >
                          {categoryInfo.label}
                        </span>
                      </div>

                      {/* Date */}
                      <div className="col-span-2">
                        <p className="font-body text-sm text-muted-foreground">
                          {format(new Date(post.publishedAt), 'd MMM yyyy', { locale: fr })}
                        </p>
                      </div>

                      {/* Temps de lecture */}
                      <div className="col-span-1">
                        <p className="font-body text-sm text-muted-foreground">
                          {post.readTime} min
                        </p>
                      </div>

                      {/* Actions */}
                      <div className="col-span-2 flex items-center justify-end gap-2">
                        {/* Bouton Modifier (pas encore fonctionnel) */}
                        <button
                          disabled
                          className="p-2 hover:bg-cream rounded-lg transition-colors cursor-not-allowed opacity-50"
                          title="Modifier (Partie 2)"
                        >
                          <Edit className="w-4 h-4 text-muted-foreground" />
                        </button>

                        {/* Bouton Supprimer (pas encore fonctionnel) */}
                        <button
                          disabled
                          className="p-2 hover:bg-red-50 rounded-lg transition-colors cursor-not-allowed opacity-50"
                          title="Supprimer (Partie 4)"
                        >
                          <Trash2 className="w-4 h-4 text-red-400" />
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })
            )}
          </div>
        </div>

        {/* Info sur les prochaines parties */}
        <div className="mt-8 bg-gold/10 border border-gold/30 rounded-2xl p-6">
          <h3 className="font-display text-lg text-foreground mb-3">
            🚧 En construction
          </h3>
          <div className="font-body text-sm text-muted-foreground space-y-1">
            <p>✅ <strong>Partie 1 terminée :</strong> Connexion + Liste des articles</p>
            <p>⏳ <strong>Partie 2 à venir :</strong> Éditeur pour créer/modifier des articles</p>
            <p>⏳ <strong>Partie 3 à venir :</strong> Publication automatique sur GitHub</p>
            <p>⏳ <strong>Partie 4 à venir :</strong> Upload d'images + Suppression</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminBlog;
