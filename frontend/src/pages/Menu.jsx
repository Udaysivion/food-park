import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { menuItems as fallbackMenuData } from "../data/menuItems";
import { useCart } from "../context/CartContext";

const API_URL = "/api/menu";

const vp = { once: true, amount: 0.15 };
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } };
const cardV = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } };
const stagger = (d=0.1) => ({ hidden:{}, visible:{ transition:{ staggerChildren: d } } });

// ─── Visual Dish Thumbnails for Category Filter Tabs ──────────────────────────
const categoryThumbnails = {
  "Biryani": "/assets/chicken mixed biryani.png",
  "Fried Rice Non Veg": "/assets/chicken fried rice 1.jpg",
  "Fried Rice Veg": "/assets/mixed veg biryani.png",
  "Noodles": "https://images.unsplash.com/photo-1569718212165-3a8278d5f624?auto=format&fit=crop&w=400&q=80",
  "Veg Curry": "https://images.unsplash.com/photo-1585518419759-e924b539c667?auto=format&fit=crop&w=400&q=80",
  "Chicken Curry": "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80",
  "Chicken Fry": "/assets/thumsup chicken.png",
  "Mutton Fry": "https://images.unsplash.com/photo-1574653853027-5382a3d23a15?auto=format&fit=crop&w=400&q=80",
  "Fish Curry / Fry": "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=400&q=80",
  "Prawns Curry / Fry": "https://images.unsplash.com/photo-1604908177453-7462950a6a3b?auto=format&fit=crop&w=400&q=80",
  "Egg Curry / Starters": "https://images.unsplash.com/photo-1517244683847-7456b63c5969?auto=format&fit=crop&w=400&q=80",
  "Starters Veg": "https://images.unsplash.com/photo-1567337710282-00832b415979?auto=format&fit=crop&w=400&q=80",
  "Breads / Rotis": "https://images.unsplash.com/photo-1626074353765-517a681e40be?auto=format&fit=crop&w=400&q=80",
  "Meals / Rice Combo": "https://images.unsplash.com/photo-1610192244261-3f33de3f55e4?auto=format&fit=crop&w=400&q=80",
};

// Local Static Image Map for Instant Loading
const localImageMap = {
  "Chicken Mixed Biryani": "/assets/chicken mixed biryani.png",
  "Vegetable Biryani": "/assets/mixed veg biryani.png",
  "Chicken Fried Rice": "/assets/chicken fried rice 1.jpg",
  "Spl Chicken Fried Rice": "/assets/chicken fried rice 2.jpg",
  "Thumsup Chicken": "/assets/thumsup chicken.png",
  "Chicken Boneless": "/assets/boneless 1.jpg",
  "Hongkong Chicken": "/assets/hongkong chicken.jpg",
};

const getMenuItemImage = (item) => {
  if (localImageMap[item.name]) return localImageMap[item.name];
  if (item.images && item.images.length > 0) return item.images[0];
  return item.image || "/assets/foodpark-logo.png";
};

const getCategoryThumbnail = (category, data) => {
  if (categoryThumbnails[category]) return categoryThumbnails[category];
  const items = data[category];
  if (items && items.length > 0) {
    return getMenuItemImage(items[0]);
  }
  return "/assets/foodpark-logo.png";
};

