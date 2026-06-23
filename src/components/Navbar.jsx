import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Traditional Dishes", path: "/traditional-dishes" },
    { label: "Menu", path: "/menu" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-2 py-4 sm:px-4">
      <nav className="relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#D4A017]/30 bg-[#F8F1E7]/85 px-4 py-3 shadow-xl backdrop-blur-md sm:px-6">
        {/* Logo */}
        <Link to="/" onClick={() => setIsOpen(false)} className="shrink-0">
          <h1 className="font-serif text-xl font-bold tracking-wide text-[#6B0F0F] sm:text-2xl">
            Food Park
          </h1>
          <p className="-mt-1 text-[11px] font-medium tracking-[0.25em] text-[#3A1E12]/70">
            VILLAGE HOTEL
          </p>
        </Link>

        {/* Links */}
        <ul className="absolute left-1/2 hidden w-[68%] max-w-4xl -translate-x-1/2 items-center justify-between lg:flex">
          {navItems.map((item) => (
            <li
              key={item.label}
              className="group whitespace-nowrap text-xs font-semibold uppercase tracking-wide xl:text-sm"
            >
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `cursor-pointer transition hover:text-[#6B0F0F] ${isActive ? "text-[#6B0F0F]" : "text-[#3A1E12]"}`
                }
              >
                {item.label}
                <span className="mx-auto mt-1 block h-[2px] w-0 rounded-full bg-[#D4A017] transition-all duration-300 group-hover:w-full" />
              </NavLink>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <button
          type="button"
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((open) => !open)}
          className="text-[#6B0F0F] lg:hidden"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {isOpen && (
          <ul className="absolute left-0 right-0 top-[calc(100%+0.75rem)] space-y-1 rounded-3xl border border-[#D4A017]/30 bg-[#F8F1E7] p-4 shadow-xl lg:hidden">
            {navItems.map((item) => (
              <li key={item.label}>
                <NavLink
                  to={item.path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ${isActive ? "bg-[#6B0F0F] text-white" : "text-[#3A1E12] hover:bg-[#D4A017]/15"}`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
