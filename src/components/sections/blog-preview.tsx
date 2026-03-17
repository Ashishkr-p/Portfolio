import { blogPosts } from '@/data/blog';
import { SectionHeading } from './section-heading';

export function BlogPreviewSection() {
  return (
    <section className="py-12">
      <SectionHeading title="Latest Writing" />
      <div className="grid gap-4 md:grid-cols-3">
        {blogPosts.map((post) => (
          <article key={post.slug} className="card-base">
            <p className="text-xs uppercase tracking-wide text-muted">{post.publishedAt}</p>
            <h3 className="mt-2 text-base font-semibold">{post.title}</h3>
            <p className="mt-2 text-sm text-muted">{post.excerpt}</p>
            <p className="mt-4 text-xs text-muted">{post.readingTime}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
