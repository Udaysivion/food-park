import { useState } from "react";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { categories, menuItems } from "../data/menuItems";

const vp = { once: true, amount: 0.15 };
const fadeUp = { hidden: { opacity: 0, y: 40 }, visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22,1,0.36,1] } } };
const cardV = { hidden: { opacity: 0, y: 36 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22,1,0.36,1] } } };
const stagger = (d=0.1) => ({ hidden:{}, visible:{ transition:{ staggerChildren: d } } });

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Biryani");

  const MenuCard = ({ item }) => {
    const [idx, setIdx] = useState(0);
    const hasMultiple = item.images.length > 1;

    return (
      <div className="overflow-hidden rounded-[2rem] border border-[#D4A017]/20 bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative">
          <img
            src={item.images[idx]}
            alt={item.name}
            className="h-64 w-full object-cover"
          />
          {hasMultiple && (
            <button
              onClick={() => setIdx((i) => (i + 1) % item.images.length)}
              className="absolute bottom-3 right-3 rounded-full bg-black/40 p-3 text-white shadow-lg hover:bg-black/60"
            >
              ›
            </button>
          )}
        </div>

        <div className="p-6">
          <h3 className="mb-2 font-serif text-xl font-bold text-[#6B0F0F] leading-tight">
            {item.name}
          </h3>

          <p className="text-sm leading-6 text-gray-600 mb-4">{item.desc}</p>

          <div className="flex gap-2 flex-wrap">
            <span className="rounded-full bg-[#6B0F0F] px-4 py-1.5 text-sm font-semibold text-white">
              Full
            </span>
            {item.half && (
              <span className="rounded-full border border-[#6B0F0F] px-4 py-1.5 text-sm font-semibold text-[#6B0F0F]">
                Half
              </span>
            )}
          </div>
        </div>
      </div>
    );
  };

  const activeItems = menuItems[activeCategory] || [];

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

          <motion.div
            variants={stagger(0.06)}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="flex flex-wrap items-center justify-center gap-4"
          >
            {categories.map((category) => (
              <motion.button
                key={category}
                variants={cardV}
                whileHover={{ scale: 1.06 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-7 py-3 font-semibold shadow-md transition ${
                  activeCategory === category
                    ? "bg-[#6B0F0F] text-white"
                    : "bg-white text-[#6B0F0F] hover:bg-[#D4A017] hover:text-[#3A1E12]"
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>

          <motion.div
            variants={stagger(0.09)}
            initial="hidden"
            whileInView="visible"
            viewport={vp}
            className="mt-14"
          >
            {activeItems.length ? (
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                {activeItems.map((item, index) => (
                  <motion.div key={`${item.name}-${index}`} variants={cardV} whileHover={{ y: -8 }} className="mx-auto max-w-md">
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
