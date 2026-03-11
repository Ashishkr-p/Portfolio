export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: string;
  readingTime: string;
};

export const blogPosts: BlogPost[] = [
  {
    slug: 'scalable-checkout-architecture',
    title: 'Scalable Checkout Architecture in React and Next.js',
    excerpt: 'Patterns I use to keep checkout flows fast, resilient, and maintainable in high-traffic e-commerce systems.',
    publishedAt: '2026-01-10',
    readingTime: '7 min read'
  },
  {
    slug: 'redux-toolkit-in-large-frontends',
    title: 'Using Redux Toolkit in Large Frontend Codebases',
    excerpt: 'How feature slices, typed hooks, and async orchestration improve velocity and reliability.',
    publishedAt: '2025-12-04',
    readingTime: '6 min read'
  },
  {
    slug: 'framer-motion-for-product-interactions',
    title: 'Framer Motion for High-Impact Product Interactions',
    excerpt: 'Practical animation patterns that improve clarity without sacrificing performance.',
    publishedAt: '2025-11-22',
    readingTime: '5 min read'
  }
];
