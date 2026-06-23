const AboutHero = () => {
  return (
    <>
      <section className="relative bg-[#F8F1E7] pt-32 pb-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
              About Us
            </p>

            <h1 className="mx-auto max-w-full font-serif text-2xl font-bold leading-snug text-[#6B0F0F] sm:text-3xl md:text-4xl lg:whitespace-nowrap lg:text-[1.75rem] xl:text-[2rem]">
              Bringing Traditional Andhra Flavors To Every Table
            </h1>
          </div>

          <div className="relative mt-10 overflow-hidden rounded-[3rem] shadow-2xl">
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
          </div>
        </div>
      </section>

      <section className="bg-[#FFF8EE] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <div className="grid items-center gap-16 lg:grid-cols-2">

            <div>
              <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
                Our Story
              </p>

              <h2 className="font-serif text-4xl font-bold leading-tight text-[#6B0F0F] md:text-5xl">
                Started From A Small Village Kitchen
              </h2>

              <p className="mt-6 text-lg leading-8 text-[#3A1E12]/75">
                Our journey began with a passion for preserving authentic Andhra
                village recipes. What started as a small family kitchen has grown
                into a destination where guests experience traditional food,
                hospitality, and culture.
              </p>

              <p className="mt-5 text-lg leading-8 text-[#3A1E12]/75">
                Every meal reflects generations of culinary traditions, prepared
                using fresh ingredients and served with genuine village warmth.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="rounded-[2rem] bg-white p-8 shadow-lg">
                <h3 className="font-serif text-4xl font-bold text-[#6B0F0F]">
                  25+
                </h3>
                <p className="mt-2 text-gray-600">
                  Years Of Heritage
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-lg">
                <h3 className="font-serif text-4xl font-bold text-[#6B0F0F]">
                  100+
                </h3>
                <p className="mt-2 text-gray-600">
                  Traditional Recipes
                </p>
              </div>

              <div className="rounded-[2rem] bg-white p-8 shadow-lg">
                <h3 className="font-serif text-4xl font-bold text-[#6B0F0F]">
                  5000+
                </h3>
                <p className="mt-2 text-gray-600">
                  Happy Guests
                </p>
              </div>

              <div className="rounded-[2rem] bg-[#6B0F0F] p-8 shadow-lg">
                <h3 className="font-serif text-4xl font-bold text-[#D4A017]">
                  100%
                </h3>
                <p className="mt-2 text-white">
                  Fresh Ingredients
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="bg-[#F8F1E7] py-24">
        <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Village Experience
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        More Than Food, It's A Village Experience
      </h2>
    </div>

    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

      <div className="rounded-[2rem] bg-white p-8 shadow-lg">
        <div className="mb-5 text-5xl">🌾</div>

        <h3 className="text-xl font-bold text-[#6B0F0F]">
          Rural Atmosphere
        </h3>

        <p className="mt-4 text-gray-600">
          Experience the peaceful charm of traditional village life.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-lg">
        <div className="mb-5 text-5xl">🍃</div>

        <h3 className="text-xl font-bold text-[#6B0F0F]">
          Banana Leaf Dining
        </h3>

        <p className="mt-4 text-gray-600">
          Enjoy authentic meals served on fresh banana leaves.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-lg">
        <div className="mb-5 text-5xl">🔥</div>

        <h3 className="text-xl font-bold text-[#6B0F0F]">
          Firewood Cooking
        </h3>

        <p className="mt-4 text-gray-600">
          Traditional cooking methods that preserve authentic flavors.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-8 shadow-lg">
        <div className="mb-5 text-5xl">❤️</div>

        <h3 className="text-xl font-bold text-[#6B0F0F]">
          Homely Hospitality
        </h3>

        <p className="mt-4 text-gray-600">
          Every guest is welcomed like family with genuine care.
        </p>
      </div>

    </div>

    </div>
  </section>

  <section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <div className="grid items-center gap-16 lg:grid-cols-2">

      {/* Image */}
      <div className="relative">
        <img
          src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=1200&q=80"
          alt="Fresh Ingredients"
          className="h-[550px] w-full rounded-[2.5rem] object-cover shadow-2xl"
        />

        <div className="absolute bottom-6 left-6 rounded-3xl bg-[#6B0F0F] p-6 text-white shadow-xl">
          <h3 className="font-serif text-3xl font-bold text-[#D4A017]">
            Farm Fresh
          </h3>

          <p className="mt-1 text-sm">
            Directly sourced from local farmers
          </p>
        </div>
      </div>

      {/* Content */}
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
          Fresh Ingredients
        </p>

        <h2 className="font-serif text-4xl font-bold leading-tight text-[#6B0F0F] md:text-5xl">
          Fresh From Farms To Your Plate
        </h2>

        <p className="mt-6 text-lg leading-8 text-[#3A1E12]/75">
          We believe great food starts with great ingredients. That's why
          we work closely with local farmers to bring fresh vegetables,
          spices, grains, and dairy products directly to our kitchen.
        </p>

        <div className="mt-8 space-y-5">

          <div className="flex items-start gap-4">
            <span className="text-2xl">🌾</span>
            <div>
              <h4 className="font-bold text-[#6B0F0F]">
                Locally Sourced
              </h4>
              <p className="text-gray-600">
                Supporting local farmers and village communities.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl">🍃</span>
            <div>
              <h4 className="font-bold text-[#6B0F0F]">
                Naturally Fresh
              </h4>
              <p className="text-gray-600">
                Fresh ingredients delivered daily to our kitchen.
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4">
            <span className="text-2xl">🥘</span>
            <div>
              <h4 className="font-bold text-[#6B0F0F]">
                Authentic Taste
              </h4>
              <p className="text-gray-600">
                Traditional recipes made with quality ingredients.
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
</section>

<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Why Choose Us
      </p>

      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        What Makes Us Special
      </h2>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      <div className="rounded-[2rem] bg-white p-10 shadow-xl">
        <div className="mb-6 text-5xl">👨‍🍳</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Traditional Recipes
        </h3>

        <p className="leading-7 text-gray-600">
          Recipes passed down through generations preserving authentic
          Andhra village flavors.
        </p>
      </div>

      <div className="rounded-[2rem] bg-[#6B0F0F] p-10 text-white shadow-xl">
        <div className="mb-6 text-5xl">🏡</div>

        <h3 className="mb-4 text-2xl font-bold">
          Village Hospitality
        </h3>

        <p className="leading-7 text-white/80">
          Warm service and welcoming atmosphere that makes every guest
          feel at home.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-10 shadow-xl">
        <div className="mb-6 text-5xl">🌿</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Fresh Ingredients
        </h3>

        <p className="leading-7 text-gray-600">
          Carefully selected ingredients sourced from trusted local farms.
        </p>
      </div>

    </div>

    <div className="mt-10 grid gap-8 lg:grid-cols-3">

      <div className="rounded-[2rem] bg-white p-10 shadow-xl">
        <div className="mb-6 text-5xl">🍃</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Banana Leaf Dining
        </h3>

        <p className="leading-7 text-gray-600">
          Traditional dining experience served the authentic way.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-10 shadow-xl">
        <div className="mb-6 text-5xl">🔥</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Firewood Cooking
        </h3>

        <p className="leading-7 text-gray-600">
          Slow-cooked dishes that retain natural aroma and taste.
        </p>
      </div>

      <div className="rounded-[2rem] bg-white p-10 shadow-xl">
        <div className="mb-6 text-5xl">⭐</div>

        <h3 className="mb-4 text-2xl font-bold text-[#6B0F0F]">
          Trusted By Families
        </h3>

        <p className="leading-7 text-gray-600">
          A preferred destination for family dining and celebrations.
        </p>
      </div>

    </div>

  </div>
</section>


<section className="relative overflow-hidden bg-[#3A1E12] py-24">
  <div className="mx-auto max-w-7xl px-6">

    <div className="mb-16 text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Our Values
      </p>

      <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
        Hospitality Rooted In Tradition
      </h2>
    </div>

    <div className="grid gap-8 lg:grid-cols-3">

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
        <div className="mb-6 text-5xl">🤝</div>

        <h3 className="mb-4 text-2xl font-bold text-[#D4A017]">
          Respect
        </h3>

        <p className="leading-7 text-gray-300">
          Every guest is treated with warmth, kindness, and genuine respect.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
        <div className="mb-6 text-5xl">❤️</div>

        <h3 className="mb-4 text-2xl font-bold text-[#D4A017]">
          Authenticity
        </h3>

        <p className="leading-7 text-gray-300">
          We stay true to traditional Andhra recipes and village cooking methods.
        </p>
      </div>

      <div className="rounded-[2rem] border border-white/10 bg-white/5 p-10 backdrop-blur-sm">
        <div className="mb-6 text-5xl">🌾</div>

        <h3 className="mb-4 text-2xl font-bold text-[#D4A017]">
          Community
        </h3>

        <p className="leading-7 text-gray-300">
          Supporting local farmers, producers, and rural communities.
        </p>
      </div>

    </div>

    <div className="mt-16 rounded-[2.5rem] border border-[#D4A017]/20 bg-[#6B0F0F] p-10 text-center">

      <h3 className="font-serif text-3xl font-bold text-white md:text-4xl">
        Serving Memories Since 1998
      </h3>

      <p className="mx-auto mt-5 max-w-3xl text-lg leading-8 text-white/80">
        More than a restaurant, we are a place where families gather,
        traditions are celebrated, and every meal feels like home.
      </p>

    </div>

  </div>
</section>

    </>
    
  );
};

export default AboutHero;
