import { useState } from "react";
import Footer from "../components/Footer";

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Breakfast");

  // Card component: handles its own image toggle and name change
  const MenuCard = ({ item }) => {
    const [idx, setIdx] = useState(0);

    const toggle = () => setIdx((i) => (i + 1) % item.images.length);

    const displayName = idx === 0 ? item.name : item.altName || item.name;

    return (
      <div className="rounded-[2rem] border border-[#D4A017]/20 bg-white overflow-hidden shadow-xl transition hover:-translate-y-2 hover:shadow-2xl">
        <div className="relative">
          <img src={item.images[idx]} alt={displayName} className="h-48 w-full object-cover" />

          <button
            onClick={toggle}
            aria-label="Toggle image"
            className="absolute bottom-3 right-3 rounded-full bg-black/40 p-3 text-white shadow-lg hover:bg-black/60 focus:outline-none"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 111.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </button>
        </div>

        <div className="p-8">
          <h3 className="font-serif text-2xl font-bold text-[#6B0F0F] mb-3">{displayName}</h3>

          <p className="leading-7 text-gray-600">{item.desc}</p>
        </div>
      </div>
    );
  };

  const menuItems = {
    Breakfast: [
      {
        name: "Idli Sambar",
        altName: "Village Idli",
        desc: "Soft idlis served with village-style sambar and chutney.",
        images: [
          "https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1554118811-1e8b7d3f3d2d?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Ghee Dosa",
        altName: "Crispy Ghee Dosa",
        desc: "Crispy dosa roasted with ghee and served hot.",
        images: [
          "https://images.unsplash.com/photo-1567521464027-f127ff144326?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Poori Curry",
        altName: "Potato Poori Curry",
        desc: "Fluffy pooris served with traditional potato curry.",
        images: [
          "https://images.unsplash.com/photo-1585238341710-4913dfbbfaf7?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1608758925193-8b9f2b7b6d19?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],
    Lunch: [
      {
        name: "Andhra Meals",
        altName: "Traditional Thali",
        desc: "Rice, dal, curries, rasam, curd, papad and pickle.",
        images: [
          "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1565895405135-3d6b0b2e5a8d?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Veg Banana Leaf Meals",
        altName: "Banana Leaf Feast",
        desc: "Complete village-style meal served on banana leaf.",
        images: [
          "https://images.unsplash.com/photo-1585518419759-e924b539c667?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1543353071-087092ec393f?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Chicken Meals",
        altName: "Spicy Chicken Plate",
        desc: "Traditional chicken curry with rice and sides.",
        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1601571393355-5f4ba2b7c8f6?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],
    Dinner: [
      {
        name: "Ragi Sangati",
        altName: "Millet Sangati",
        desc: "Healthy millet ball served with spicy village curry.",
        images: [
          "https://images.unsplash.com/photo-1585518419759-e924b539c667?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Chapati Curry",
        altName: "Soft Chapati Platter",
        desc: "Soft chapatis served with fresh curry.",
        images: [
          "https://images.unsplash.com/photo-1585238341710-4913dfbbfaf7?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Curd Rice",
        altName: "Comfort Curd Rice",
        desc: "Comforting curd rice with pickle and seasoning.",
        images: [
          "https://images.unsplash.com/photo-1612874742237-6526221fcf4f?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1551183053-bf91a1d81141?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],
    Specials: [
      {
        name: "Natu Kodi Pulusu",
        altName: "Country Chicken",
        desc: "Country chicken curry cooked in rural Andhra style.",
        images: [
          "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1604908177522-8f7f5f6f0f1c?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Mutton Curry",
        altName: "Spicy Mutton",
        desc: "Rich spicy mutton curry with traditional masala.",
        images: [
          "https://images.unsplash.com/photo-1645112411341-6c4ee32510f8?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1604909052864-1b6a6c4c5b9e?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Fish Pulusu",
        altName: "Tangy Fish Curry",
        desc: "Tangy Andhra fish curry cooked with local spices.",
        images: [
          "https://images.unsplash.com/photo-1559827260-dc66d52bef19?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1514516870921-35b1c3b8a8ee?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],
    Beverages: [
      {
        name: "Buttermilk",
        altName: "Spiced Buttermilk",
        desc: "Fresh village-style spiced buttermilk.",
        images: [
          "https://images.unsplash.com/photo-1589985643471-c3fb3d1ee205?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1572449043412-2ecb8a5f2d2f?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Lassi",
        altName: "Sweet Lassi",
        desc: "Thick and refreshing traditional lassi.",
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
        ],
      },
      {
        name: "Filter Coffee",
        altName: "Strong Filter Coffee",
        desc: "Strong hot coffee served fresh.",
        images: [
          "https://images.unsplash.com/photo-1559056199-641a0ac8b8d5?auto=format&fit=crop&w=800&q=80",
          "https://images.unsplash.com/photo-1510627498534-cf7e9002facc?auto=format&fit=crop&w=800&q=80",
        ],
      },
    ],
  };

  const categories = Object.keys(menuItems);

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
                className={`rounded-full px-7 py-3 font-semibold transition ${
                  activeCategory === category
                    ? "bg-[#6B0F0F] text-white shadow-lg"
                    : "bg-white text-[#6B0F0F] shadow-md hover:bg-[#D4A017] hover:text-[#3A1E12]"
                }`}
              >
                {category}
              </button>
            ))}

            <div className="ml-auto flex gap-3">
              <a
                href="https://www.swiggy.com/city/kakinada/food-park-family-restaurant-kakinada-rest103033"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 font-semibold text-white shadow-2xl bg-gradient-to-r from-[#ff9a2e] to-[#ff6b00] transition-transform hover:-translate-y-1"
              >
                Swiggy
              </a>
              <a
                href="https://www.zomato.com/kakinada/food-park-family-restaurant-1-kakinada-locality/order"
                target="_blank"
                rel="noreferrer"
                className="rounded-full px-6 py-3 font-semibold text-white shadow-2xl bg-gradient-to-r from-[#f03b4b] to-[#d93a4a] transition-transform hover:-translate-y-1"
              >
                Zomato
              </a>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {menuItems[activeCategory].map((item, index) => (
              <div key={index}>
                <MenuCard item={item} />
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
