import Footer from "../components/Footer";

const TraditionalDishes = () => {
  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      {/* Traditional Dishes Hero */}
      <section className="relative bg-[#3A1E12] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
            Traditional Dishes
          </p>

          <h1 className="mx-auto max-w-4xl font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            Authentic Rural Andhra Recipes Served With Tradition
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Explore signature dishes prepared with village-style cooking,
            fresh local ingredients, and timeless family recipes.
          </p>
        </div>
      </section>

      {/* Signature Rural Dishes */}
<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Signature Recipes
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Signature Rural Dishes
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Andhra Meals",
          img: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Natu Kodi Pulusu",
          img: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=900&q=80",
        },
        {
          name: "Ragi Sangati",
          img: "https://images.unsplash.com/photo-1626509653291-18d9a934b9db?auto=format&fit=crop&w=900&q=80",
        },
      ].map((dish, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-[2rem] bg-white shadow-xl transition hover:-translate-y-2 hover:shadow-2xl"
        >
          <img
            src={dish.img}
            alt={dish.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="p-7">
            <h3 className="font-serif text-2xl font-bold text-[#6B0F0F]">
              {dish.name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              Prepared with traditional Andhra spices and village-style cooking.
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Traditional Cooking
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Crafted The Traditional Way
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-4">

      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6B0F0F] text-3xl text-white">
          🌾
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#6B0F0F]">
          Fresh Sourcing
        </h3>

        <p className="mt-3 text-gray-600">
          Ingredients sourced from local farms and markets.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6B0F0F] text-3xl text-white">
          🔥
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#6B0F0F]">
          Slow Cooking
        </h3>

        <p className="mt-3 text-gray-600">
          Traditional techniques preserving authentic flavor.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6B0F0F] text-3xl text-white">
          🥘
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#6B0F0F]">
          Village Recipes
        </h3>

        <p className="mt-3 text-gray-600">
          Recipes passed through generations.
        </p>
      </div>

      <div className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6B0F0F] text-3xl text-white">
          🍃
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#6B0F0F]">
          Traditional Serving
        </h3>

        <p className="mt-3 text-gray-600">
          Served with authentic Andhra hospitality.
        </p>
      </div>

    </div>

  </div>
</section>

<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Festival Specials
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Celebrating Andhra Traditions
      </h2>

      <p className="mx-auto mt-6 max-w-3xl text-lg text-[#3A1E12]/75">
        Special dishes prepared during festivals and family celebrations.
      </p>
    </div>

    <div className="grid gap-8 lg:grid-cols-4">

      <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <span className="text-sm font-semibold text-[#D4A017]">
            Sankranti
          </span>

          <h3 className="mt-2 font-serif text-2xl font-bold text-[#6B0F0F]">
            Ariselu & Pongali
          </h3>

          <p className="mt-3 text-gray-600">
            Traditional festive sweets and rice preparations.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <span className="text-sm font-semibold text-[#D4A017]">
            Ugadi
          </span>

          <h3 className="mt-2 font-serif text-2xl font-bold text-[#6B0F0F]">
            Ugadi Pachadi
          </h3>

          <p className="mt-3 text-gray-600">
            Symbolizing life's six different flavors.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <span className="text-sm font-semibold text-[#D4A017]">
            Dasara
          </span>

          <h3 className="mt-2 font-serif text-2xl font-bold text-[#6B0F0F]">
            Festival Feast
          </h3>

          <p className="mt-3 text-gray-600">
            Complete Andhra festive dining experience.
          </p>
        </div>
      </div>

      <div className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-64 w-full object-cover"
        />

        <div className="p-6">
          <span className="text-sm font-semibold text-[#D4A017]">
            Weddings
          </span>

          <h3 className="mt-2 font-serif text-2xl font-bold text-[#6B0F0F]">
            Traditional Meals
          </h3>

          <p className="mt-3 text-gray-600">
            Authentic banana leaf wedding-style meals.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

<section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Regional Flavours
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Taste Every Region Of Andhra
      </h2>
    </div>

    <div className="space-y-8">

      {/* Coastal Andhra */}
      <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-xl lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="h-[350px] w-full object-cover"
        />

        <div className="flex flex-col justify-center p-10">
          <span className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#D4A017]">
            Coastal Andhra
          </span>

          <h3 className="font-serif text-3xl font-bold text-[#6B0F0F]">
            Rich Coastal Flavours
          </h3>

          <p className="mt-5 leading-8 text-gray-600">
            Famous for seafood curries, spicy gravies, and traditional rice
            meals prepared with authentic coastal ingredients.
          </p>
        </div>
      </div>

      {/* Rayalaseema */}
      <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-xl lg:grid-cols-2">
        <div className="flex flex-col justify-center p-10 order-2 lg:order-1">
          <span className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#D4A017]">
            Rayalaseema
          </span>

          <h3 className="font-serif text-3xl font-bold text-[#6B0F0F]">
            Bold & Spicy Traditions
          </h3>

          <p className="mt-5 leading-8 text-gray-600">
            Known for fiery flavours, rich spices, and traditional village
            cooking techniques passed through generations.
          </p>
        </div>

        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="h-[350px] w-full object-cover order-1 lg:order-2"
        />
      </div>

      {/* Telangana */}
      <div className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-xl lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="h-[350px] w-full object-cover"
        />

        <div className="flex flex-col justify-center p-10">
          <span className="mb-3 text-sm font-semibold uppercase tracking-[3px] text-[#D4A017]">
            Telangana
          </span>

          <h3 className="font-serif text-3xl font-bold text-[#6B0F0F]">
            Rustic Village Cuisine
          </h3>

          <p className="mt-5 leading-8 text-gray-600">
            Traditional millet dishes, village curries, and authentic
            Telangana-style comfort food.
          </p>
        </div>
      </div>

    </div>

  </div>
</section>

<section className="bg-[#FFF8EE] py-20">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid overflow-hidden rounded-[2.5rem] bg-[#3A1E12] shadow-2xl lg:grid-cols-2">
      
      <div className="p-10 md:p-14">
        <p className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
          Andhra Food Heritage
        </p>

        <h2 className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
          Every Dish Carries A Village Story
        </h2>

        <p className="mt-6 text-lg leading-8 text-gray-300">
          From spicy curries to banana leaf meals, our traditional dishes are
          prepared with old-style recipes, fresh ingredients, and homely care.
        </p>

        <div className="mt-8 flex flex-wrap gap-4">
          <div className="rounded-2xl bg-white/10 px-6 py-4">
            <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
              100+
            </h3>
            <p className="text-sm text-gray-300">Recipes</p>
          </div>

          <div className="rounded-2xl bg-white/10 px-6 py-4">
            <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
              25+
            </h3>
            <p className="text-sm text-gray-300">Years</p>
          </div>

          <div className="rounded-2xl bg-white/10 px-6 py-4">
            <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
              5k+
            </h3>
            <p className="text-sm text-gray-300">Guests</p>
          </div>
        </div>
      </div>

      <div className="relative min-h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80"
          alt="Traditional Andhra food"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A1E12]/40 to-transparent"></div>
      </div>

    </div>
  </div>
</section>

      <Footer />
    </main>
  );
};

export default TraditionalDishes;
