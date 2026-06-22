import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: 'Home', path: '/' },
    { name: 'Mess Menu', path: '/menu' },
    { name: 'About Mess', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full bg-slate-900 border-b border-slate-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-amber-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-xl">M</span>
            </div>
            <span className="font-extrabold text-2xl tracking-tight text-white">
              Military<span className="text-amber-500">Mess</span>
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {links.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`text-sm font-semibold tracking-wide uppercase transition-colors duration-200 ${
                    isActive 
                      ? 'text-amber-500' 
                      : 'text-slate-300 hover:text-amber-500'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="hidden md:flex items-center">
            <button className="bg-amber-600 hover:bg-amber-700 text-slate-950 font-bold px-6 py-2.5 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
              Mess Registry
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
