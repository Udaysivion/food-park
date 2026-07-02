import { Link } from "react-router-dom";
import logoImg from "../assets/foodpark-logo.png";

const Footer = () => {
  return (
    <footer className="bg-[#2A140C] text-white">
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <img
                src={logoImg}
                alt="Food Park Logo"
                className="h-10 w-10 rounded-full object-cover ring-2 ring-[#D4A017]"
              />
              <h2 className="font-serif text-3xl font-bold text-[#D4A017]">
                Food Park
              </h2>
            </div>
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
            <ul className="space-y-3 text-sm text-gray-300">
              <li className="flex gap-2">
                <span className="shrink-0 text-base">📍</span> 
                <span>Datlavari St, Pratap Nagar, Ontimamidi Junction, Kakinada, AP 533004</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="shrink-0 text-base">📞</span> 
                <span>+91 94906 80179</span>
              </li>
              <li className="flex items-center gap-2">
                <span className="shrink-0 text-base">✉</span> 
                <span>contact@foodparkkakinada.com</span>
              </li>
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
