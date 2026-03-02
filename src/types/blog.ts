export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  coverImage: string;
  category: 'strategie' | 'identite' | 'export' | 'evenements' | 'actualites';
  author: {
    name: string;
    role: string;
  };
  publishedAt: string;
  readTime: number;
  tags: string[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}

export const BLOG_CATEGORIES = {
  strategie: {
    label: 'Stratégie Marketing',
    color: '#8B1538',
  },
  identite: {
    label: 'Identité de Marque',
    color: '#D4AF37',
  },
  export: {
    label: 'Export & Distribution',
    color: '#7D5E3F',
  },
  evenements: {
    label: 'Événements',
    color: '#9F1D35',
  },
  actualites: {
    label: 'Actualités Secteur',
    color: '#B8860B',
  },
} as const;
