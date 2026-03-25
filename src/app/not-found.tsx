import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[var(--background)] text-[var(--foreground)]">
      <h1 className="text-7xl font-extrabold gradient-text mb-4">404</h1>
      <p className="text-[var(--muted)] text-lg mb-8">Page not found</p>
      <Link
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
      >
        Go Home
      </Link>
    </div>
  );
}
