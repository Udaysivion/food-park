import { useState } from "react";
import Footer from "../components/Footer";

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("Food");

  const galleryImages = {
    Food: [
      "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80",
    ],
    Ambience: [
      "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=900&q=80",
    ],
    Cooking: [
      "https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80",
    ],
    Moments: [
      "https://images.unsplash.com/photo-1528605248644-14dd04022da1?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1555244162-803834f70033?auto=format&fit=crop&w=900&q=80",
      "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=900&q=80",
    ],
  };

  const categories = Object.keys(galleryImages);

  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <section className="relative bg-[#3A1E12] pt-32 pb-24">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
            Gallery
          </p>

          <h1 className="mx-auto max-w-5xl font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            Moments Of
            <span className="block text-[#D4A017]">
              Village Hospitality
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-300">
            Explore our food, ambience, cooking traditions, and family dining
            memories through our gallery.
          </p>
        </div>
      </section>

      <section className="bg-[#F8F1E7] py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-12 text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Explore Gallery
            </p>

            <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
              Our Village Hotel Moments
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

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {galleryImages[activeCategory].map((img, index) => (
              <div
                key={index}
                className="group overflow-hidden rounded-[2rem] shadow-xl"
              >
                <img
                  src={img}
                  alt={activeCategory}
                  className="h-80 w-full object-cover transition duration-500 group-hover:scale-110"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Gallery;
