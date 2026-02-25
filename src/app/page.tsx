export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center px-6">
      <div className="max-w-2xl w-full text-center">
        {/* Badge */}
        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-cyan-50 text-cyan-700 border border-cyan-200">
          Coming soon
        </span>

        {/* Headline */}
        <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.15] text-gray-900">
          Schedule interviews without the back-and-forth
        </h1>

        {/* Subtext */}
        <p className="mt-6 text-lg sm:text-xl text-gray-600 leading-relaxed">
          Onsa coordinates availability for recruiters, enabling clients and
          candidates — no chasing, no confusion.
        </p>

        {/* Coming soon label */}
        <p className="mt-10 text-sm text-gray-400 tracking-wide uppercase">
          We&apos;re putting the finishing touches on things
        </p>
      </div>
    </main>
  );
}
