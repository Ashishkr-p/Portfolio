'use client';

import Link from 'next/link';

export default function GlobalError({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <html lang="en">
      <body className="bg-surface text-text">
        <main className="mx-auto flex min-h-screen max-w-3xl items-center px-4">
          <section className="card-base w-full text-center">
            <p className="text-sm uppercase tracking-[0.2em] text-muted">Unexpected Error</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight">Something went wrong</h1>
            <p className="mt-4 text-muted">Try reloading the page or return to a stable route.</p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <button onClick={() => reset()} className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white">
                Try Again
              </button>
              <Link href="/" className="rounded-xl border border-border px-5 py-3 text-sm font-semibold">
                Back Home
              </Link>
            </div>
          </section>
        </main>
      </body>
    </html>
  );
}
