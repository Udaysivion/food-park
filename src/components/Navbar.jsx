import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Traditional Dishes", path: "/traditional-dishes" },
    { label: "Menu", path: "/menu" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-4 py-4">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#D4A017]/30 bg-[#F8F1E7]/85 px-6 py-3 shadow-xl backdrop-blur-md">
        {/* Logo */}
        <div>
          <h1 className="font-serif text-2xl font-bold tracking-wide text-[#6B0F0F]">
            Food Park
          </h1>
          <p className="-mt-1 text-[11px] font-medium tracking-[0.25em] text-[#3A1E12]/70">
            VILLAGE HOTEL
          </p>
        </div>

        {/* Links */}
        <ul className="hidden items-center gap-8 lg:flex">
          {navItems.map((item) => (
            <li key={item.label} className="group text-sm font-semibold uppercase tracking-wide">
              <Link
                to={item.path}
                className="cursor-pointer text-[#3A1E12] transition hover:text-[#6B0F0F]"
              >
                {item.label}
                <span className="mx-auto mt-1 block h-[2px] w-0 rounded-full bg-[#D4A017] transition-all duration-300 group-hover:w-full" />
              </Link>
            </li>
          ))}
        </ul>

        {/* Button */}
        <button className="hidden rounded-full bg-[#6B0F0F] px-6 py-3 text-sm font-semibold text-white shadow-lg transition hover:bg-[#D4A017] hover:text-[#3A1E12] md:block">
          Reserve Table
        </button>

        {/* Mobile Icon */}
        <button className="text-2xl text-[#6B0F0F] lg:hidden">☰</button>
      </nav>
    </header>
  );
};

export default Navbar;