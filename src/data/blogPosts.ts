import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    slug: 'bienvenue-sur-notre-blog',
    title: 'Bienvenue dans l\'univers Oenoros',
    excerpt: 'Découvrez notre vision du marketing viticole moderne et comment nous aidons les domaines à rayonner.',
    content: `# Bienvenue dans l'univers Oenoros

Nous sommes ravis de vous accueillir sur notre blog dédié au marketing viticole.

## Notre mission

Oenoros accompagne les domaines viticoles dans leur stratégie de communication et de marketing digital. Notre approche sur-mesure garantit des résultats adaptés à chaque terroir.

## Que trouverez-vous ici ?

Sur ce blog, nous partagerons :

- Des conseils en stratégie marketing
- Des analyses de tendances du secteur viticole
- Des retours d'expérience de nos collaborations
- Des actualités sur l'agence

Restez connectés pour ne rien manquer de nos prochains articles !`,
    coverImage: '/placeholder.svg',
    category: 'actualites',
    author: {
      name: 'L\'équipe Oenoros',
      role: 'Agence de communication viticole',
    },
    publishedAt: '2026-03-01',
    readTime: 3,
    tags: ['bienvenue', 'actualités', 'agence'],
    seo: {
      metaTitle: 'Bienvenue sur le blog Oenoros',
      metaDescription: 'Découvrez le blog d\'Oenoros, votre agence de marketing viticole en Bourgogne.',
      keywords: ['marketing viticole', 'communication vin', 'Bourgogne'],
    },
  },
];

// Fonctions helper
export const getAllPosts = (): BlogPost[] => {
  return blogPosts.sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts
    .filter(post => post.category === category)
    .sort((a, b) => 
      new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
};

export const getRecentPosts = (limit: number = 5): BlogPost[] => {
  return getAllPosts().slice(0, limit);
};
