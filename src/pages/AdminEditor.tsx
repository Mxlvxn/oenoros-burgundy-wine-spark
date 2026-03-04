import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, Loader2, Upload, Image as ImageIcon, X } from 'lucide-react';
import { getAllPosts } from '@/data/blogPosts';
import { BLOG_CATEGORIES } from '@/types/blog';

const AdminEditor = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const editId = searchParams.get('edit'); // ID de l'article à éditer
  
  // États du formulaire
  const [articleId, setArticleId] = useState('');
  const [title, setTitle] = useState('');
  const [excerpt, setExcerpt] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState<keyof typeof BLOG_CATEGORIES>('actualites');
  const [tags, setTags] = useState('');
  const [readTime, setReadTime] = useState(5);
  const [metaTitle, setMetaTitle] = useState('');
  const [metaDescription, setMetaDescription] = useState('');
  const [keywords, setKeywords] = useState('');
  const [coverImage, setCoverImage] = useState('/placeholder.svg');
  
  // États UI
  const [previewMode, setPreviewMode] = useState(false);
  const [isPublishing, setIsPublishing] = useState(false);
  const [publishSuccess, setPublishSuccess] = useState(false);
  const [publishError, setPublishError] = useState('');
  const [uploadingImage, setUploadingImage] = useState(false);

  // Vérifier l'authentification
  useEffect(() => {
    const stored = sessionStorage.getItem('oenoros_admin_user');
    if (!stored) {
      navigate('/admin');
    }
  }, [navigate]);

  // Charger l'article si on est en mode édition
  useEffect(() => {
    if (editId) {
      const allPosts = getAllPosts();
      const post = allPosts.find(p => p.id === editId);
      
      if (post) {
        setArticleId(post.id);
        setTitle(post.title);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setCategory(post.category);
        setTags(post.tags.join(', '));
        setReadTime(post.readTime);
        setMetaTitle(post.seo.metaTitle);
        setMetaDescription(post.seo.metaDescription);
        setKeywords(post.seo.keywords.join(', '));
        setCoverImage(post.coverImage);
      }
    }
  }, [editId]);

  // Fonction pour générer un slug
  const generateSlug = (titleText: string): string => {
    return titleText
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-');
  };

  // Fonction pour uploader une image
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Vérifier que c'est une image
    if (!file.type.startsWith('image/')) {
      alert('❌ Seulement des images (JPG, PNG, WebP)');
      return;
    }

    // Vérifier la taille (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('❌ Image trop lourde (max 5MB)');
      return;
    }

    setUploadingImage(true);

    try {
      // Convertir en base64
      const reader = new FileReader();
      reader.onload = async (event) => {
        const base64 = event.target?.result as string;
        
        // Créer un nom de fichier unique
        const fileName = `blog-${Date.now()}.${file.type.split('/')[1]}`;
        
        // Uploader sur GitHub
        const response = await fetch('/api/upload-image', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            fileName,
            fileContent: base64.split(',')[1], // Enlever le préfixe data:image/...
          }),
        });

        if (!response.ok) {
          throw new Error('Erreur upload');
        }

        const result = await response.json();
        setCoverImage(result.path); // Ex: /blog/blog-123456.jpg
        alert('✅ Image uploadée !');
      };

      reader.readAsDataURL(file);
    } catch (error) {
      console.error(error);
      alert('❌ Erreur lors de l\'upload');
    } finally {
      setUploadingImage(false);
    }
  };

  // Fonction de publication/mise à jour
  const handlePublish = async () => {
    if (!title || !excerpt || !content) {
      alert('❌ Remplis au minimum le titre, l\'extrait et le contenu !');
      return;
    }

    setIsPublishing(true);
    setPublishError('');
    setPublishSuccess(false);

    try {
      const slug = generateSlug(title);
      const isEditing = !!editId;
      
      const articleData = {
        id: articleId || Date.now().toString(),
        slug,
        title,
        excerpt,
        content,
        coverImage,
        category,
        author: {
          name: "L'équipe Oenoros",
          role: 'Agence de communication viticole',
        },
        publishedAt: new Date().toISOString().split('T')[0],
        readTime,
        tags: tags.split(',').map(t => t.trim()).filter(Boolean),
        seo: {
          metaTitle: metaTitle || title,
          metaDescription: metaDescription || excerpt,
          keywords: keywords.split(',').map(k => k.trim()).filter(Boolean),
        },
      };

      // Appeler l'API appropriée
      const endpoint = isEditing ? '/api/update-article' : '/api/publish-article';
      const body = isEditing 
        ? { articleId, updates: articleData }
        : articleData;

      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });

      if (!response.ok) {
        throw new Error('Erreur lors de la publication');
      }

      setPublishSuccess(true);
      
      const msg = isEditing 
        ? '✅ Article modifié ! Visible dans 2-3 min sur le site.'
        : '✅ Article publié ! Visible dans 2-3 min sur le site.';
      
      alert(msg);
      
      setTimeout(() => {
        navigate('/admin');
      }, 2000);

    } catch (error) {
      console.error('Erreur:', error);
      setPublishError('Erreur lors de la publication. Vérifie la configuration.');
    } finally {
      setIsPublishing(false);
    }
  };

  // Rendu de la prévisualisation
  const renderPreview = () => {
    return (
      <div className="max-w-3xl mx-auto p-8">
        {/* Image de couverture */}
        {coverImage !== '/placeholder.svg' && (
          <img 
            src={coverImage} 
            alt={title}
            className="w-full h-96 object-cover rounded-2xl mb-8"
          />
        )}

        <span 
          className="inline-block px-4 py-2 rounded-full text-xs uppercase tracking-wider font-body font-medium text-white mb-6"
          style={{ backgroundColor: BLOG_CATEGORIES[category].color }}
        >
          {BLOG_CATEGORIES[category].label}
        </span>

        <h1 className="font-display text-4xl md:text-5xl text-foreground leading-[1.1] mb-6">
          {title || 'Titre de l\'article'}
        </h1>

        <p className="font-body text-lg text-muted-foreground mb-8 leading-relaxed">
          {excerpt || 'Extrait de l\'article...'}
        </p>

        <div className="prose prose-lg max-w-none font-body text-foreground/90 leading-relaxed">
          {content.split('\n\n').map((paragraph, index) => {
            if (paragraph.startsWith('### ')) {
              return <h3 key={index} className="text-2xl font-display mt-8 mb-3">{paragraph.replace('### ', '')}</h3>;
            }
            if (paragraph.startsWith('## ')) {
              return <h2 key={index} className="text-3xl font-display mt-12 mb-4">{paragraph.replace('## ', '')}</h2>;
            }
            if (paragraph.startsWith('# ')) {
              return <h1 key={index} className="text-4xl font-display mt-12 mb-6">{paragraph.replace('# ', '')}</h1>;
            }
            
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
              {editId ? 'Modifier l\'article' : 'Nouvel article'}
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
                onClick={handlePublish}
                disabled={isPublishing}
                className="flex items-center gap-2 px-6 py-2 bg-gold hover:bg-gold-light text-wine-dark rounded-lg font-body text-sm transition-colors disabled:opacity-50"
              >
                {isPublishing ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    {editId ? 'Mise à jour...' : 'Publication...'}
                  </>
                ) : (
                  <>
                    <Upload className="w-4 h-4" />
                    {editId ? 'Mettre à jour' : 'Publier'}
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      {publishSuccess && (
        <div className="bg-green-50 border-b border-green-200 px-6 py-3">
          <p className="font-body text-sm text-green-800 text-center">
            ✅ {editId ? 'Article modifié !' : 'Article publié !'} Redirection...
          </p>
        </div>
      )}

      {publishError && (
        <div className="bg-red-50 border-b border-red-200 px-6 py-3">
          <p className="font-body text-sm text-red-800 text-center">
            ❌ {publishError}
          </p>
        </div>
      )}

      {/* Contenu principal */}
      <main className="container mx-auto px-6 py-12">
        {previewMode ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-white rounded-3xl shadow-lg p-12"
          >
            {renderPreview()}
          </motion.div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Colonne principale */}
            <div className="lg:col-span-2 space-y-6">
              {/* Image de couverture */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Image de couverture
                </label>
                
                {coverImage !== '/placeholder.svg' ? (
                  <div className="relative">
                    <img 
                      src={coverImage} 
                      alt="Couverture"
                      className="w-full h-64 object-cover rounded-xl"
                    />
                    <button
                      onClick={() => setCoverImage('/placeholder.svg')}
                      className="absolute top-2 right-2 p-2 bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                ) : (
                  <label className="flex flex-col items-center justify-center w-full h-64 border-2 border-dashed border-border rounded-xl cursor-pointer hover:border-primary transition-colors">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      disabled={uploadingImage}
                    />
                    {uploadingImage ? (
                      <Loader2 className="w-12 h-12 text-primary animate-spin" />
                    ) : (
                      <>
                        <ImageIcon className="w-12 h-12 text-muted-foreground mb-2" />
                        <p className="font-body text-sm text-muted-foreground">
                          Clique pour uploader une image
                        </p>
                        <p className="font-body text-xs text-muted-foreground mt-1">
                          JPG, PNG, WebP - Max 5MB
                        </p>
                      </>
                    )}
                  </label>
                )}
              </div>

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
                  {excerpt.length} caractères
                </p>
              </div>

              {/* Contenu */}
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <label className="font-body text-sm font-medium text-foreground mb-2 block">
                  Contenu de l'article *
                </label>
                <div className="bg-cream/30 rounded-lg p-4 mb-3">
                  <p className="font-body text-xs text-muted-foreground">
                    <strong>Syntaxe :</strong> # Grand titre • ## Sous-titre • **gras** • *italique*
                  </p>
                </div>
                <textarea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  placeholder="# Titre principal&#10;&#10;Votre contenu ici..."
                  rows={20}
                  className="w-full px-4 py-3 rounded-xl border border-border focus:border-primary focus:outline-none font-body font-mono text-sm resize-none"
                />
                <p className="text-xs text-muted-foreground mt-2">
                  {content.split(' ').filter(Boolean).length} mots
                </p>
              </div>
            </div>

            {/* Colonne latérale */}
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
                  Temps de lecture (min)
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
            </div>
          </div>
        )}
      </main>
    </div>
  );
};

export default AdminEditor;
