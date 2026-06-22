import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <Navbar />

      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
            alt="Village hotel"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-28">
          <div className="max-w-3xl">
            <div className="mb-6 inline-flex rounded-full border border-[#D4A017]/50 bg-white/10 px-5 py-2 backdrop-blur-md">
              <span className="text-sm font-medium tracking-wider text-[#F8F1E7]">
                AUTHENTIC VILLAGE DINING EXPERIENCE
              </span>
            </div>

            <h1 className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
              Taste The
              <span className="block text-[#D4A017]">
                Tradition Of Andhra
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-lg leading-relaxed text-gray-200">
              Experience handcrafted village recipes, fresh local ingredients,
              traditional cooking methods, and warm hospitality in a luxurious
              rural-inspired atmosphere.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <button className="rounded-full bg-[#6B0F0F] px-8 py-4 font-semibold text-white transition hover:scale-105">
                Reserve Table
              </button>

              <button className="rounded-full border border-[#D4A017] px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-[#D4A017] hover:text-black">
                Explore Menu
              </button>
            </div>
          </div>
        </div>
      </section>

    <section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">
    
    <div className="text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Our Speciality
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Village Special Highlights
      </h2>
    </div>

    <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
      
      <div className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
        <div className="mb-5 text-5xl">🔥</div>
        <h3 className="mb-3 text-xl font-bold text-[#6B0F0F]">
          Firewood Cooking
        </h3>
        <p className="text-gray-600">
          Traditional recipes cooked using authentic firewood techniques.
        </p>
      </div>

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
        <div className="mb-5 text-5xl">🌾</div>
        <h3 className="mb-3 text-xl font-bold text-[#6B0F0F]">
          Farm Fresh Ingredients
        </h3>
        <p className="text-gray-600">
          Vegetables and ingredients sourced directly from local farms.
        </p>
      </div>

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
        <div className="mb-5 text-5xl">🍃</div>
        <h3 className="mb-3 text-xl font-bold text-[#6B0F0F]">
          Banana Leaf Serving
        </h3>
        <p className="text-gray-600">
          Experience traditional meals served on fresh banana leaves.
        </p>
      </div>

      <div className="group rounded-3xl bg-white p-8 shadow-lg transition duration-300 hover:-translate-y-3 hover:shadow-2xl">
        <div className="mb-5 text-5xl">🏡</div>
        <h3 className="mb-3 text-xl font-bold text-[#6B0F0F]">
          Rural Ambience
        </h3>
        <p className="text-gray-600">
          Warm hospitality with a peaceful village-inspired atmosphere.
        </p>
      </div>

    </div>
  </div>
</section>

