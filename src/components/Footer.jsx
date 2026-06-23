import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2A140C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <h2 className="font-serif text-3xl font-bold text-[#D4A017]">
              Food Park
            </h2>
            <p className="mt-4 text-sm leading-7 text-gray-300">
              Authentic Andhra village cuisine served with homely hospitality.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#D4A017]">Quick Links</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li><Link to="/" className="transition hover:text-[#D4A017]">Home</Link></li>
              <li><Link to="/about" className="transition hover:text-[#D4A017]">About</Link></li>
              <li><Link to="/traditional-dishes" className="transition hover:text-[#D4A017]">Traditional Dishes</Link></li>
              <li><Link to="/menu" className="transition hover:text-[#D4A017]">Menu</Link></li>
              <li><Link to="/gallery" className="transition hover:text-[#D4A017]">Gallery</Link></li>
              <li><Link to="/contact" className="transition hover:text-[#D4A017]">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#D4A017]">Contact</h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>📍 Nizamabad, Telangana</li>
              <li>📞 +91 98765 43210</li>
              <li>✉ info@ruchilokam.com</li>
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-semibold text-[#D4A017]">
              Opening Hours
            </h3>
            <ul className="space-y-2 text-sm text-gray-300">
              <li>Mon - Fri: 8 AM - 10 PM</li>
              <li>Sat - Sun: 7 AM - 11 PM</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-white/10 pt-5 text-center text-xs text-gray-400">
          © 2026 Food park. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
