export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 dark:bg-slate-900 text-white">
      <h1 className="text-7xl font-extrabold bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent mb-4">
        404
      </h1>
      <p className="text-slate-400 text-lg mb-8">Page not found</p>
      <a
        href="/"
        className="px-6 py-3 bg-gradient-to-r from-violet-500 to-blue-500 text-white rounded-xl font-semibold hover:opacity-90 transition-opacity"
      >
        Go Home
      </a>
    </div>
  );
}
