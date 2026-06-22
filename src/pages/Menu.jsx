import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  const menuItems = {
    Breakfast: [
      { name: "Idli Sambar", price: "₹40", desc: "Soft idlis served with village-style sambar and chutney." },
      { name: "Ghee Dosa", price: "₹70", desc: "Crispy dosa roasted with ghee and served hot." },
      { name: "Poori Curry", price: "₹80", desc: "Fluffy pooris served with traditional potato curry." },
    ],
    Lunch: [
      { name: "Andhra Meals", price: "₹199", desc: "Rice, dal, curries, rasam, curd, papad and pickle." },
      { name: "Veg Banana Leaf Meals", price: "₹249", desc: "Complete village-style meal served on banana leaf." },
      { name: "Chicken Meals", price: "₹299", desc: "Traditional chicken curry with rice and sides." },
    ],
    Dinner: [
      { name: "Ragi Sangati", price: "₹180", desc: "Healthy millet ball served with spicy village curry." },
      { name: "Chapati Curry", price: "₹150", desc: "Soft chapatis served with fresh curry." },
      { name: "Curd Rice", price: "₹120", desc: "Comforting curd rice with pickle and seasoning." },
    ],
    Specials: [
      { name: "Natu Kodi Pulusu", price: "₹350", desc: "Country chicken curry cooked in rural Andhra style." },
      { name: "Mutton Curry", price: "₹420", desc: "Rich spicy mutton curry with traditional masala." },
      { name: "Fish Pulusu", price: "₹280", desc: "Tangy Andhra fish curry cooked with local spices." },
    ],
    Beverages: [
      { name: "Buttermilk", price: "₹30", desc: "Fresh village-style spiced buttermilk." },
      { name: "Lassi", price: "₹50", desc: "Thick and refreshing traditional lassi." },
      { name: "Filter Coffee", price: "₹40", desc: "Strong hot coffee served fresh." },
    ],
  };

  const categories = Object.keys(menuItems);

  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <Navbar />

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

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`rounded-full px-7 py-3 font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#6B0F0F] text-white shadow-lg"
                    : "bg-white text-[#6B0F0F] shadow-md hover:bg-[#D4A017] hover:text-[#3A1E12]"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {menuItems[activeCategory].map((item, index) => (
              <div
                key={index}
                className="rounded-[2rem] border border-[#D4A017]/20 bg-white p-8 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <h3 className="font-serif text-2xl font-bold text-[#6B0F0F]">
                    {item.name}
                  </h3>

                  <span className="rounded-full bg-[#D4A017]/15 px-4 py-2 font-bold text-[#6B0F0F]">
                    {item.price}
                  </span>
                </div>

                <p className="leading-7 text-gray-600">{item.desc}</p>

                <button className="mt-6 font-semibold text-[#D4A017]">
                  Add To Order →
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8EE] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="rounded-[2.5rem] bg-[#3A1E12] p-10 text-center shadow-2xl md:p-14">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Freshly Prepared
            </p>

            <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
              Every Meal Is Cooked With Village Taste
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-gray-300">
              Our dishes are prepared fresh every day using local ingredients,
              traditional spices, and homely cooking methods.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Menu;