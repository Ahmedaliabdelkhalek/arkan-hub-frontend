import Link from 'next/link';

export default function NotFound() {
  return (
    <html lang="en">
      <body className="min-h-screen bg-ink-50 text-ink-800 font-sans flex items-center justify-center p-6">
        <div className="text-center max-w-md">
          <p className="text-brand font-semibold tracking-widest uppercase text-xs">404</p>
          <h1 className="mt-3 font-display text-4xl font-extrabold">Page not found</h1>
          <p className="mt-3 text-ink-400">The page you are looking for doesn&apos;t exist or has been moved.</p>
          <Link
            href="/en"
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white hover:bg-brand-600"
          >
            Back to home
          </Link>
        </div>
      </body>
    </html>
  );
}