<section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
          Customer Favorites
        </p>

        <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
          Popular Traditional Dishes
        </h2>
      </div>

      <button className="w-fit rounded-full border border-[#6B0F0F] px-7 py-3 font-semibold text-[#6B0F0F] transition hover:bg-[#6B0F0F] hover:text-white">
        View Full Menu
      </button>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          name: "Andhra Meals",
          desc: "Hot rice, dal, curries, chutneys, rasam and curd served in village style.",
          img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Natu Kodi Pulusu",
          desc: "Country chicken curry cooked with spicy rural Andhra masala.",
          img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Ragi Sangati",
          desc: "Healthy traditional millet ball served with spicy curry and ghee.",
          img: "https://images.unsplash.com/photo-1626509653291-18d9a934b9db?auto=format&fit=crop&w=900&q=80",
        },
      ].map((dish, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-[2rem] bg-white shadow-xl transition duration-300 hover:-translate-y-3 hover:shadow-2xl"
        >
          <div className="h-72 overflow-hidden">
            <img
              src={dish.img}
              alt={dish.name}
              className="h-full w-full object-cover transition duration-500 group-hover:scale-110"
            />
          </div>

          <div className="p-7">
            <h3 className="font-serif text-2xl font-bold text-[#6B0F0F]">
              {dish.name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {dish.desc}
            </p>

            <button className="mt-6 font-semibold text-[#D4A017]">
              Explore Dish →
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
    <div className="relative">
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
        alt="Village hotel ambience"
        className="h-[520px] w-full rounded-[2.5rem] object-cover shadow-2xl"
      />

      <div className="absolute -bottom-8 right-8 rounded-3xl bg-[#6B0F0F] p-6 text-white shadow-xl">
        <h3 className="font-serif text-4xl font-bold">25+</h3>
        <p className="text-sm font-medium">Years of Taste</p>
      </div>
    </div>

    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        About Our Hotel
      </p>

      <h2 className="font-serif text-4xl font-bold leading-tight text-[#6B0F0F] md:text-5xl">
        Bringing Village Hospitality To Every Plate
      </h2>

      <p className="mt-6 text-lg leading-8 text-[#3A1E12]/75">
        Our hotel is inspired by rural Andhra homes where food is cooked with
        patience, served with love, and enjoyed together. Every dish carries the
        warmth of tradition, local ingredients, and homely taste.
      </p>

      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        <div className="rounded-2xl bg-white p-5 shadow-md">
          <h4 className="font-bold text-[#6B0F0F]">Traditional Taste</h4>
          <p className="mt-2 text-sm text-gray-600">
            Recipes inspired by village kitchens.
          </p>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-md">
          <h4 className="font-bold text-[#6B0F0F]">Homely Service</h4>
          <p className="mt-2 text-sm text-gray-600">
            Warm serving with authentic care.
          </p>
        </div>
      </div>

      <button className="mt-9 rounded-full bg-[#6B0F0F] px-8 py-4 font-semibold text-white transition hover:bg-[#3A1E12]">
        Know More About Us
      </button>
    </div>
  </div>
</section>

<section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Fresh Today
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Daily Specials
      </h2>
    </div>

    <div className="mt-16 grid gap-8 lg:grid-cols-3">
      {[
        {
          title: "Village Meals",
          price: "₹199",
        },
        {
          title: "Natu Kodi Curry",
          price: "₹299",
        },
        {
          title: "Ragi Sangati Combo",
          price: "₹249",
        },
      ].map((item, index) => (
        <div
          key={index}
          className="rounded-[2rem] border border-[#D4A017]/20 bg-white p-8 shadow-lg transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <div className="mb-5 flex items-center justify-between">
            <span className="rounded-full bg-[#D4A017]/10 px-4 py-2 text-sm font-semibold text-[#6B0F0F]">
              Special
            </span>

            <span className="font-bold text-[#D4A017]">
              {item.price}
            </span>
          </div>

          <h3 className="font-serif text-3xl font-bold text-[#6B0F0F]">
            {item.title}
          </h3>

          <p className="mt-4 text-gray-600">
            Prepared fresh every day using traditional ingredients and authentic village cooking methods.
          </p>

          <button className="mt-6 font-semibold text-[#6B0F0F]">
            Order Now →
          </button>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Our Atmosphere
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Moments From Our Village Hotel
      </h2>
    </div>

    <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

      <div className="overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-[420px] w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-[420px] w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-[420px] w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

      <div className="overflow-hidden rounded-[2rem]">
        <img
          src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-[420px] w-full object-cover transition duration-500 hover:scale-110"
        />
      </div>

    </div>

    <div className="mt-12 text-center">
      <button className="rounded-full bg-[#6B0F0F] px-8 py-4 font-semibold text-white transition hover:bg-[#3A1E12]">
        View Full Gallery
      </button>
    </div>

  </div>
</section>

<section className="relative overflow-hidden py-12">
  <div className="absolute inset-0 bg-[#3A1E12]"></div>

  <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
    <span className="inline-block rounded-full border border-[#D4A017]/40 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#D4A017] backdrop-blur-md">
      Traditional Andhra Hospitality
    </span>

    <h2 className="mt-5 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
      A Meal That Feels Like Home
    </h2>

    <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
      Enjoy authentic village recipes, fresh ingredients, and warm hospitality.
    </p>

    <div className="mt-6 flex flex-wrap justify-center gap-4">
      <button className="rounded-full bg-[#D4A017] px-7 py-3 font-semibold text-[#3A1E12] transition hover:scale-105">
        Book Table
      </button>

      <button className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#3A1E12]">
        Contact Us
      </button>
    </div>
  </div>
</section>


<Footer />
    </main>
  
  );
};

export default Home;