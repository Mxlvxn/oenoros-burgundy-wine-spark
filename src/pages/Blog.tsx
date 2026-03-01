import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import BlogCard from '@/components/BlogCard';
import { getAllPosts } from '@/data/blogPosts';
import { BLOG_CATEGORIES } from '@/types/blog';
import AnimatedSection, { AnimatedText } from '@/components/AnimatedSection';

type CategoryFilter = keyof typeof BLOG_CATEGORIES | 'all';

const Blog = () => {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');
  const allPosts = getAllPosts();
  
  const filteredPosts = activeFilter === 'all' 
    ? allPosts 
    : allPosts.filter(post => post.category === activeFilter);

  // Set page title and meta description
  useEffect(() => {
    document.title = 'Actualités & Insights - Oenoros | Marketing Viticole en Bourgogne';
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Découvrez nos articles, guides et analyses sur le marketing viticole. Stratégies, tendances et expertise pour les domaines de Bourgogne.');
    }
  }, []);

  return (
    <>
      <section className="relative pt-32 pb-20 overflow-hidden bg-background">
        <div className="absolute inset-0 bg-gradient-to-b from-cream/30 to-transparent pointer-events-none" />
        <div className="container mx-auto px-6 relative">
          <AnimatedText>
            <p className="font-body text-[11px] uppercase tracking-[0.35em] text-gold mb-6 flex items-center gap-3">
              <span className="w-10 h-px bg-gold" />
              Blog & Actualités
            </p>
          </AnimatedText>
          
          <AnimatedSection>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl text-foreground leading-[1.1] mb-6">
              Insights & Expertise
              <br />
              <span className="italic text-primary">Viticole</span>
            </h1>
          </AnimatedSection>

          <AnimatedSection delay={0.1}>
            <p className="font-body text-base text-muted-foreground max-w-2xl leading-relaxed">
              Stratégies, tendances et analyses pour les domaines viticoles qui refusent l'ordinaire. 
              Découvrez notre vision du marketing au service de l'excellence bourguignonne.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Filtres par catégorie */}
      <section className="border-y border-border bg-white sticky top-0 z-40 backdrop-blur-lg bg-white/80">
        <div className="container mx-auto px-6 py-6">
          <div className="flex flex-wrap gap-3 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter('all')}
              className={`px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                activeFilter === 'all'
                  ? 'bg-primary text-white'
                  : 'bg-cream text-foreground hover:bg-cream-dark'
              }`}
            >
              Tous les articles
            </motion.button>
            
            {Object.entries(BLOG_CATEGORIES).map(([key, category]) => (
              <motion.button
                key={key}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveFilter(key as CategoryFilter)}
                className={`px-6 py-2.5 rounded-full font-body text-sm transition-all duration-300 ${
                  activeFilter === key
                    ? 'text-white'
                    : 'bg-cream text-foreground hover:bg-cream-dark'
                }`}
                style={{
                  backgroundColor: activeFilter === key ? category.color : undefined,
                }}
              >
                {category.label}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid des articles */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6">
          {filteredPosts.length === 0 ? (
            <AnimatedSection>
              <div className="text-center py-20">
                <p className="font-body text-lg text-muted-foreground">
                  Aucun article dans cette catégorie pour le moment.
                </p>
              </div>
            </AnimatedSection>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {filteredPosts.map((post, index) => (
                <BlogCard key={post.id} post={post} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-6 text-center">
          <AnimatedSection>
            <p className="font-body text-[11px] uppercase tracking-[0.35em] text-gold mb-6">
              Restons en contact
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Envie d'échanger sur
              <br />
              <span className="italic text-primary">votre projet ?</span>
            </h2>
            <p className="font-body text-muted-foreground max-w-lg mx-auto mb-10 leading-relaxed">
              Chaque domaine a une histoire unique. Parlons de la vôtre.
            </p>
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block px-10 py-4 rounded-full bg-primary text-white font-body font-medium hover:bg-wine-dark transition-colors"
            >
              Prendre rendez-vous
            </motion.a>
          </AnimatedSection>
        </div>
      </section>
    </>
  );
};

export default Blog;
