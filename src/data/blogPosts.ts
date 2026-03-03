const blogPosts = [
  {
    slug: "bienvenue-oenoros",
    title: "Bienvenue dans l'univers Oenoros",
    content: "Salut à tous ! Découvrez notre vin...",
    category: "Introduction",
  },
  // Other blog posts
];

function getAllPosts() {
  return blogPosts;
}

function getPostBySlug(slug) {
  return blogPosts.find(post => post.slug === slug);
}

function getPostsByCategory(category) {
  return blogPosts.filter(post => post.category === category);
}

function getRecentPosts(limit = 5) {
  // For simplicity, return the first `limit` posts
  return blogPosts.slice(0, limit);
}

export { getAllPosts, getPostBySlug, getPostsByCategory, getRecentPosts };