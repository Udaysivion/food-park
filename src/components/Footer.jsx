import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* Brand details */}
          <div className="md:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-amber-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">M</span>
              </div>
              <span className="font-extrabold text-xl tracking-tight text-white">
                Military<span className="text-amber-500">Mess</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Official catering and mess services ensuring top nutrition, strict schedules, and healthy dining options.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white border-b border-slate-800 pb-2 inline-block">Schedules</h3>
            <ul className="space-y-3">
              <li><Link to="/menu" className="text-slate-400 hover:text-amber-500 transition-colors duration-200">Daily Menu</Link></li>
              <li><Link to="/about" className="text-slate-400 hover:text-amber-500 transition-colors duration-200">Our Protocol</Link></li>
              <li><Link to="/contact" className="text-slate-400 hover:text-amber-500 transition-colors duration-200">Contact Quartermaster</Link></li>
            </ul>
          </div>

          {/* Guidelines */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white border-b border-slate-800 pb-2 inline-block">Mess Protocol</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li>• Dress code enforced.</li>
              <li>• Adhere strictly to meal timings.</li>
              <li>• Present Mess Card at registry.</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-white border-b border-slate-800 pb-2 inline-block">Headquarters</h3>
            <ul className="space-y-3 text-slate-400 text-sm">
              <li className="flex items-start gap-3">
                <span>📍</span>
                <span>Base Mess Hall Alpha, Camp Garrison</span>
              </li>
              <li className="flex items-center gap-3">
                <span>📞</span>
                <span>DSN: 555-MESS (Ext. 101)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-900 text-center md:flex md:justify-between items-center text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Military Mess Command. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
