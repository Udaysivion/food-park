import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "../components/Footer";
import { categories, menuItems } from "../data/menuItems";

const Menu = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  const MenuCard = ({ item, onVisit }) => {
    const [idx, setIdx] = useState(0);

    const toggle = () => setIdx((i) => (i + 1) % item.images.length);
    const displayName = idx === 0 ? item.name : item.altName || item.name;

    return (
      <div className="overflow-hidden rounded-[2rem] border border-[#D4A017]/20 bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative">
          <img
            src={item.images[idx]}
            alt={displayName}
            className="h-72 w-full object-cover"
          />

          <button
            onClick={toggle}
            className="absolute bottom-3 right-3 rounded-full bg-black/40 p-3 text-white shadow-lg hover:bg-black/60"
          >
            ›
          </button>
        </div>

        <div className="p-8">
          <h3 className="mb-3 font-serif text-3xl font-bold text-[#6B0F0F]">
            {displayName}
          </h3>

          <p className="leading-7 text-gray-600">{item.desc}</p>

          <div className="mt-6 flex items-center justify-between">
            <button
              onClick={onVisit}
              className="rounded-full bg-[#D4A017] px-6 py-3 font-semibold text-[#3A1E12] shadow-md hover:bg-[#c08e14]"
            >
              Visit
            </button>

            <span className="text-lg font-semibold text-gray-500">
              Price: ₹{item.price}
            </span>
          </div>
        </div>
      </div>
    );
  };

  const activeItems = menuItems[activeCategory] || [];

  const handleVisit = (index) => {
    navigate(`/menu/detail/${encodeURIComponent(activeCategory)}/${index}`, {
      state: {
        item: activeItems[index],
        category: activeCategory,
        index,
      },
    });
  };

  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <section className="relative overflow-hidden bg-[#3A1E12] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
            Our Menu
          </p>

          <h1 className="mx-auto max-w-5xl font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            Authentic Andhra Flavours
            <span className="block text-[#D4A017]">
              Crafted Fresh Every Day
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Explore traditional meals, spicy curries, village specials, snacks,
            and refreshing beverages.
          </p>
        </div>
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

          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-7 py-3 font-semibold shadow-md transition ${
                  activeCategory === category
                    ? "bg-[#6B0F0F] text-white"
                    : "bg-white text-[#6B0F0F] hover:bg-[#D4A017] hover:text-[#3A1E12]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-14">
            {activeItems.length ? (
              <>
                <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                  {activeItems.map((item, index) => (
                    <div key={`${item.name}-${index}`} className="mx-auto max-w-md">
                      <MenuCard
                        item={item}
                        onVisit={() => handleVisit(index)}
                      />
                    </div>
                  ))}
                </div>

              </>
            ) : (
              <p className="text-center text-gray-600">
                No items available in this category.
              </p>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Menu;
