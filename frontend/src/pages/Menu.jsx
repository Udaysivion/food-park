import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";

const API_URL = "/api/menu";

const vp = { once: true, amount: 0.15 };
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } };
const cardV = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } };
const stagger = (d=0.1) => ({ hidden:{}, visible:{ transition:{ staggerChildren: d } } });

// ─── Local Static Image Map for Instant Loading ──────────────────────────────
const localImageMap = {
  // Biryani
  "Chicken Mixed Biryani": "/assets/chicken mixed biryani.png",
  "Vegetable Biryani": "/assets/mixed veg biryani.png",
  
  // Fried Rice
  "Chicken Fried Rice": "/assets/chicken fried rice 1.jpg",
  "Spl Chicken Fried Rice": "/assets/chicken fried rice 2.jpg",
  "Spl Mutton Fried Rice": "/assets/fried rice 1.jpg",
  "Spl Prawn Fried Rice": "/assets/fried rice 1.jpg",
  "Mixed Fried Rice": "/assets/fried rice 1.jpg",
  "Egg Fried Rice": "/assets/fried rice 1.jpg",
  "Vegetable Fried Rice": "/assets/fried rice 1.jpg",
  "Spl Veg Fried Rice with Tomato Cashew Curry": "/assets/fried rice 1.jpg",
  "Spl Veg Fried Rice with Paneer Curry": "/assets/fried rice 1.jpg",
  "Spl Veg Fried Rice with Babycorn / Mushroom": "/assets/fried rice 1.jpg",
  "Mixed Veg Fried Rice": "/assets/fried rice 1.jpg",
  "Spl Mixed Veg Fried Rice": "/assets/fried rice 1.jpg",
  
  // Chicken
  "Thumsup Chicken": "/assets/thumsup chicken.png",
  "Chicken Boneless": "/assets/boneless 1.jpg",
  "Hongkong Chicken": "/assets/hongkong chicken.jpg",
  
  // Breakfast / Curries / Starters fallbacks
  "Plain Dosa": "/assets/dosa1.jpg",
  "Masala Dosa": "/assets/dosa2.jpg",
  "Ghee Dosa": "/assets/dosa1.jpg",
  "Onion Dosa": "/assets/dosa2.jpg",
  "Single Idli": "/assets/idli1.jpg",
  "Plate Idli": "/assets/idli2.jpg",
  "Single Puri": "/assets/puri1.jpg",
  "Plate Puri": "/assets/puri2.jpg",
  
  // Drinks & Beverages
  "Sweet Lassi": "/assets/lassi 1.jpg",
  "Mango Lassi": "/assets/lassi 2.jpg",
  "Buttermilk": "/assets/buttermilk1.jpg",
  "Masala Buttermilk": "/assets/buttermilk2.jpg",
  "Filter Coffee": "/assets/filter coffe 1.jpg",
  "Masala Chai": "/assets/masala chai 1.jpg",
  "Ginger Tea": "/assets/masala chai 2.jpg",
  "Coconut Water": "/assets/coconut water 1.jpg",
  "Fresh Coconut Water": "/assets/coconut water 2.jpg",
  "Rose Milk": "/assets/rose water 1.jpg",
  "Badam Milk": "/assets/rose water 2.jpg",
};

const getMenuItemImage = (item) => {
  if (localImageMap[item.name]) {
    return localImageMap[item.name];
  }
  // Return the item's original unique image URL from menu.json
  return item.image || "/assets/foodpark-logo.png";
};

const Menu = () => {
  const [menuData, setMenuData] = useState({});
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        setMenuData(data);
        const cats = Object.keys(data);
        setCategories(cats);
        if (cats.length > 0) setActiveCategory(cats[0]);
      } catch (err) {
        console.error("Failed to load menu:", err);
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const MenuCard = ({ item }) => {
    return (
      <div className="overflow-hidden rounded-[2rem] border border-[#D4A017]/20 bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative">
          <img
            src={getMenuItemImage(item)}
            alt={item.name}
            className="h-64 w-full object-cover bg-[#3A1E12]/10"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/assets/foodpark-logo.png";
            }}
          />
        </div>

        <div className="p-6">
          <h3 className="mb-2 font-serif text-xl font-bold text-[#6B0F0F] leading-tight">
            {item.name}
          </h3>

          <p className="text-sm leading-6 text-gray-600 mb-4">{item.desc}</p>
        </div>
      </div>
    );
  };

  const activeItems = activeCategory ? (menuData[activeCategory] || []) : [];

  if (loading) {
    return (
      <main className="min-h-screen bg-[#F8F1E7] flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4 animate-bounce">🍛</div>
          <p className="text-[#6B0F0F] font-semibold text-lg">Loading menu…</p>
        </div>
      </main>
    );
  }

  if (error) {
    return (
      <main className="min-h-screen bg-[#F8F1E7] flex items-center justify-center">
        <div className="text-center max-w-md px-6">
          <div className="text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-[#6B0F0F] mb-2">Menu unavailable</h2>
          <p className="text-gray-600 mb-4">Could not connect to the server. Please try again later.</p>
          <button
            onClick={() => window.location.reload()}
            className="px-6 py-2 bg-[#6B0F0F] text-white rounded-full font-semibold hover:bg-[#8B1A1A] transition"
          >
            Retry
          </button>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <section className="relative overflow-hidden bg-[#3A1E12] pt-32 pb-24">
        <motion.div
          variants={stagger(0.1)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl px-6 text-center"
        >
          <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
            Our Menu
          </motion.p>

          <motion.h1 variants={fadeUp} className="mx-auto max-w-5xl font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            Authentic Andhra Flavours
            <span className="block text-[#D4A017]">
              Crafted Fresh Every Day
            </span>
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Explore traditional meals, spicy curries, village specials, snacks,
            and refreshing beverages.
          </motion.p>
        </motion.div>
      </section>

      <section className="bg-[#F8F1E7] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Categories
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
              Explore Our Menu
            </h2>
          </div>

          <div className="flex overflow-x-auto pb-4 gap-4 scrollbar-hide max-w-full justify-start md:justify-center md:flex-wrap whitespace-nowrap">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-6 py-2.5 text-sm font-semibold shadow-md transition-all duration-200 inline-block active:scale-95 ${
                  activeCategory === category
                    ? "bg-[#6B0F0F] text-white"
                    : "bg-white text-[#6B0F0F] hover:bg-[#D4A017] hover:text-[#3A1E12]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            animate="visible"
            className="mt-14"
          >
            {activeItems.length ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {activeItems.map((item, index) => (
                  <motion.div key={`${item.id || item.name}-${index}`} variants={cardV} whileHover={{ y: -8 }} className="mx-auto max-w-md">
                    <MenuCard item={item} />
                  </motion.div>
                ))}
              </div>
            ) : (
              <p className="text-center text-gray-600">
                No items available in this category.
              </p>
            )}
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Menu;

