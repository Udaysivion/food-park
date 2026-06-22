import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="relative bg-slate-900 overflow-hidden min-h-[calc(100vh-80px)] flex flex-col justify-center">
      {/* Background decoration */}
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg className="absolute right-0 transform translate-x-1/2 left-full -translate-y-3/4 lg:left-1/2 lg:-translate-y-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-slate-800" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-white sm:text-5xl md:text-6xl">
              <span className="block">Disciplined Dining</span>
              <span className="block text-amber-500">Peak Performance Nutrition</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-slate-400 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Welcome to the Military Mess Command Center. Serving balanced, highly nutritious, and scheduled meals to maintain optimal troop readiness.
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <Link
                  to="/menu"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-bold rounded-md text-slate-950 bg-amber-500 hover:bg-amber-600 md:py-4 md:text-lg md:px-10"
                >
                  View Today's Menu
                </Link>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <Link
                  to="/about"
                  className="w-full flex items-center justify-center px-8 py-3 border border-slate-700 text-base font-bold rounded-md text-slate-300 bg-slate-800 hover:bg-slate-700 md:py-4 md:text-lg md:px-10"
                >
                  About the Mess
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
