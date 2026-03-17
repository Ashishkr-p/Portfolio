import Link from 'next/link';
import { Container } from '@/components/common/container';

export default function NotFound() {
  return (
    <Container className="py-24">
      <div className="card-base mx-auto max-w-2xl text-center">
        <p className="text-sm uppercase tracking-[0.2em] text-muted">404</p>
        <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Page Not Found</h1>
        <p className="mt-4 text-muted">
          The page you requested does not exist or may have been moved. Use one of the links below.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Link href="/" className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">
            Go Home
          </Link>
          <Link href="/projects" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold">
            View Projects
          </Link>
          <Link href="/contact" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold">
            Contact
          </Link>
        </div>
      </div>
    </Container>
  );
}
