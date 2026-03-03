import { BlogPost } from '@/types/blog';

export const blogPosts: BlogPost[] = [
  {
    id: '1772544631126',
    slug: 'testing',
    title: 'Testing',
    excerpt: 'Testing',
    content: `Testing plus long`,
    coverImage: '/placeholder.svg',
    category: 'strategie',
    author: {
      name: "L'équipe Oenoros",
      role: 'Agence de communication viticole',
    },
    publishedAt: '2026-03-03',
    readTime: 5,
    tags: ['marketing'],
    seo: {
      metaTitle: 'Testing',
      metaDescription: 'Testing',
      keywords: ['mot1'],
    },
  },
  {
    id: '1',
    slug: 'bienvenue-sur-notre-blog',
    title: 'Bienvenue dans l'univers Oenoros',
    excerpt: 'Découvrez notre nouvelle section Actualités où nous partagerons notre expertise, nos insights et les dernières tendances du marketing viticole en Bourgogne.',
    content: `# Bienvenue dans l'univers Oenoros

Nous sommes ravis de vous accueillir sur notre nouvelle section Actualités. Cet espace a été pensé pour partager avec vous notre vision du marketing viticole, nos expertises et les évolutions du secteur.

## Que trouverez-vous ici ?

### Stratégie Marketing Viticole
Des analyses approfondies sur les tendances, les erreurs à éviter et les opportunités à saisir pour positionner votre domaine sur ses marchés cibles.

### Identité de Marque
L'importance d'une identité visuelle forte, cohérente et mémorable. Comment raconter l'histoire de votre domaine à travers chaque point de contact.

### Export & Distribution
Les clés pour développer votre présence à l'international sans perdre l'essence de votre terroir et de votre savoir-faire.

### Événements & Actualités
Les rendez-vous incontournables du secteur, nos participations, et les partenariats qui font avancer la filière viticole bourguignonne.

## Notre promesse

Chaque article publié ici reflète notre engagement : vous apporter une expertise concrète, applicable et pensée spécifiquement pour les domaines viticoles qui veulent se démarquer sans renier leur authenticité.

**L'ordinaire n'a pas sa place ici. Votre image non plus.**

*– L'équipe Oenoros*`,
    coverImage: '/placeholder.svg',
    category: 'actualites',
    author: {
      name: "L'équipe Oenoros",
      role: 'Agence de communication viticole',
    },
    publishedAt: '2026-03-01',
    readTime: 3,
    tags: ['lancement', 'bienvenue', 'expertise', 'marketing-viticole'],
    seo: {
      metaTitle: 'Bienvenue sur le blog Oenoros - Marketing viticole en Bourgogne',
      metaDescription: 'Découvrez notre blog dédié au marketing viticole. Stratégies, insights et tendances pour les domaines de Bourgogne qui veulent se démarquer.',
      keywords: ['marketing viticole', 'communication vin', 'Bourgogne', 'stratégie domaine viticole', 'identité de marque vin'],
    },
  },
];

export const getAllPosts = (): BlogPost[] => {
  return [...blogPosts].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
};

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getPostsByCategory = (category: string): BlogPost[] => {
  return blogPosts.filter(post => post.category === category);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return getAllPosts().slice(0, limit);
};