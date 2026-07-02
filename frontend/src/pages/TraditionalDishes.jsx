import { motion } from "framer-motion";
import { viewport, fadeUp, staggerContainer, cardVariant } from "../hooks/useScrollAnimation";
import Footer from "../components/Footer";
import chickenFriedRiceImg from "../assets/chicken fried rice 1.jpg";
import chickenBonelessImg from "../assets/boneless 1.jpg";
import chickenMixedBiryaniImg from "../assets/chicken mixed biryani.png";
import thumsupChickenImg from "../assets/thumsup chicken.png";
import mixedVegBiryaniImg from "../assets/mixed veg biryani.png";
import hongkongChickenImg from "../assets/hongkong chicken.jpg";

const TraditionalDishes = () => {
  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      {/* Traditional Dishes Hero */}
      <section className="relative bg-[#3A1E12] pt-32 pb-20">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl px-6 text-center"
        >
          <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
            Traditional Dishes
          </motion.p>

          <motion.h1 variants={fadeUp} className="mx-auto max-w-4xl font-serif text-5xl font-bold leading-tight text-white md:text-7xl">
            Authentic Rural Andhra Recipes Served With Tradition
          </motion.h1>

          <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Explore signature dishes prepared with village-style cooking,
            fresh local ingredients, and timeless family recipes.
          </motion.p>
        </motion.div>
      </section>

      {/* Signature Rural Dishes */}
<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mb-14 text-center"
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Signature Recipes
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Signature Rural Dishes
      </motion.h2>
    </motion.div>

    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-3"
    >
      {[
        {
          name: "Special Chicken Fried Rice",
          img: chickenFriedRiceImg,
          desc: "Fragrant stir-fried rice tossed with tender chicken, fresh vegetables, egg, and signature restaurant spices.",
        },
        {
          name: "Chicken Boneless",
          img: chickenBonelessImg,
          desc: "Juicy boneless chicken pieces marinated in local spices and deep-fried to a golden crunch.",
        },
        {
          name: "Chicken Mixed Biryani",
          img: chickenMixedBiryaniImg,
          desc: "Fragrant basmati rice layered with juicy spiced chicken, hard-boiled egg, and aromatic herbs.",
        },
        {
          name: "Thumsup Chicken",
          img: thumsupChickenImg,
          desc: "Juicy chicken wings glazed in a rich, sweet and spicy Thums Up reduction sauce with curry leaves.",
        },
        {
          name: "Mixed Veg Biryani",
          img: mixedVegBiryaniImg,
          desc: "Aromatic basmati rice cooked dum-style with seasonal vegetables, paneer cubes, and fresh mint.",
        },
        {
          name: "Hongkong Chicken",
          img: hongkongChickenImg,
          desc: "Stir-fried glazed chicken tossed with colorful bell peppers, cashews, and a savory-sweet sauce.",
        },
      ].map((dish, index) => (
        <motion.div
          key={index}
          variants={cardVariant}
          whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
          className="group overflow-hidden rounded-[2rem] bg-white shadow-xl transition-shadow"
        >
          <motion.img
            src={dish.img}
            alt={dish.name}
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-110"
          />

          <div className="p-7">
            <h3 className="font-serif text-2xl font-bold text-[#6B0F0F]">
              {dish.name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-600">
              {dish.desc || "Prepared with traditional Andhra spices and village-style cooking."}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

<section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mb-16 text-center"
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Traditional Cooking
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Crafted The Traditional Way
      </motion.h2>
    </motion.div>

    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid gap-8 md:grid-cols-4"
    >

      <motion.div variants={fadeUp} className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6B0F0F] text-3xl text-white">
          🌾
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#6B0F0F]">
          Fresh Sourcing
        </h3>

        <p className="mt-3 text-gray-600">
          Ingredients sourced from local farms and markets.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6B0F0F] text-3xl text-white">
          🔥
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#6B0F0F]">
          Slow Cooking
        </h3>

        <p className="mt-3 text-gray-600">
          Traditional techniques preserving authentic flavor.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6B0F0F] text-3xl text-white">
          🥘
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#6B0F0F]">
          Village Recipes
        </h3>

        <p className="mt-3 text-gray-600">
          Recipes passed through generations.
        </p>
      </motion.div>

      <motion.div variants={fadeUp} className="text-center">
        <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-[#6B0F0F] text-3xl text-white">
          🍃
        </div>

        <h3 className="mt-6 text-xl font-bold text-[#6B0F0F]">
          Traditional Serving
        </h3>

        <p className="mt-3 text-gray-600">
          Served with authentic Andhra hospitality.
        </p>
      </motion.div>

    </motion.div>

  </div>
</section>

<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mb-16 text-center"
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Festival Specials
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Celebrating Andhra Traditions
      </motion.h2>

      <motion.p variants={fadeUp} className="mx-auto mt-6 max-w-3xl text-lg text-[#3A1E12]/75">
        Special dishes prepared during festivals and family celebrations.
      </motion.p>
    </motion.div>

    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid gap-8 lg:grid-cols-4"
    >

      <motion.div variants={cardVariant} className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-64 w-full object-cover transition duration-500 hover:scale-110"
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
      </motion.div>

      <motion.div variants={cardVariant} className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-64 w-full object-cover transition duration-500 hover:scale-110"
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
      </motion.div>

      <motion.div variants={cardVariant} className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-64 w-full object-cover transition duration-500 hover:scale-110"
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
      </motion.div>

      <motion.div variants={cardVariant} className="overflow-hidden rounded-[2rem] bg-white shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=900&q=80"
          alt=""
          className="h-64 w-full object-cover transition duration-500 hover:scale-110"
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
      </motion.div>

    </motion.div>

  </div>
</section>

<section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mb-16 text-center"
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Regional Flavours
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Taste Every Region Of Andhra
      </motion.h2>
    </motion.div>

    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="space-y-8"
    >

      {/* Coastal Andhra */}
      <motion.div variants={fadeUp} className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-xl lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
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
      </motion.div>

      {/* Rayalaseema */}
      <motion.div variants={fadeUp} className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-xl lg:grid-cols-2">
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
          className="h-[350px] w-full object-cover order-1 lg:order-2 transition duration-500 hover:scale-105"
        />
      </motion.div>

      {/* Telangana */}
      <motion.div variants={fadeUp} className="grid overflow-hidden rounded-[2.5rem] bg-white shadow-xl lg:grid-cols-2">
        <img
          src="https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=80"
          alt=""
          className="h-[350px] w-full object-cover transition duration-500 hover:scale-105"
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
      </motion.div>

    </motion.div>

  </div>
</section>

<section className="bg-[#FFF8EE] py-20">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid overflow-hidden rounded-[2.5rem] bg-[#3A1E12] shadow-2xl lg:grid-cols-2"
    >
      
      <div className="p-10 md:p-14">
        <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
          Andhra Food Heritage
        </motion.p>

        <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold leading-tight text-white md:text-5xl">
          Every Dish Carries A Village Story
        </motion.h2>

        <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-gray-300">
          From spicy curries to banana leaf meals, our traditional dishes are
          prepared with old-style recipes, fresh ingredients, and homely care.
        </motion.p>

        <motion.div variants={staggerContainer(0.1, 0.2)} className="mt-8 flex flex-wrap gap-4">
          <motion.div variants={cardVariant} className="rounded-2xl bg-white/10 px-6 py-4">
            <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
              150+
            </h3>
            <p className="text-sm text-gray-300">Recipes</p>
          </motion.div>

          <motion.div variants={cardVariant} className="rounded-2xl bg-white/10 px-6 py-4">
            <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
              18+
            </h3>
            <p className="text-sm text-gray-300">Years (Since 2007)</p>
          </motion.div>

          <motion.div variants={cardVariant} className="rounded-2xl bg-white/10 px-6 py-4">
            <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
              5 Lakh+
            </h3>
            <p className="text-sm text-gray-300">Happy Guests</p>
          </motion.div>
        </motion.div>
      </div>

      <motion.div variants={fadeUp} className="relative min-h-[360px]">
        <img
          src="https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=1200&q=80"
          alt="Traditional Andhra food"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3A1E12]/40 to-transparent"></div>
      </motion.div>

    </motion.div>
  </div>
</section>

      <Footer />
    </main>
  );
};

export default TraditionalDishes;
