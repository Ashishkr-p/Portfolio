import type { Metadata } from 'next';
import { Container } from '@/components/common/container';
import { SectionHeading } from '@/components/sections/section-heading';
import { blogPosts } from '@/data/blog';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Frontend architecture, state management, and e-commerce engineering articles by Ashish Kumar Pal.'
};

export default function BlogPage() {
  return (
    <Container className="py-16">
      <SectionHeading title="Blog" subtitle="Writing about scalable frontend architecture and product engineering." />
      <div className="space-y-4">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card-base">
            <p className="text-xs uppercase tracking-wide text-muted">{post.publishedAt}</p>
            <h2 className="mt-2 text-xl font-semibold">{post.title}</h2>
            <p className="mt-2 text-muted">{post.excerpt}</p>
            <p className="mt-4 text-sm text-muted">{post.readingTime}</p>
          </article>
        ))}
      </div>
    </Container>
  );
}
