import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Save, Eye, Loader2 } from 'lucide-react';
import { getPostBySlug } from '@/data/blogPosts';
import { BLOG_CATEGORIES } from '@/types/blog';

const AdminEditor = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editSlug = searchParams.get('edit'); // Si on modifie un article existant
  
  // États du formulaire
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<keyof typeof BLOG_CATEGORIES>('actualites');
  const [tags, setTags] = useState('');
  const [readTime, setReadTime] = useState(5);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  
  // États UI
  const [previewMode, setPreviewMode] = useState(false);
  const [isSaving, setIsSaving] = useState(false);
  const [savedData, setSavedData] = useState<string | null>(null);

  // Vérifier l'authentification
  useEffect(() => {
    const stored = sessionStorage.getItem('oenoros_admin_user');
    if (!stored) {
      navigate('/admin');
    }
  }, [navigate]);

  // Charger l'article si on est en mode édition
  useEffect(() => {
    if (editSlug) {
      const post = getPostBySlug(editSlug);
      if (post) {
        setTitle(post.title);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setCategory(post.category);
        setTags(post.tags.join(', '));
        setReadTime(post.readTime);
        setMetaTitle(post.seo.metaTitle);
        setMetaDescription(post.seo.metaDescription);
        setKeywords(post.seo.keywords.join(', '));
      }
    }
  }, [editSlug]);

  // Fonction pour sauvegarder localement (dans le navigateur)
  const handleSave = () => {
    setIsSaving(true);
    
    const articleData = {
      title,
      excerpt,
      content,
      category,
      tags: tags.split(',').map(t => t.trim()),
      readTime,
      seo: {
        metaTitle,
        metaDescription,
        keywords: keywords.split(',').map(k => k.trim()),
      },
      savedAt: new Date().toISOString(),
    };

    // Sauvegarder dans localStorage
    localStorage.setItem('oenoros_draft_article', JSON.stringify(articleData));
    setSavedData(JSON.stringify(articleData, null, 2));

    setTimeout(() => {
      setIsSaving(false);
      alert('✅ Article sauvegardé localement ! (Partie 3 pour publier sur GitHub)');
    }, 500);
  };

  // Rendu de la prévisualisation
  const renderPreview = () => {
    return (
      <div className="max-w-3xl mx-auto p-8">
        {/* Badge catégorie */}
        <span 
          className="inline-block px-4 py-2 rounded-full text-xs uppercase tracking-wider font-body font-medium text-white mb-6"
          style={{ backgroundColor: BLOG_CATEGORIES[category].color }}
        >
          {BLOG_CATEGORIES[category].label}
        </span>

        {/* Titre */}
        <h1 className="font-display text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
          {title || 'Titre de l\'article'}
        </h1>

        {/* Excerpt */}
        <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
          {excerpt || 'Extrait de l\'article...'}
        </p>

        {/* Contenu */}
        <div className="prose prose-lg max-w-none font-body text-foreground/90 leading-relaxed">
          {content.split('\n\n').map((paragraph, index) => {
            // Gestion des titres
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-2xl font-display mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-3xl font-display mt-12 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-4xl font-display mt-12 mb-6">{paragraph.replace('# ', '')}</h1>;
            }
            
            // Gestion du gras et italique
            let formattedText = paragraph;
            formattedText = formattedText.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>');
            formattedText = formattedText.replace(/\*(.*?)\*/g, '<em>$1</em>');
            
            return (
              <p 
                key={index} 
                className="mb-6" 
                dangerouslySetInnerHTML={{ __html: formattedText }}
              />
            );
          })}
        </div>

        {/* Tags */}
        {tags && (
          <div className="mt-12 pt-8 border-t border-border">
            <div className="flex flex-wrap gap-2">
              {tags.split(',').map((tag, index) => (
                <span
                  key={index}
                  className="text-xs px-3 py-1.5 rounded-full bg-cream text-foreground font-body uppercase tracking-wide"
                >
                  {tag.trim()}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    );
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

            <h1 className="font-display text-xl text-foreground">
              {editSlug ? 'Modifier l\'article' : 'Nouvel article'}
            </h1>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setPreviewMode(!previewMode)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg font-body text-sm transition-colors ${
                  previewMode 
                    ? 'bg-primary text-white' 
                    : 'bg-cream text-foreground hover:bg-cream-dark'
                }`}
              >
                <Eye className="w-4 h-4" />
                {previewMode ? 'Éditer' : 'Aperçu'}
              </button>

              <button
                onClick={handleSave}
                disabled={isSaving}
                className="flex items-center gap-2 px-6 py-2 bg-gold hover:bg-gold-light text-wine-dark rounded-lg font-body text-sm transition-colors disabled:opacity-50"
              >
                {isSaving ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Sauvegarde...
                  </>
                ) : (
                  <>
                    <Save className="w-4 h-4" />
                    Sauvegarder
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Contenu principal */}
      <main className="container mx-auto px-6 py-12">
        {previewMode ? (
          // MODE PRÉVISUALISATION
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl shadow-lg p-12"
          >
            {renderPreview()}
          </motion.div>
        ) : (
          // MODE ÉDITION
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale - Éditeur */}
            <div className="lg:col-span-2 space-y-6">
              {/* Titre */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Titre de l'article *
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Ex: Les 5 erreurs marketing des vignerons"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body text-lg"
                />
              </div>

              {/* Extrait */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Extrait (résumé court) *
                </label>
                <textarea
                  value={excerpt}
                  onChange={(e) => setExcerpt(e.target.value)}
                  placeholder="1-2 phrases qui résument l'article..."
                  rows={3}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body resize-none"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {excerpt.length} caractères (recommandé : 100-200)
                </p>
              </div>

              {/* Contenu principal */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Contenu de l'article *
                </label>
                <div className="bg-cream/30 rounded-lg p-4 mb-3">
                  <p className="font-body text-xs text-muted-foreground">
                    <strong>Syntaxe Markdown :</strong> # Grand titre • ## Sous-titre • ### Petit titre • **gras** • *italique*
                  </p>
                </div>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="# Titre principal&#10;&#10;Votre contenu ici...&#10;&#10;## Sous-titre&#10;&#10;Plus de contenu..."
                  rows={20}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body font-mono text-sm resize-none"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {content.split(' ').length} mots • ~{Math.ceil(content.split(' ').length / 200)} min de lecture
                </p>
              </div>
            </div>

            {/* Colonne latérale - Métadonnées */}
            <div className="lg:col-span-1 space-y-6">
              {/* Catégorie */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="font-body text-sm font-medium text-foreground mb-3 block">
                  Catégorie *
                </label>
                <div className="space-y-2">
                  {Object.entries(BLOG_CATEGORIES).map(([key, cat]) => (
                    <button
                      key={key}
                      onClick={() => setCategory(key as keyof typeof BLOG_CATEGORIES)}
                      className={`w-full text-left px-4 py-3 rounded-lg font-body text-sm transition-all ${
                        category === key
                          ? 'text-white'
                          : 'bg-cream hover:bg-cream-dark text-foreground'
                      }`}
                      style={{
                        backgroundColor: category === key ? cat.color : undefined,
                      }}
                    >
                      {cat.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tags */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Tags
                </label>
                <input
                  type="text"
                  value={tags}
                  onChange={(e) => setTags(e.target.value)}
                  placeholder="marketing, vin, bourgogne"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body text-sm"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  Séparez par des virgules
                </p>
              </div>

              {/* Temps de lecture */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Temps de lecture (minutes)
                </label>
                <input
                  type="number"
                  value={readTime}
                  onChange={(e) => setReadTime(Number(e.target.value))}
                  min="1"
                  max="60"
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body"
                />
              </div>

              {/* SEO */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="font-body text-sm font-medium text-foreground mb-4">
                  SEO / GEO
                </h3>
                
                <div className="space-y-4">
                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-1 block">
                      Meta Titre (60 char max)
                    </label>
                    <input
                      type="text"
                      value={metaTitle}
                      onChange={(e) => setMetaTitle(e.target.value)}
                      placeholder="Titre pour Google"
                      maxLength={60}
                      className="w-full px-3 py-2 rounded-lg border border-border focus:border-primary focus:outline-none font-body text-sm"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {metaTitle.length}/60
                    </p>
                  </div>

                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-1 block">
                      Meta Description (155 char max)
                    </label>
                    <textarea
                      value={metaDescription}
                      onChange={(e) => setMetaDescription(e.target.value)}
                      placeholder="Description pour Google"
                      maxLength={155}
                      rows={3}
                      className="w-full px-3 py-2 rounded-lg border border-border focus:border-primary focus:outline-none font-body text-sm resize-none"
                    />
                    <p className="text-xs text-muted-foreground mt-1">
                      {metaDescription.length}/155
                    </p>
                  </div>

                  <div>
                    <label className="font-body text-xs text-muted-foreground mb-1 block">
                      Mots-clés
                    </label>
                    <input
                      type="text"
                      value={keywords}
                      onChange={(e) => setKeywords(e.target.value)}
                      placeholder="mot1, mot2, mot3"
                      className="w-full px-3 py-2 rounded-lg border border-border focus:border-primary focus:outline-none font-body text-sm"
                    />
                  </div>
                </div>
              </div>

              {/* Info Partie 3 */}
              <div className="bg-gold/10 border border-gold/30 rounded-2xl p-6">
                <p className="font-body text-xs text-foreground leading-relaxed">
                  💡 <strong>Partie 2 active :</strong> Tu peux écrire et prévisualiser ton article. La sauvegarde est locale (dans ton navigateur).
                  <br /><br />
                  <strong>Partie 3 à venir :</strong> Publication automatique sur GitHub !
                </p>
              </div>
            </div>
          </div>
        )}

        {/* Debug : Afficher les données sauvegardées */}
        {savedData && (
          <div className="mt-8 bg-white rounded-2xl p-6 shadow-sm">
            <h3 className="font-body text-sm font-medium text-foreground mb-3">
              📦 Données sauvegardées (copie ça pour la Partie 3)
            </h3>
            <pre className="bg-cream rounded-lg p-4 overflow-auto text-xs font-mono">
              {savedData}
            </pre>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminEditor;