const Menu = () => {
  const [menuData, setMenuData] = useState({});
  const [categories, setCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [loading, setLoading] = useState(true);
  const { openOrderModal } = useCart();

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        setLoading(true);
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error(`Server error: ${res.status}`);
        const data = await res.json();
        if (data && Object.keys(data).length > 0) {
          setMenuData(data);
          const cats = Object.keys(data);
          setCategories(cats);
          if (cats.length > 0) setActiveCategory(cats[0]);
          return;
        }
        throw new Error("Empty menu payload");
      } catch (err) {
        console.warn("Backend API unavailable, loading fallback menu data:", err.message);
        setMenuData(fallbackMenuData);
        const cats = Object.keys(fallbackMenuData);
        setCategories(cats);
        if (cats.length > 0) setActiveCategory(cats[0]);
      } finally {
        setLoading(false);
      }
    };
    fetchMenu();
  }, []);

  const MenuCard = ({ item }) => {
    const fullPrice = item.full || item.price;
    const halfPrice = item.half;

    return (
      <div className="overflow-hidden rounded-2xl sm:rounded-3xl border border-[#D4A017]/25 bg-white shadow-lg transition duration-300 hover:-translate-y-1.5 hover:shadow-xl flex flex-col justify-between h-full">
        <div>
          <div className="relative">
            <img
              src={getMenuItemImage(item)}
              alt={item.name}
              className="h-44 sm:h-48 w-full object-cover bg-[#3A1E12]/10"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "/assets/foodpark-logo.png";
              }}
            />
            {fullPrice && (
              <div className="absolute top-3 right-3 rounded-full bg-[#6B0F0F] px-3 py-1 text-xs font-bold text-white shadow-md border border-[#D4A017]/60">
                ₹{fullPrice}
              </div>
            )}
          </div>

          <div className="p-4 sm:p-5">
            <h3 className="mb-1.5 font-serif text-lg font-bold text-[#6B0F0F] leading-tight">
              {item.name}
            </h3>

            <p className="text-xs leading-5 text-gray-600 mb-3 line-clamp-2">{item.desc}</p>
          </div>
        </div>

        <div className="px-4 pb-4 sm:px-5 sm:pb-5 pt-0 space-y-2.5">
          <div className="flex items-center justify-between border-t border-gray-100 pt-2.5 text-[11px] font-semibold text-[#3A1E12]">
            {fullPrice && (
              <span className="rounded-full bg-[#F8F1E7] px-2.5 py-0.5 text-[#6B0F0F]">
                Full: ₹{fullPrice}
              </span>
            )}
            {halfPrice && (
              <span className="rounded-full bg-[#D4A017]/20 px-2.5 py-0.5 text-[#3A1E12]">
                Half: ₹{halfPrice}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={() => openOrderModal({ ...item, category: activeCategory })}
            className="w-full rounded-xl bg-[#6B0F0F] py-2.5 px-3 text-xs font-bold uppercase tracking-wider text-white shadow-md transition hover:bg-[#8B1A1A] active:scale-95 flex items-center justify-center gap-1.5 border border-[#D4A017]/40"
          >
            <span>Order & Customize</span>
            <span className="text-[#D4A017]">→</span>
          </button>
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

  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <section className="bg-[#F8F1E7] pt-28 pb-12 sm:pt-32 sm:pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 text-center">
            <p className="mb-2 text-xs font-semibold uppercase tracking-[4px] text-[#D4A017] sm:text-sm">
              Visual Menu Filters
            </p>

            <h2 className="font-serif text-3xl font-bold text-[#6B0F0F] sm:text-4xl md:text-5xl">
              Explore By Dish Category
            </h2>
            <p className="mt-2 text-xs text-gray-600 sm:text-sm">
              Click any dish photo to filter the menu by category
            </p>
          </div>

          {/* Visual Clickable Category Tabs with Dish Thumbnails */}
          <div className="flex overflow-x-auto pb-5 gap-3 scrollbar-hide max-w-full justify-start md:justify-center md:flex-wrap">
            {categories.map((category) => {
              const isSelected = activeCategory === category;
              const thumb = getCategoryThumbnail(category, menuData);

              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`group flex items-center gap-2.5 rounded-full pl-1.5 pr-4 py-1.5 text-xs font-bold transition-all duration-300 inline-flex active:scale-95 border ${
                    isSelected
                      ? "bg-[#6B0F0F] text-white border-[#D4A017] ring-2 ring-[#D4A017]/50 shadow-lg"
                      : "bg-white text-[#3A1E12] border-gray-200 hover:bg-[#F8F1E7] hover:border-[#D4A017] shadow-sm"
                  }`}
                >
                  <div className={`relative h-8 w-8 sm:h-9 sm:w-9 shrink-0 overflow-hidden rounded-full border-2 transition-transform duration-300 ${isSelected ? "border-[#D4A017] scale-105" : "border-[#D4A017]/60 group-hover:scale-110"}`}>
                    <img
                      src={thumb}
                      alt={category}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        e.target.onerror = null;
                        e.target.src = "/assets/foodpark-logo.png";
                      }}
                    />
                  </div>
                  <span className="whitespace-nowrap font-serif tracking-wide text-xs sm:text-sm">{category}</span>
                </button>
              );
            })}
          </div>

          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            animate="visible"
            className="mt-8 sm:mt-10"
          >
            {activeItems.length ? (
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {activeItems.map((item, index) => (
                  <motion.div key={`${item.id || item.name}-${index}`} variants={cardV} whileHover={{ y: -6 }} className="w-full">
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


