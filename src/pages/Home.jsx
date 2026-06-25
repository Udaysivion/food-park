import { Link } from "react-router-dom";
import Footer from "../components/Footer";
import thumsupChickenImg from "../assets/thumsup chicken.png";
import chickenMixedBiryaniImg from "../assets/chicken mixed biryani.png";
import chickenBonelessImg from "../assets/boneless 1.jpg";
import homeHeroImg from "../assets/hero.png";

const Home = () => {
  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <section className="relative min-h-screen overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={homeHeroImg}
            alt="Food Park Hero"
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

            <div className="mt-6 flex w-fit flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-white/20 bg-black/25 px-5 py-3 text-white shadow-lg backdrop-blur-md">
              <div
                className="flex gap-1 text-xl text-[#F5B301]"
                aria-label="4.4 out of 5 stars"
              >
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span aria-hidden="true">★</span>
                <span className="opacity-40" aria-hidden="true">★</span>
              </div>
              <div className="h-8 w-px bg-white/25" aria-hidden="true" />
              <div>
                <p className="font-bold">4.4/5 Customer Rating</p>
                <p className="text-xs text-gray-300">
                  Loved by our Kakinada guests
                </p>
              </div>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="https://www.swiggy.com/city/kakinada/food-park-family-restaurant-kakinada-rest103033"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#FC8019] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#e66f0d]"
              >
                Order on Swiggy
              </a>

              <a
                href="https://www.zomato.com/kakinada/food-park-family-restaurant-1-kakinada-locality/order"
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-[#E23744] px-8 py-4 font-semibold text-white shadow-lg transition hover:scale-105 hover:bg-[#c92f3b]"
              >
                Order on Zomato
              </a>

              <Link to="/menu" className="rounded-full border border-[#D4A017] px-8 py-4 font-semibold text-white backdrop-blur-md transition hover:bg-[#D4A017] hover:text-black">
                Explore Menu
              </Link>
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

<section className="bg-gradient-to-br from-[#3A1E12] to-[#200D06] py-24 text-white">
  <div className="mx-auto max-w-7xl px-6">
    <div className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end">
      <div>
        <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
          Customer Favorites
        </p>

        <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
          Signature Featured Dishes
        </h2>
      </div>

      <Link to="/menu" className="w-fit rounded-full border border-[#D4A017] px-7 py-3 font-semibold text-[#D4A017] transition hover:bg-[#D4A017] hover:text-black">
        View Full Menu
      </Link>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          name: "Thumsup Chicken",
          desc: "A unique restaurant specialty: juicy chicken pieces glazed in a rich, spicy Thums Up reduction sauce with green chilies.",
          img: thumsupChickenImg,
          badge: "Chef's Signature",
          price: "₹280",
        },
        {
          name: "Chicken Mixed Biryani",
          desc: "A luxurious blend of fragrant basmati rice, tender chicken, boiled egg, and local hand-ground spices.",
          img: chickenMixedBiryaniImg,
          badge: "Most Popular",
          price: "₹330",
        },
        {
          name: "Chicken Boneless",
          desc: "Bite-sized tender boneless chicken pieces marinated in native spices and fried to a crisp golden finish.",
          img: chickenBonelessImg,
          badge: "Must Try",
          price: "₹260",
        },
      ].map((dish, index) => (
        <div
          key={index}
          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#3A1E12]/40 shadow-2xl transition duration-500 hover:-translate-y-3 hover:border-white/20 hover:shadow-[0_20px_40px_rgba(212,160,23,0.15)]"
        >
          <div className="relative h-72 overflow-hidden">
            <img
              src={dish.img}
              alt={dish.name}
              className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
            />
            <div className="absolute top-4 left-4 rounded-full bg-[#D4A017] px-4 py-1 text-xs font-semibold text-[#3A1E12] shadow-md">
              {dish.badge}
            </div>
            <div className="absolute bottom-4 right-4 rounded-full bg-black/60 px-4 py-1 text-sm font-bold text-[#D4A017] backdrop-blur-sm">
              {dish.price}
            </div>
          </div>

          <div className="p-7">
            <h3 className="font-serif text-2xl font-bold text-[#D4A017] group-hover:text-white transition duration-300">
              {dish.name}
            </h3>

            <p className="mt-3 text-sm leading-7 text-gray-300">
              {dish.desc}
            </p>

            <Link to="/traditional-dishes" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#D4A017] hover:underline">
              Explore Dish <span>→</span>
            </Link>
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

      <Link to="/about" className="mt-9 inline-block rounded-full bg-[#6B0F0F] px-8 py-4 font-semibold text-white transition hover:bg-[#3A1E12]">
        Know More About Us
      </Link>
    </div>
  </div>
</section>

<section className="bg-[#3A1E12] py-24 text-white">
  <div className="mx-auto max-w-7xl px-6">
    <div className="text-center mb-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Recognition
      </p>
      <h2 className="font-serif text-4xl font-bold text-white md:text-5xl">
        Awards & Accolades
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-300">
        Our commitment to preserving traditional tastes and rural cooking techniques has been recognized by industry leaders and food boards.
      </p>
    </div>

    <div className="grid gap-8 md:grid-cols-3">
      {[
        {
          title: "Best Traditional Restaurant",
          org: "National Food Awards 2025",
          desc: "Honored for authentic firewood cooking and preservation of age-old regional Andhra recipes.",
          icon: "🏆",
        },
        {
          title: "Culinary Heritage Award",
          org: "State Tourism Board 2024",
          desc: "Awarded for exceptional representation of Coastal, Rayalaseema, and Telangana culinary histories.",
          icon: "🏅",
        },
        {
          title: "Outstanding Hygiene Standards",
          org: "Food Safety & Quality Council 2025",
          desc: "Recognized for maintaining pristine safety and hygiene standards in a rustic village setting.",
          icon: "⭐",
        },
      ].map((award, index) => (
        <div
          key={index}
          className="group rounded-3xl border border-[#D4A017]/20 bg-white/5 p-8 transition duration-300 hover:bg-white/10 hover:border-[#D4A017]/50"
        >
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4A017]/10 text-4xl group-hover:scale-110 transition duration-300">
            {award.icon}
          </div>
          <h3 className="mt-6 text-xl font-bold text-[#D4A017] group-hover:text-white transition duration-300">
            {award.title}
          </h3>
          <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-gray-400">
            {award.org}
          </p>
          <p className="mt-4 text-sm leading-6 text-gray-300">
            {award.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Section Header */}
    <div className="text-center mb-16">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        What Customers Say
      </p>
      <h2 className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Reviews & Ratings
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-gray-600">
        Loved by thousands of food lovers across Kakinada and beyond — rated highly on Swiggy and Zomato.
      </p>
    </div>

    {/* Platform Rating Summary */}
    <div className="grid gap-6 md:grid-cols-2 mb-16">

      {/* Swiggy Rating Card */}
      <div className="flex items-center gap-6 rounded-3xl bg-gradient-to-r from-[#ff9a2e] to-[#ff6b00] p-8 text-white shadow-xl">
        <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-5xl font-black text-white">
          🛵
        </div>
        <div>
          <p className="text-sm font-semibold uppercase tracking-wider text-orange-100">Swiggy</p>
          <div className="mt-1 flex items-baseline gap-2">
            <span className="font-serif text-5xl font-bold">4.2</span>
            <span className="text-orange-100">/ 5</span>
          </div>
          <div className="mt-1 flex gap-1 text-yellow-300 text-xl">★★★★☆</div>
          <p className="mt-1 text-sm text-orange-100">73K+ Ratings</p>
        </div>
        <div className="ml-auto hidden lg:block">
          <a
            href="https://www.swiggy.com/city/kakinada/food-park-family-restaurant-kakinada-rest103033"
            target="_blank"
            rel="noreferrer"
            className="rounded-full border-2 border-white/50 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#ff6b00]"
          >
            View on Swiggy →
          </a>
        </div>
      </div>

      {/* Zomato Rating Card */}
      <div className="rounded-3xl bg-gradient-to-r from-[#f03b4b] to-[#b91c1c] p-8 text-white shadow-xl">
        <div className="flex items-center gap-6">
          <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-2xl bg-white/20 text-5xl font-black text-white">
            🍽️
          </div>
          <div className="flex-1">
            <p className="text-sm font-semibold uppercase tracking-wider text-red-100">Zomato</p>
            <div className="mt-2 grid grid-cols-2 gap-4">
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xs font-semibold text-red-200 uppercase tracking-wider">Dining</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-3xl font-bold">4.4</span>
                  <span className="text-red-100 text-sm">/ 5</span>
                </div>
                <div className="flex gap-0.5 text-yellow-300 text-sm mt-0.5">★★★★☆</div>
                <p className="text-xs text-red-200 mt-0.5">171 Ratings</p>
              </div>
              <div className="rounded-xl bg-white/10 p-3">
                <p className="text-xs font-semibold text-red-200 uppercase tracking-wider">Delivery</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="font-serif text-3xl font-bold">3.7</span>
                  <span className="text-red-100 text-sm">/ 5</span>
                </div>
                <div className="flex gap-0.5 text-yellow-300 text-sm mt-0.5">★★★★☆</div>
                <p className="text-xs text-red-200 mt-0.5">97.7K Ratings</p>
              </div>
            </div>
          </div>
          <div className="ml-auto hidden lg:block">
            <a
              href="https://www.zomato.com/kakinada/food-park-family-restaurant-1-kakinada-locality/order"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border-2 border-white/50 px-5 py-2 text-sm font-semibold text-white transition hover:bg-white hover:text-[#b91c1c]"
            >
              View on Zomato →
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Customer Review Cards */}
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Ravi Kumar",
          platform: "Swiggy",
          platformColor: "bg-[#FC8019]",
          rating: 5,
          dish: "Thumsup Chicken",
          review: "Absolutely mind-blowing! The Thumsup Chicken is unlike anything I've ever had — the glaze is perfectly balanced between sweet and spicy. Will definitely order again!",
          date: "June 2025",
        },
        {
          name: "Priya Lakshmi",
          platform: "Zomato",
          platformColor: "bg-[#E23744]",
          rating: 4,
          dish: "Chicken Mixed Biryani",
          review: "One of the best biryanis in Kakinada. The rice was perfectly cooked with a beautiful aroma. Delivery was also super fast. Highly recommended for biryani lovers!",
          date: "May 2025",
        },
        {
          name: "Suresh Reddy",
          platform: "Swiggy",
          platformColor: "bg-[#FC8019]",
          rating: 5,
          dish: "Chicken Boneless",
          review: "The boneless chicken was absolutely crispy outside and juicy inside. The marinade has that authentic village-style spice that you can't find anywhere else!",
          date: "June 2025",
        },
        {
          name: "Anitha Devi",
          platform: "Zomato",
          platformColor: "bg-[#E23744]",
          rating: 4,
          dish: "Hongkong Chicken",
          review: "Great flavour, arrived hot and fresh. The Hongkong Chicken was tender with that glossy sauce that pairs wonderfully with fried rice. Good value for money!",
          date: "April 2025",
        },
        {
          name: "Mohammed Irfan",
          platform: "Swiggy",
          platformColor: "bg-[#FC8019]",
          rating: 5,
          dish: "Special Chicken Fried Rice",
          review: "The fried rice is packed with flavour and generous with the chicken. Every bite was delicious. Food Park is easily my go-to place for quick cravings!",
          date: "May 2025",
        },
        {
          name: "Kavitha Rao",
          platform: "Zomato",
          platformColor: "bg-[#E23744]",
          rating: 5,
          dish: "Mixed Veg Biryani",
          review: "I'm vegetarian and was so happy to find a biryani this flavourful! The paneer was soft, vegetables fresh, and the saffron rice was fragrant. Loved every bite!",
          date: "June 2025",
        },
      ].map((review, index) => (
        <div
          key={index}
          className="group rounded-[2rem] border border-[#D4A017]/15 bg-white p-7 shadow-lg transition duration-300 hover:-translate-y-2 hover:shadow-2xl hover:border-[#D4A017]/40"
        >
          {/* Header row */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#6B0F0F] text-lg font-bold text-white">
                {review.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-[#3A1E12]">{review.name}</p>
                <p className="text-xs text-gray-400">{review.date}</p>
              </div>
            </div>
            <span className={`rounded-full px-3 py-1 text-xs font-bold text-white ${review.platformColor}`}>
              {review.platform}
            </span>
          </div>

          {/* Stars */}
          <div className="mt-4 flex gap-0.5 text-[#D4A017] text-lg">
            {Array.from({ length: review.rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
            {Array.from({ length: 5 - review.rating }).map((_, i) => (
              <span key={i} className="text-gray-200">★</span>
            ))}
          </div>

          {/* Dish tag */}
          <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-[#D4A017]">
            {review.dish}
          </p>

          {/* Review text */}
          <p className="mt-2 text-sm leading-7 text-gray-600">
            "{review.review}"
          </p>
        </div>
      ))}
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

    <div className="relative">

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
          <div className="mb-5">
            <span className="rounded-full bg-[#D4A017]/10 px-4 py-2 text-sm font-semibold text-[#6B0F0F]">
              Special
            </span>
          </div>

          <h3 className="font-serif text-3xl font-bold text-[#6B0F0F]">
            {item.title}
          </h3>

          <p className="mt-4 text-gray-600">
            Prepared fresh every day using traditional ingredients and authentic village cooking methods.
          </p>

          
        </div>
      ))}
      </div>
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
      <a
        href="https://www.swiggy.com/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#FC8019] px-7 py-3 font-semibold text-white transition hover:scale-105"
      >
        Order on Swiggy
      </a>

      <a
        href="https://www.zomato.com/"
        target="_blank"
        rel="noreferrer"
        className="rounded-full bg-[#E23744] px-7 py-3 font-semibold text-white transition hover:scale-105"
      >
        Order on Zomato
      </a>

      <Link to="/contact" className="rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#3A1E12]">
        Contact Us
      </Link>
    </div>
  </div>
</section>


<Footer />
    </main>
  
  );
};

export default Home;
