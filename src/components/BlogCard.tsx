import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowUpRight, Clock } from 'lucide-react';
import { BlogPost, BLOG_CATEGORIES } from '@/types/blog';
import { format } from 'date-fns';
import { fr } from 'date-fns/locale';

interface BlogCardProps {
  post: BlogPost;
  index?: number;
}

const BlogCard = ({ post, index = 0 }: BlogCardProps) => {
  const categoryInfo = BLOG_CATEGORIES[post.category];

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
      className="group"
    >
      <Link to={`/actualites/${post.slug}`} className="block">
        {/* Image de couverture */}
        <div className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-cream mb-6">
          <motion.img
            src={post.coverImage}
            alt={post.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-wine-dark/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          
          {/* Badge catégorie sur l'image */}
          <div className="absolute top-4 left-4">
            <span 
              className="inline-block px-3 py-1 rounded-full text-[10px] uppercase tracking-wider font-body font-medium text-white backdrop-blur-sm"
              style={{ backgroundColor: `${categoryInfo.color}CC` }}
            >
              {categoryInfo.label}
            </span>
          </div>

          {/* Icône arrow qui apparaît au hover */}
          <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
            <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center">
              <ArrowUpRight className="w-5 h-5 text-wine-dark" />
            </div>
          </div>
        </div>

        {/* Contenu textuel */}
        <div className="space-y-3">
          {/* Meta info */}
          <div className="flex items-center gap-4 text-[11px] text-muted-foreground font-body">
            <time dateTime={post.publishedAt}>
              {format(new Date(post.publishedAt), 'd MMMM yyyy', { locale: fr })}
            </time>
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {post.readTime} min
            </span>
          </div>

          {/* Titre */}
          <h3 className="font-display text-2xl text-foreground leading-tight group-hover:text-primary transition-colors duration-300">
            {post.title}
          </h3>

          {/* Extrait */}
          <p className="font-body text-sm text-muted-foreground leading-relaxed line-clamp-3">
            {post.excerpt}
          </p>

          {/* Tags */}
          {post.tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {post.tags.slice(0, 3).map((tag) => (
                <span
                  key={tag}
                  className="text-[10px] px-2 py-1 rounded-md bg-cream text-muted-foreground font-body uppercase tracking-wide"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
