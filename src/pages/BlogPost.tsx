import { useParams, Link, Navigate } from 'react-router-dom';
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Clock, Calendar, Tag } from 'lucide-react';
import { getPostBySlug, getRecentPosts } from '@/data/blogPosts';
import { BLOG_CATEGORIES } from '@/types/blog';
import AnimatedSection from '@/components/AnimatedSection';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';
import BlogCard from '@/components/BlogCard';

// ─── Markdown parser (aligné sur l'aperçu AdminEditor) ───────────────────────
const inlineFormat = (text: string): string => {
  return text
    .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
    .replace(/\*(.*?)\*/g, '<em>$1</em>');
};

const renderMarkdown = (raw: string): JSX.Element[] => {
  const blocks = raw.split(/\n\n+/);

  return blocks.map((block, idx) => {
    const trimmed = block.trim();
    if (!trimmed) return <></>;

    if (trimmed.startsWith('### ')) {
      return (
        <h3 key={idx} className="font-display text-2xl text-foreground mt-8 mb-3">
          {trimmed.replace(/^### /, '')}
        </h3>
      );
    }
    if (trimmed.startsWith('## ')) {
      return (
        <h2 key={idx} className="font-display text-3xl text-foreground mt-12 mb-4">
          {trimmed.replace(/^## /, '')}
        </h2>
      );
    }
    if (trimmed.startsWith('# ')) {
      return (
        <h1 key={idx} className="font-display text-4xl text-foreground mt-12 mb-6">
          {trimmed.replace(/^# /, '')}
        </h1>
      );
    }

    const lines = trimmed.split('\n');
    const isAllList = lines.length > 0 && lines.every(l => l.trim().startsWith('- '));
    if (isAllList) {
      return (
        <ul key={idx} className="list-disc pl-6 my-6 space-y-2">
          {lines.map((line, li) => (
            <li
              key={li}
              className="font-body text-foreground/90 leading-relaxed"
              dangerouslySetInnerHTML={{ __html: inlineFormat(line.replace(/^- /, '')) }}
            />
          ))}
        </ul>
      );
    }

    const html = lines.map(l => inlineFormat(l)).join('<br />');
    return (
      <p
        key={idx}
        className="font-body text-foreground/90 leading-relaxed mb-6"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    );
  });
};
// ─────────────────────────────────────────────────────────────────────────────

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getPostBySlug(slug) : undefined;
  const recentPosts = getRecentPosts(3).filter(p => p.slug !== slug);

  useEffect(() => {
    if (post) {
      document.title = post.seo.metaTitle;
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', post.seo.metaDescription);
      }
    }
  }, [post]);

  if (!post) {
    return <Navigate to="/actualites" replace />;
  }

  const categoryInfo = BLOG_CATEGORIES[post.category];

  return (
    <>
      <section className="pt-32 pb-10 bg-background">
        <div className="container mx-auto px-6">
          <Link to="/actualites">
            <motion.button
              whileHover={{ x: -5 }}
              className="flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-primary transition-colors group"
            >
              <ArrowLeft className="w-4 h-4" />
              Retour aux actualités
            </motion.button>
          </Link>
        </div>
      </section>

      <section className="pb-16 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <AnimatedSection>
              <span
                className="inline-block px-4 py-2 rounded-full text-[10px] uppercase tracking-wider font-body font-medium text-white mb-6"
                style={{ backgroundColor: categoryInfo.color }}
              >
                {categoryInfo.label}
              </span>
            </AnimatedSection>

            <AnimatedSection delay={0.1}>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground leading-[1.1] mb-8">
                {post.title}
              </h1>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="flex flex-wrap items-center gap-6 text-sm text-muted-foreground font-body mb-8">
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime={post.publishedAt}>
                    {format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: fr })}
                  </time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  {post.readTime} minutes de lecture
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-medium">{post.author.name}</span>
                  <span className="text-muted-foreground/50">•</span>
                  <span>{post.author.role}</span>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <div className="relative aspect-[21/9] overflow-hidden rounded-3xl mb-12">
                <img
                  src={post.coverImage}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/30 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="pb-20 bg-background">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <AnimatedSection>
              <div className="prose prose-lg max-w-none">
                {renderMarkdown(post.content)}
              </div>
            </AnimatedSection>

            {post.tags.length > 0 && (
              <AnimatedSection delay={0.1}>
                <div className="mt-12 pt-8 border-t border-border">
                  <div className="flex items-center gap-3 flex-wrap">
                    <Tag className="w-4 h-4 text-muted-foreground" />
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1.5 rounded-full bg-cream text-foreground font-body uppercase tracking-wide hover:bg-cream-dark transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </AnimatedSection>
            )}
          </div>
        </div>
      </section>

      {recentPosts.length > 0 && (
        <section className="py-20 bg-cream border-t border-border">
          <div className="container mx-auto px-6">
            <AnimatedSection>
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-12 text-center">
                Continuer la lecture
              </h2>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
              {recentPosts.map((recentPost, index) => (
                <BlogCard key={recentPost.id} post={recentPost} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-24 bg-primary text-white">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
              Prêt à passer à l'action ?
            </p>
            <h2 className="font-display text-4xl md:text-5xl mb-6">
              Votre domaine mérite
              <br />
              <span className="italic text-gold">une identité forte</span>
            </h2>
            <p className="font-body text-white/80 max-w-lg mx-auto mb-10 leading-relaxed">
              Discutons de votre projet. Une simple conversation peut tout changer.
            </p>
            <Link to="/contact">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-4 rounded-full bg-gold text-wine-dark font-body font-medium hover:bg-gold-light transition-colors"
              >
                Démarrer un projet
              </motion.button>
            </Link>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default BlogPost;
