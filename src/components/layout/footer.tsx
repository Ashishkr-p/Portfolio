import { Container } from '@/components/common/container';

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border/60 py-8">
      <Container className="flex flex-col gap-2 text-sm text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>© {new Date().getFullYear()} Ashish Kumar Pal. All rights reserved.</p>
        <p>Built with Next.js 14, React 19, Redux Toolkit, TailwindCSS and Framer Motion.</p>
      </Container>
    </footer>
  );
}
