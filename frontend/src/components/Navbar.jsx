import { useState, useEffect } from "react";
import { useLocation, Link, NavLink } from "react-router-dom";
import { Menu, X, ShoppingBag } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import logoImg from "../assets/foodpark-logo.png";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { getCartCount, setIsCartOpen } = useCart();
  const cartCount = getCartCount();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLinkClick = (path) => {
    setIsOpen(false);
    if (location.pathname === path) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    }
  };

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Traditional Dishes", path: "/traditional-dishes" },
    { label: "Menu", path: "/menu" },
    { label: "Gallery", path: "/gallery" },
    { label: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed left-0 top-0 z-50 w-full px-2 py-2 sm:px-4">
      <motion.nav
        animate={{ paddingTop: scrolled ? "0.35rem" : "0.5rem", paddingBottom: scrolled ? "0.35rem" : "0.5rem" }}
        transition={{ duration: 0.3 }}
        className={`relative mx-auto flex max-w-7xl items-center justify-between rounded-full border border-[#D4A017]/30 bg-[#F8F1E7]/90 px-3.5 sm:px-6 backdrop-blur-md transition-shadow duration-300 ${scrolled ? "shadow-2xl" : "shadow-xl"}`}
      >
        {/* Logo */}
        <Link to="/" onClick={() => handleLinkClick("/")} className="shrink-0 flex items-center gap-2.5">
          <img
            src={logoImg}
            alt="Food Park Logo"
            className="h-9 w-9 sm:h-10 sm:w-10 rounded-full object-cover shadow-md ring-2 ring-[#D4A017]/60"
          />
          <div>
            <h1 className="font-serif text-lg font-bold tracking-wide text-[#6B0F0F] sm:text-xl leading-none">
              Food Park
            </h1>
            <p className="mt-0.5 text-[9px] font-semibold tracking-[0.25em] text-[#3A1E12]/60 uppercase">
              Family Restaurant
            </p>
          </div>
        </Link>

        {/* Links & Cart */}
        <div className="flex items-center gap-4 lg:gap-6">
          <ul className="hidden items-center justify-end gap-6 lg:flex xl:gap-8">
            {navItems.map((item) => (
              <li
                key={item.label}
                className="group whitespace-nowrap text-xs font-semibold uppercase tracking-wide xl:text-sm"
              >
                <NavLink
                  to={item.path}
                  onClick={() => handleLinkClick(item.path)}
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

          {/* Cart Floating Trigger */}
          <button
            type="button"
            onClick={() => setIsCartOpen(true)}
            className="relative flex items-center gap-1.5 rounded-full bg-[#6B0F0F] px-3.5 py-1.5 text-xs font-bold text-white shadow-md transition hover:bg-[#8B1A1A] active:scale-95 border border-[#D4A017]/50"
          >
            <ShoppingBag size={16} />
            <span className="hidden sm:inline">Cart</span>
            {cartCount > 0 && (
              <span className="flex h-5 w-5 items-center justify-center rounded-full bg-[#D4A017] text-[10px] font-black text-[#3A1E12]">
                {cartCount}
              </span>
            )}
          </button>

          {/* Mobile Icon */}
          <button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isOpen}
            onClick={() => setIsOpen((open) => !open)}
            className="text-[#6B0F0F] lg:hidden ml-1"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>


        <AnimatePresence>
          {isOpen && (
            <motion.ul
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.22, ease: "easeOut" }}
              className="absolute left-0 right-0 top-[calc(100%+0.75rem)] space-y-1 rounded-3xl border border-[#D4A017]/30 bg-[#F8F1E7] p-4 shadow-xl lg:hidden"
            >
              {navItems.map((item) => (
                <li key={item.label}>
                  <NavLink
                    to={item.path}
                    onClick={() => handleLinkClick(item.path)}
                    className={({ isActive }) =>
                      `block rounded-2xl px-4 py-3 text-sm font-semibold uppercase tracking-wide transition ${isActive ? "bg-[#6B0F0F] text-white" : "text-[#3A1E12] hover:bg-[#D4A017]/15"}`
                    }
                  >
                    {item.label}
                  </NavLink>
                </li>
              ))}
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.nav>
    </header>
  );
};

export default Navbar;

