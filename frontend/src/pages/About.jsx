import { motion } from "framer-motion";
import { viewport, fadeUp, staggerContainer, cardVariant, fadeLeft, fadeRight } from "../hooks/useScrollAnimation";

const AboutHero = () => {
  return (
    <>
      <section className="relative bg-[#F8F1E7] pt-32 pb-20">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="mx-auto max-w-7xl px-6"
        >
          <div className="text-center">
            <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
              About Us
            </motion.p>

            <motion.h1 variants={fadeUp} className="mx-auto max-w-full font-serif text-2xl font-bold leading-snug text-[#6B0F0F] sm:text-3xl md:text-4xl lg:whitespace-nowrap lg:text-[1.75rem] xl:text-[2rem]">
              Bringing Traditional Andhra Flavors To Every Table
            </motion.h1>
          </div>

          <motion.div variants={fadeUp} className="relative mt-10 overflow-hidden rounded-[3rem] shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80"
              alt="Village hotel ambience"
              className="h-[520px] w-full object-cover"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#3A1E12]/70 to-transparent"></div>

            <div className="absolute bottom-8 left-8 rounded-3xl border border-[#D4A017]/40 bg-white/15 p-6 text-white backdrop-blur-md">
              <h3 className="font-serif text-4xl font-bold text-[#D4A017]">
                Since 1998
              </h3>
              <p className="mt-2 text-sm">
                Serving authentic village-style hospitality
              </p>
            </div>
          </motion.div>
        </motion.div>
      </section>

      <section className="bg-[#FFF8EE] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <motion.div
              variants={staggerContainer(0.1)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
            >
              <motion.p variants={fadeLeft} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
                Our Story
              </motion.p>

              <motion.h2 variants={fadeLeft} className="font-serif text-4xl font-bold leading-tight text-[#6B0F0F] md:text-5xl">
                Started From A Small Village Kitchen
              </motion.h2>

              <motion.p variants={fadeLeft} className="mt-6 text-lg leading-8 text-[#3A1E12]/75">
                Our journey began with a passion for preserving authentic Andhra
                village recipes. What started as a small family kitchen has grown
                into a destination where guests experience traditional food,
                hospitality, and culture.
              </motion.p>

              <motion.p variants={fadeLeft} className="mt-5 text-lg leading-8 text-[#3A1E12]/75">
                Every meal reflects generations of culinary traditions, prepared
                using fresh ingredients and served with genuine village warmth.
              </motion.p>
            </motion.div>

            <motion.div
              variants={staggerContainer(0.12, 0.2)}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="grid grid-cols-2 gap-6"
            >
              <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-8 shadow-lg">
                <h3 className="font-serif text-4xl font-bold text-[#6B0F0F]">
                  18+
                </h3>
                <p className="mt-2 text-gray-600">
                  Years Since 2007
                </p>
              </motion.div>

              <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-8 shadow-lg">
                <h3 className="font-serif text-4xl font-bold text-[#6B0F0F]">
                  150+
                </h3>
                <p className="mt-2 text-gray-600">
                  Authentic Dishes
                </p>
              </motion.div>

              <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-8 shadow-lg">
                <h3 className="font-serif text-4xl font-bold text-[#6B0F0F]">
                  5 Lakh+
                </h3>
                <p className="mt-2 text-gray-600">
                  Happy Guests
                </p>
              </motion.div>

              <motion.div variants={cardVariant} className="rounded-[2rem] bg-[#6B0F0F] p-8 shadow-lg">
                <h3 className="font-serif text-4xl font-bold text-[#D4A017]">
                  1.7 Lakh+
                </h3>
                <p className="mt-2 text-white">
                  Online Ratings
                </p>
              </motion.div>
            </motion.div>

          </div>
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
        Village Experience
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        More Than Food, It's A Village Experience
      </motion.h2>
    </motion.div>

    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid gap-8 md:grid-cols-2 lg:grid-cols-4"
    >

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-8 shadow-lg transition-transform hover:-translate-y-2">
        <div className="mb-5 text-5xl">🌾</div>

        <h3 className="text-xl font-bold text-[#6B0F0F]">
          Rural Atmosphere
        </h3>

        <p className="mt-4 text-gray-600">
          Experience the peaceful charm of traditional village life.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-8 shadow-lg transition-transform hover:-translate-y-2">
        <div className="mb-5 text-5xl">🍃</div>

        <h3 className="text-xl font-bold text-[#6B0F0F]">
          Banana Leaf Dining
        </h3>

        <p className="mt-4 text-gray-600">
          Enjoy authentic meals served on fresh banana leaves.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-8 shadow-lg transition-transform hover:-translate-y-2">
        <div className="mb-5 text-5xl">🔥</div>

        <h3 className="text-xl font-bold text-[#6B0F0F]">
          Firewood Cooking
        </h3>

        <p className="mt-4 text-gray-600">
          Traditional cooking methods that preserve authentic flavors.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-8 shadow-lg transition-transform hover:-translate-y-2">
        <div className="mb-5 text-5xl">❤️</div>

        <h3 className="text-xl font-bold text-[#6B0F0F]">
          Homely Hospitality
        </h3>

        <p className="mt-4 text-gray-600">
          Every guest is welcomed like family with genuine care.
        </p>
      </motion.div>

    </motion.div>

    </div>
  </section>

  <section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Image */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="relative"
      >
        <motion.img
          variants={fadeLeft}
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
          alt="Fresh Ingredients"
          className="h-[550px] w-full rounded-[2.5rem] object-cover shadow-2xl"
        />

        <motion.div variants={fadeUp} className="absolute bottom-6 left-6 rounded-3xl bg-[#6B0F0F] p-6 text-white shadow-xl">
          <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
            Farm Fresh
          </h3>

          <p className="mt-1 text-sm">
            Directly sourced from local farmers
          </p>
        </motion.div>
      </motion.div>

      {/* Content */}
      <motion.div
        variants={staggerContainer(0.1)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
      >
        <motion.p variants={fadeRight} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
          Fresh Ingredients
        </motion.p>

        <motion.h2 variants={fadeRight} className="font-serif text-4xl font-bold leading-tight text-[#6B0F0F] md:text-5xl">
          Fresh From Farms To Your Plate
        </motion.h2>

        <motion.p variants={fadeRight} className="mt-6 text-lg leading-8 text-[#3A1E12]/75">
          We believe great food starts with great ingredients. That's why
          we work closely with local farmers to bring fresh vegetables,
          spices, grains, and dairy products directly to our kitchen.
        </motion.p>

        <motion.div variants={staggerContainer(0.1, 0.2)} className="mt-8 space-y-5">

          <motion.div variants={fadeUp} className="flex items-start gap-4">
            <span className="text-2xl">🌾</span>
            <div>
              <h4 className="font-bold text-[#6B0F0F]">
                Locally Sourced
              </h4>
              <p className="text-gray-600">
                Supporting local farmers and village communities.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-start gap-4">
            <span className="text-2xl">🍃</span>
            <div>
              <h4 className="font-bold text-[#6B0F0F]">
                Naturally Fresh
              </h4>
              <p className="text-gray-600">
                Fresh ingredients delivered daily to our kitchen.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeUp} className="flex items-start gap-4">
            <span className="text-2xl">🥘</span>
            <div>
              <h4 className="font-bold text-[#6B0F0F]">
                Authentic Taste
              </h4>
              <p className="text-gray-600">
                Traditional recipes made with quality ingredients.
              </p>
            </div>
          </motion.div>

        </motion.div>
      </motion.div>

    </div>
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
        Why Choose Us
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        What Makes Us Special
      </motion.h2>
    </motion.div>

    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid gap-8 lg:grid-cols-3"
    >

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-10 shadow-xl transition-transform hover:-translate-y-2">
        <div className="mb-6 text-5xl">👨‍🍳</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Traditional Recipes
        </h3>

        <p className="leading-7 text-gray-600">
          Recipes passed down through generations preserving authentic
          Andhra village flavors.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-[#6B0F0F] p-10 text-white shadow-xl transition-transform hover:-translate-y-2">
        <div className="mb-6 text-5xl">🏡</div>

        <h3 className="mb-4 text-2xl font-bold">
          Village Hospitality
        </h3>

        <p className="leading-7 text-white/80">
          Warm service and welcoming atmosphere that makes every guest
          feel at home.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-10 shadow-xl transition-transform hover:-translate-y-2">
        <div className="mb-6 text-5xl">🌿</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Fresh Ingredients
        </h3>

        <p className="leading-7 text-gray-600">
          Carefully selected ingredients sourced from trusted local farms.
        </p>
      </motion.div>

    </motion.div>

    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mt-10 grid gap-8 lg:grid-cols-3"
    >

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-10 shadow-xl transition-transform hover:-translate-y-2">
        <div className="mb-6 text-5xl">🍃</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Banana Leaf Dining
        </h3>

        <p className="leading-7 text-gray-600">
          Traditional dining experience served the authentic way.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-10 shadow-xl transition-transform hover:-translate-y-2">
        <div className="mb-6 text-5xl">🔥</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Firewood Cooking
        </h3>

        <p className="leading-7 text-gray-600">
          Slow-cooked dishes that retain natural aroma and taste.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] bg-white p-10 shadow-xl transition-transform hover:-translate-y-2">
        <div className="mb-6 text-5xl">⭐</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Trusted By Families
        </h3>

        <p className="leading-7 text-gray-600">
          A preferred destination for family dining and celebrations.
        </p>
      </motion.div>

    </motion.div>

  </div>
</section>


<section className="relative overflow-hidden bg-[#3A1E12] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <motion.div
      variants={staggerContainer(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mb-16 text-center"
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Our Values
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-white md:text-5xl">
        Hospitality Rooted In Tradition
      </motion.h2>
    </motion.div>

    <motion.div
      variants={staggerContainer(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="grid gap-8 lg:grid-cols-3"
    >

      <motion.div variants={cardVariant} className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-transform hover:-translate-y-2 hover:bg-white/10">
        <div className="mb-6 text-5xl">🤝</div>

        <h3 className="mb-4 text-2xl font-bold text-[#D4A017]">
          Respect
        </h3>

        <p className="leading-7 text-gray-300">
          Every guest is treated with warmth, kindness, and genuine respect.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-transform hover:-translate-y-2 hover:bg-white/10">
        <div className="mb-6 text-5xl">❤️</div>

        <h3 className="mb-4 text-2xl font-bold text-[#D4A017]">
          Authenticity
        </h3>

        <p className="leading-7 text-gray-300">
          We stay true to traditional Andhra recipes and village cooking methods.
        </p>
      </motion.div>

      <motion.div variants={cardVariant} className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm transition-transform hover:-translate-y-2 hover:bg-white/10">
        <div className="mb-6 text-5xl">🌾</div>

        <h3 className="mb-4 text-2xl font-bold text-[#D4A017]">
          Community
        </h3>

        <p className="leading-7 text-gray-300">
          Supporting local farmers, producers, and rural communities.
        </p>
      </motion.div>

    </motion.div>

    <motion.div
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      className="mt-16 rounded-[2.5rem] border border-[#D4A017]/20 bg-[#6B0F0F] p-10 text-center shadow-2xl"
    >

      <h3 className="font-serif text-3xl font-bold text-white md:text-4xl">
        Serving Memories Since 1998
      </h3>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
        More than a restaurant, we are a place where families gather,
        traditions are celebrated, and every meal feels like home.
      </p>

    </motion.div>

  </div>
</section>

    </>
    
  );
};

export default AboutHero;
