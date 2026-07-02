import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import swiggyAwardImg from "../assets/swiggy-real-award.png";
import zomatoAwardImg from "../assets/zomato-real-award.jpg";
import govtAwardImg from "../assets/govt-award.png";
import thumsupChickenImg from "../assets/thumsup chicken.png";
import chickenMixedBiryaniImg from "../assets/chicken mixed biryani.png";
import chickenBonelessImg from "../assets/boneless 1.jpg";
import homeHeroImg from "../assets/hero.png";

// ─── Shared animation config ────────────────────────────────────────────────
const vp = { once: true, amount: 0.18 };

const fadeUp = {
  hidden: { opacity: 0, y: 48 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] } },
};
const fadeLeft = {
  hidden: { opacity: 0, x: -52 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const fadeRight = {
  hidden: { opacity: 0, x: 52 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
};
const scaleIn = {
  hidden: { opacity: 0, scale: 0.88 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
};
const popIn = {
  hidden: { opacity: 0, scale: 0.7 },
  visible: { opacity: 1, scale: 1, transition: { type: "spring", stiffness: 320, damping: 22 } },
};
const stagger = (delay = 0.12) => ({
  hidden: {},
  visible: { transition: { staggerChildren: delay } },
});
const cardVariant = {
  hidden: { opacity: 0, y: 38 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1] } },
};

// ─── Customer Reviews Data ──────────────────────────────────────────────────
const customerReviews = [
  {
    name: "Ravi Kumar",
    platform: "Swiggy",
    platformColor: "bg-[#FC8019] text-white",
    rating: 5,
    dish: "Thumsup Chicken",
    review: "Absolutely mind-blowing! The Thumsup Chicken is unlike anything I've ever had — the glaze is perfectly balanced between sweet and spicy. Will definitely order again!",
    date: "June 2025",
  },
  {
    name: "Priya Lakshmi",
    platform: "Zomato",
    platformColor: "bg-[#E23744] text-white",
    rating: 4,
    dish: "Chicken Mixed Biryani",
    review: "One of the best biryanis in Kakinada. The rice was perfectly cooked with a beautiful aroma. Delivery was also super fast. Highly recommended for biryani lovers!",
    date: "May 2025",
  },
  {
    name: "Suresh Reddy",
    platform: "Swiggy",
    platformColor: "bg-[#FC8019] text-white",
    rating: 5,
    dish: "Chicken Boneless",
    review: "The boneless chicken was absolutely crispy outside and juicy inside. The marinade has that authentic village-style spice that you can't find anywhere else!",
    date: "June 2025",
  },
  {
    name: "Anitha Devi",
    platform: "Zomato",
    platformColor: "bg-[#E23744] text-white",
    rating: 4,
    dish: "Hongkong Chicken",
    review: "Great flavour, arrived hot and fresh. The Hongkong Chicken was tender with that glossy sauce that pairs wonderfully with fried rice. Good value for money!",
    date: "April 2025",
  },
  {
    name: "Ramesh Babu",
    platform: "Google",
    platformColor: "bg-white border border-gray-200 text-gray-700 shadow-sm",
    logo: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 mr-1.5 inline-block">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    rating: 5,
    dish: "Food Park Spl Biryani",
    review: "Excellent ambiance and authentic taste! The Food Park Spl Biryani was loaded with flavors. It feels great to have a true Andhra village dining experience right here in Kakinada.",
    date: "July 2025",
  },
  {
    name: "Mohammed Irfan",
    platform: "Swiggy",
    platformColor: "bg-[#FC8019] text-white",
    rating: 5,
    dish: "Special Chicken Fried Rice",
    review: "The fried rice is packed with flavour and generous with the chicken. Every bite was delicious. Food Park is easily my go-to place for quick cravings!",
    date: "May 2025",
  },
  {
    name: "Sowmya Reddy",
    platform: "Google",
    platformColor: "bg-white border border-gray-200 text-gray-700 shadow-sm",
    logo: (
      <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 mr-1.5 inline-block">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
    ),
    rating: 4,
    dish: "Mutton Biryani",
    review: "The mutton pieces were incredibly tender and the masala was perfect. It gets crowded on weekends, but the food is absolutely worth the wait.",
    date: "August 2025",
  },
  {
    name: "Kavitha Rao",
    platform: "Zomato",
    platformColor: "bg-[#E23744] text-white",
    rating: 5,
    dish: "Mixed Veg Biryani",
    review: "I'm vegetarian and was so happy to find a biryani this flavourful! The paneer was soft, vegetables fresh, and the saffron rice was fragrant. Loved every bite!",
    date: "June 2025",
  },
];

const Home = () => {
  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      <section className="relative min-h-screen overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <img
            src={homeHeroImg}
            alt="Food Park Hero"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/55"></div>
        </motion.div>

        <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl items-center px-6 pt-32 pb-16">
          <motion.div
            className="max-w-3xl -mt-4"
            variants={stagger(0.14)}
            initial="hidden"
            animate="visible"
          >
            <motion.div
              variants={popIn}
              className="mb-6 inline-flex rounded-full border border-[#D4A017]/50 bg-white/10 px-5 py-2 backdrop-blur-md"
            >
              <span className="text-sm font-medium tracking-wider text-[#F8F1E7]">
                AUTHENTIC VILLAGE DINING EXPERIENCE
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="font-serif text-5xl font-bold leading-tight text-white md:text-7xl"
            >
              Taste The
              <span className="block text-[#D4A017]">
                Tradition Of Andhra
              </span>
            </motion.h1>

            <motion.div variants={fadeUp} className="mt-10">
              {/* Ratings Box */}
              <div className="grid grid-cols-1 gap-6 sm:inline-flex sm:flex-row sm:flex-wrap items-stretch justify-start rounded-[1.25rem] border border-[#D4A017]/30 bg-[#111111]/85 p-5 px-7 shadow-2xl backdrop-blur-md w-full sm:w-auto">
                
                {/* Google */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <svg viewBox="0 0 24 24" className="h-5 w-5">
                      <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
                      <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
                      <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
                      <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
                    </svg>
                    <span className="font-semibold text-white">Google</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">4.3</span>
                    <span className="text-[#D4A017] text-[15px] tracking-[2px]">★★★★☆</span>
                  </div>
                  <p className="mt-0.5 text-[13px] text-gray-400">2,450+ reviews</p>
                </div>

                <div className="h-[1px] w-full bg-white/10 sm:h-16 sm:w-px mx-0 sm:mx-2"></div>

                {/* Swiggy */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#FC8019] text-[11px] font-bold text-white shadow-sm">S</div>
                    <span className="font-semibold text-white">Swiggy</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">4.2</span>
                    <span className="text-[#D4A017] text-[15px] tracking-[2px]">★★★★☆</span>
                  </div>
                  <p className="mt-0.5 text-[13px] text-gray-400">73K+ ratings</p>
                </div>

                <div className="h-[1px] w-full bg-white/10 sm:h-16 sm:w-px mx-0 sm:mx-2"></div>

                {/* Zomato */}
                <div className="flex flex-col">
                  <div className="flex items-center gap-2">
                    <div className="flex h-5 w-5 items-center justify-center rounded-md bg-[#E23744] text-[10px] font-bold italic text-white shadow-sm">Z</div>
                    <span className="font-semibold text-white">Zomato</span>
                  </div>
                  <div className="mt-2 flex items-center gap-2">
                    <span className="text-2xl font-bold text-white">3.7</span>
                    <span className="text-[#D4A017] text-[15px] tracking-[2px]">★★★★☆</span>
                  </div>
                  <p className="mt-0.5 text-[13px] text-gray-400">97.7K+ ratings</p>
                </div>

              </div>

              {/* Action Buttons */}
              <motion.div variants={stagger(0.1)} className="mt-6 flex flex-col sm:flex-row sm:flex-wrap gap-4 w-full">
                <motion.a
                  variants={cardVariant}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://www.swiggy.com/city/kakinada/food-park-family-restaurant-kakinada-rest103033"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#FC8019] px-8 py-3.5 font-semibold text-white shadow-[0_8px_20px_rgba(252,128,25,0.3)] transition hover:bg-[#e66f0d] w-full sm:w-auto text-center"
                >
                  Order on Swiggy
                </motion.a>

                <motion.a
                  variants={cardVariant}
                  whileHover={{ scale: 1.06 }}
                  whileTap={{ scale: 0.97 }}
                  href="https://www.zomato.com/kakinada/food-park-family-restaurant-1-kakinada-locality/order"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#E23744] px-8 py-3.5 font-semibold text-white shadow-[0_8px_20px_rgba(226,55,68,0.3)] transition hover:bg-[#c92f3b] w-full sm:w-auto text-center"
                >
                  Order on Zomato
                </motion.a>

                <motion.div variants={cardVariant} whileHover={{ scale: 1.06 }} whileTap={{ scale: 0.97 }} className="w-full sm:w-auto">
                  <Link 
                    to="/menu" 
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-[#111111]/70 px-8 py-3.5 font-semibold text-white backdrop-blur-md transition hover:bg-white/10 w-full text-center"
                  >
                    Explore Menu
                  </Link>
                </motion.div>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </section>

    <section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">
    
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="text-center"
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Our Speciality
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Village Special Highlights
      </motion.h2>
    </motion.div>

    <motion.div
      variants={stagger(0.11)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-4"
    >
      {[
        { icon: "🔥", title: "Firewood Cooking", desc: "Traditional recipes cooked using authentic firewood techniques." },
        { icon: "🌾", title: "Farm Fresh Ingredients", desc: "Vegetables and ingredients sourced directly from local farms." },
        { icon: "🍃", title: "Banana Leaf Serving", desc: "Experience traditional meals served on fresh banana leaves." },
        { icon: "🏡", title: "Rural Ambience", desc: "Warm hospitality with a peaceful village-inspired atmosphere." },
      ].map((item) => (
        <motion.div
          key={item.title}
          variants={cardVariant}
          whileHover={{ y: -12, boxShadow: "0 20px 40px rgba(0,0,0,0.12)" }}
          className="group rounded-3xl bg-white p-8 shadow-lg transition-shadow duration-300"
        >
          <motion.div
            whileHover={{ rotate: [0, -10, 10, 0], scale: 1.15 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-5xl inline-block"
          >
            {item.icon}
          </motion.div>
          <h3 className="mb-3 text-xl font-bold text-[#6B0F0F]">{item.title}</h3>
          <p className="text-gray-600">{item.desc}</p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

<section className="bg-gradient-to-br from-[#3A1E12] to-[#200D06] py-24 text-white">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      variants={stagger(0.12)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="mb-14 flex flex-col justify-between gap-6 md:flex-row md:items-end"
    >
      <div>
        <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
          Customer Favorites
        </motion.p>

        <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-white md:text-5xl">
          Signature Featured Dishes
        </motion.h2>
      </div>

      <motion.div variants={fadeRight} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.97 }}>
        <Link to="/menu" className="w-fit rounded-full border border-[#D4A017] px-7 py-3 font-semibold text-[#D4A017] transition hover:bg-[#D4A017] hover:text-black">
          View Full Menu
        </Link>
      </motion.div>
    </motion.div>

    <motion.div
      variants={stagger(0.15)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="grid gap-8 md:grid-cols-3"
    >
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
        <motion.div
          key={index}
          variants={cardVariant}
          whileHover={{ y: -12, boxShadow: "0 24px 48px rgba(212,160,23,0.18)" }}
          className="group overflow-hidden rounded-[2rem] border border-white/10 bg-[#3A1E12]/40 shadow-2xl"
        >
          <div className="relative h-72 overflow-hidden">
            <motion.img
              src={dish.img}
              alt={dish.name}
              className="h-full w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.6 }}
            />
            <motion.div
              initial={{ opacity: 0, x: -16 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.1 }}
              viewport={vp}
              className="absolute top-4 left-4 rounded-full bg-[#D4A017] px-4 py-1 text-xs font-semibold text-[#3A1E12] shadow-md"
            >
              {dish.badge}
            </motion.div>
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

            <Link to="/menu" className="mt-6 inline-flex items-center gap-2 font-semibold text-[#D4A017] hover:underline">
              Explore Dish <span>→</span>
            </Link>
          </div>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto grid max-w-7xl items-center gap-14 px-6 lg:grid-cols-2">
    <motion.div
      variants={fadeLeft}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="relative"
    >
      <img
        src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=900&q=80"
        alt="Village hotel ambience"
        className="h-[520px] w-full rounded-[2.5rem] object-cover shadow-2xl"
      />

      <motion.div
        initial={{ opacity: 0, scale: 0.7, y: 20 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 260, damping: 20 }}
        viewport={vp}
        className="absolute -bottom-8 right-8 rounded-3xl bg-[#6B0F0F] p-6 text-white shadow-xl"
      >
        <h3 className="font-serif text-4xl font-bold">18+</h3>
        <p className="text-sm font-medium">Years of Taste</p>
      </motion.div>
    </motion.div>

    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        About Our Hotel
      </motion.p>

      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold leading-tight text-[#6B0F0F] md:text-5xl">
        Bringing Village Hospitality To Every Plate
      </motion.h2>

      <motion.p variants={fadeUp} className="mt-6 text-lg leading-8 text-[#3A1E12]/75">
        Our hotel is inspired by rural Andhra homes where food is cooked with
        patience, served with love, and enjoyed together. Every dish carries the
        warmth of tradition, local ingredients, and homely taste.
      </motion.p>

      <motion.div variants={stagger(0.12)} className="mt-8 grid gap-5 sm:grid-cols-2">
        <motion.div variants={cardVariant} whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }} className="rounded-2xl bg-white p-5 shadow-md">
          <h4 className="font-bold text-[#6B0F0F]">Traditional Taste</h4>
          <p className="mt-2 text-sm text-gray-600">
            Recipes inspired by village kitchens.
          </p>
        </motion.div>

        <motion.div variants={cardVariant} whileHover={{ y: -4, boxShadow: "0 12px 24px rgba(0,0,0,0.1)" }} className="rounded-2xl bg-white p-5 shadow-md">
          <h4 className="font-bold text-[#6B0F0F]">Homely Service</h4>
          <p className="mt-2 text-sm text-gray-600">
            Warm serving with authentic care.
          </p>
        </motion.div>
      </motion.div>

      <motion.div variants={fadeUp} whileHover={{ scale: 1.04 }} whileTap={{ scale: 0.97 }}>
        <Link to="/about" className="mt-9 inline-block rounded-full bg-[#6B0F0F] px-8 py-4 font-semibold text-white transition hover:bg-[#3A1E12]">
          Know More About Us
        </Link>
      </motion.div>
    </motion.div>
  </div>
</section>

<section className="bg-gradient-to-b from-[#200D06] to-[#3A1E12] py-28 text-white relative overflow-hidden">
  <div className="absolute top-0 left-1/2 w-full -translate-x-1/2 h-[1px] bg-gradient-to-r from-transparent via-[#D4A017]/30 to-transparent"></div>
  
  <div className="mx-auto max-w-7xl px-6 relative z-10">
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="text-center mb-16"
    >
      <motion.div variants={popIn} className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#D4A017]/30 bg-[#D4A017]/10 px-4 py-1.5 backdrop-blur-sm">
        <span className="text-xl">🏆</span>
        <span className="text-xs font-bold uppercase tracking-[3px] text-[#D4A017]">
          Recognized Excellence
        </span>
      </motion.div>
      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-white md:text-5xl">
        Featured Awards & Certifications
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-gray-300 text-lg">
        Our uncompromising commitment to preserving authentic Andhra village recipes has earned us the highest honors from top food platforms and the government.
      </motion.p>
    </motion.div>

    <motion.div
      variants={stagger(0.18)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="grid gap-8 md:grid-cols-3"
    >
      {[
        {
          title: "Restaurant of the Year",
          org: "Swiggy Awards 2025",
          desc: "Recognized as the top-rated traditional restaurant in Kakinada for exceptional food quality and delivery standards.",
          img: swiggyAwardImg,
          themeColor: "#FC8019",
          badgeText: "Swiggy Certified",
          isCertificate: true,
        },
        {
          title: "Best Family Restaurant",
          org: "Zomato Restaurant Awards 2024",
          desc: "Awarded Best Family Restaurant in Kakinada by Zomato. Signed by Deepinder Goyal, Founder of Zomato.",
          img: zomatoAwardImg,
          themeColor: "#E23744",
          badgeText: "Zomato Choice",
          isCertificate: true,
        },
        {
          title: "Heritage Cuisine",
          org: "Govt. Tourism Board 2025",
          desc: "Officially certified by the government for preserving age-old regional Andhra recipes and culinary traditions.",
          img: govtAwardImg,
          themeColor: "#34A853",
          badgeText: "Govt. Certified",
        },
      ].map((award, index) => (
        <motion.div
          key={index}
          variants={cardVariant}
          whileHover={{ y: -12, boxShadow: `0 24px 48px -8px ${award.themeColor}60` }}
          className="group relative h-[420px] w-full overflow-hidden rounded-[2.5rem] shadow-2xl"
          style={{ boxShadow: `0 10px 30px -10px ${award.themeColor}50` }}
        >
          {award.isCertificate ? (
            <>
              <div className="absolute inset-0 bg-gradient-to-br from-[#fdf6ec] to-[#f5e9d5]"></div>
              <div className="absolute inset-3 rounded-[2rem] border-2 pointer-events-none" style={{ borderColor: `${award.themeColor}40` }}></div>
              <img
                src={award.img}
                alt={award.title}
                className="absolute inset-0 h-full w-full object-contain p-4 transition duration-700 group-hover:scale-105 drop-shadow-2xl"
              />
              <div className="absolute top-5 left-5">
                <div
                  className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 shadow-lg"
                  style={{ backgroundColor: award.themeColor }}
                >
                  <span className="h-2 w-2 rounded-full bg-white"></span>
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">{award.badgeText}</span>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 px-6 py-4" style={{ background: `linear-gradient(to top, ${award.themeColor}ee, ${award.themeColor}88, transparent)` }}>
                <p className="text-[10px] font-bold uppercase tracking-[3px] text-white/80">{award.org}</p>
                <h3 className="font-serif text-xl font-bold text-white leading-tight">{award.title}</h3>
              </div>
            </>
          ) : (
            <>
              <img
                src={award.img}
                alt={award.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/10 opacity-90 transition duration-500 group-hover:opacity-100"></div>
              <div className="absolute inset-0 flex flex-col justify-end p-8 transition-transform duration-500 group-hover:-translate-y-2">
                <div
                  className="mb-auto inline-flex w-fit items-center gap-2 rounded-full px-4 py-1.5 backdrop-blur-md shadow-lg"
                  style={{ backgroundColor: `${award.themeColor}30`, border: `1px solid ${award.themeColor}60` }}
                >
                  <span className="h-2 w-2 rounded-full shadow-[0_0_8px_currentColor]" style={{ backgroundColor: award.themeColor, color: award.themeColor }}></span>
                  <span className="text-[10px] font-bold tracking-widest text-white uppercase">{award.badgeText}</span>
                </div>
                <p className="mb-2 text-xs font-bold uppercase tracking-[3px]" style={{ color: award.themeColor }}>{award.org}</p>
                <h3 className="font-serif text-3xl font-bold text-white mb-3 leading-tight" style={{ textShadow: "0 2px 10px rgba(0,0,0,0.5)" }}>{award.title}</h3>
                <p className="text-sm leading-relaxed text-gray-300">{award.desc}</p>
              </div>
            </>
          )}
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

<section className="bg-[#F8F1E7] py-24">
  <div className="mx-auto max-w-7xl px-6">

    {/* Section Header */}
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="text-center mb-16"
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        What Customers Say
      </motion.p>
      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Reviews &amp; Ratings
      </motion.h2>
      <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-gray-600">
        Loved by thousands of food lovers across Kakinada and beyond — rated highly on Swiggy and Zomato.
      </motion.p>
    </motion.div>

    {/* Platform Rating Summary */}
    <div className="grid gap-6 md:grid-cols-2 mb-16">

      {/* Swiggy Rating Card */}
      <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#FC8019] to-[#D66811] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(252,128,25,0.4)]">
        {/* Decorative Background Elements */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-150"></div>
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-black/10 blur-xl"></div>
        
        <div className="relative z-10 flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            {/* Icon Block */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 shadow-inner backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-3xl drop-shadow-md">🛵</span>
            </div>
            
            {/* Stats Block */}
            <div>
              <h4 className="text-xs font-bold tracking-[2px] text-orange-100 uppercase">Swiggy</h4>
              <div className="mt-0.5 flex items-baseline gap-2">
                <span className="font-serif text-4xl font-extrabold text-white drop-shadow-sm">4.2</span>
                <span className="text-orange-200 text-xs font-bold tracking-wider">/ 5</span>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <div className="flex gap-0.5 text-yellow-300 text-[11px] drop-shadow-sm">★★★★☆</div>
                <div className="rounded-md bg-white/20 px-2 py-0.5 text-[10px] font-bold text-white shadow-sm backdrop-blur-md border border-white/10">73K+ Ratings</div>
              </div>
            </div>
          </div>
          
          <div className="mt-5 sm:mt-0 flex w-full sm:w-auto">
            <a
              href="https://www.swiggy.com/city/kakinada/food-park-family-restaurant-kakinada-rest103033"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#FC8019] hover:shadow-lg w-full sm:w-auto"
            >
              View on Swiggy <span>↗</span>
            </a>
          </div>
        </div>
      </div>

      {/* Zomato Rating Card */}
      <div className="group relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-[#E23744] to-[#B91C1C] p-6 shadow-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(226,55,68,0.4)]">
        {/* Decorative Background Elements */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-transform duration-500 group-hover:scale-150"></div>
        <div className="absolute -bottom-10 -left-10 h-32 w-32 rounded-full bg-black/10 blur-xl"></div>
        
        <div className="relative z-10 flex flex-col justify-between sm:flex-row sm:items-center">
          <div className="flex items-center gap-5">
            {/* Icon Block */}
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-2xl bg-white/20 shadow-inner backdrop-blur-md border border-white/20 transition-transform duration-300 group-hover:scale-105">
              <span className="text-3xl drop-shadow-md">🍽️</span>
            </div>
            
            {/* Stats Block */}
            <div>
              <h4 className="text-xs font-bold tracking-[2px] text-red-100 uppercase">Zomato</h4>
              <div className="mt-1 flex gap-4">
                
                {/* Dining */}
                <div className="flex flex-col justify-center">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-red-200">Dining</p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-serif text-2xl font-bold text-white drop-shadow-sm">4.4</span>
                    <span className="text-red-200 text-[10px] font-bold">/5</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-yellow-300 text-[9px] drop-shadow-sm">★★★★☆</div>
                    <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-white shadow-sm border border-white/10">171</span>
                  </div>
                </div>
                
                {/* Divider */}
                <div className="w-px bg-white/20 my-1"></div>
                
                {/* Delivery */}
                <div className="flex flex-col justify-center">
                  <p className="text-[9px] font-bold uppercase tracking-wider text-red-200">Delivery</p>
                  <div className="flex items-baseline gap-1 mt-0.5">
                    <span className="font-serif text-2xl font-bold text-white drop-shadow-sm">3.7</span>
                    <span className="text-red-200 text-[10px] font-bold">/5</span>
                  </div>
                  <div className="mt-1 flex items-center gap-1.5">
                    <div className="flex gap-0.5 text-yellow-300 text-[9px] drop-shadow-sm">★★★★☆</div>
                    <span className="rounded bg-white/20 px-1.5 py-0.5 text-[9px] font-bold text-white shadow-sm border border-white/10">97.7K</span>
                  </div>
                </div>

              </div>
            </div>
          </div>

          <div className="mt-5 sm:mt-0 flex w-full sm:w-auto">
            <a
              href="https://www.zomato.com/kakinada/food-park-family-restaurant-1-kakinada-locality/order"
              target="_blank"
              rel="noreferrer"
              className="flex items-center justify-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-bold text-white backdrop-blur-md transition-all duration-300 hover:bg-white hover:text-[#E23744] hover:shadow-lg w-full sm:w-auto"
            >
              View on Zomato <span>↗</span>
            </a>
          </div>
        </div>
      </div>
    </div>

    {/* Horizontal Scrolling Reviews Row */}
    <div className="relative w-full overflow-hidden py-4">
      {/* Gradient overlays for smooth fading edges */}
      <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-[#F8F1E7] to-transparent"></div>
      <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-[#F8F1E7] to-transparent"></div>
      
      <div className="flex gap-6 overflow-hidden select-none">
        <div className="flex gap-6 animate-marquee shrink-0">
          {customerReviews.map((review, index) => (
            <div
              key={`rev-1-${index}`}
              className="rounded-[2rem] border border-[#D4A017]/15 bg-white p-7 shadow-lg w-[350px] whitespace-normal flex flex-col justify-between"
            >
              <div>
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
                  <span className={`rounded-full px-3 py-1 flex items-center text-[11px] font-bold ${review.platformColor}`}>
                    {review.logo}
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
            </div>
          ))}
        </div>

        {/* Duplicate track for infinite loop */}
        <div className="flex gap-6 animate-marquee shrink-0" aria-hidden="true">
          {customerReviews.map((review, index) => (
            <div
              key={`rev-2-${index}`}
              className="rounded-[2rem] border border-[#D4A017]/15 bg-white p-7 shadow-lg w-[350px] whitespace-normal flex flex-col justify-between"
            >
              <div>
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
                  <span className={`rounded-full px-3 py-1 flex items-center text-[11px] font-bold ${review.platformColor}`}>
                    {review.logo}
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
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
</section>


<section className="bg-[#FFF8EE] py-24">
  <div className="mx-auto max-w-7xl px-6">
    <motion.div
      variants={stagger(0.1)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="text-center"
    >
      <motion.p variants={fadeUp} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
        Fresh Today
      </motion.p>
      <motion.h2 variants={fadeUp} className="font-serif text-4xl font-bold text-[#6B0F0F] md:text-5xl">
        Daily Specials
      </motion.h2>
    </motion.div>

    <motion.div
      variants={stagger(0.13)}
      initial="hidden"
      whileInView="visible"
      viewport={vp}
      className="mt-16 grid gap-8 lg:grid-cols-3"
    >
      {[
        { title: "Village Meals", price: "₹199" },
        { title: "Natu Kodi Curry", price: "₹299" },
        { title: "Ragi Sangati Combo", price: "₹249" },
      ].map((item, index) => (
        <motion.div
          key={index}
          variants={cardVariant}
          whileHover={{ y: -8, boxShadow: "0 20px 40px rgba(0,0,0,0.1)" }}
          className="rounded-[2rem] border border-[#D4A017]/20 bg-white p-8 shadow-lg"
        >
          <div className="mb-5">
            <span className="rounded-full bg-[#D4A017]/10 px-4 py-2 text-sm font-semibold text-[#6B0F0F]">
              Special
            </span>
          </div>
          <h3 className="font-serif text-3xl font-bold text-[#6B0F0F]">{item.title}</h3>
          <p className="mt-4 text-gray-600">
            Prepared fresh every day using traditional ingredients and authentic village cooking methods.
          </p>
        </motion.div>
      ))}
    </motion.div>
  </div>
</section>

<section className="relative overflow-hidden py-12">
  <div className="absolute inset-0 bg-[#3A1E12]"></div>

  <motion.div
    variants={stagger(0.12)}
    initial="hidden"
    whileInView="visible"
    viewport={vp}
    className="relative z-10 mx-auto max-w-4xl px-6 text-center"
  >
    <motion.span variants={popIn} className="inline-block rounded-full border border-[#D4A017]/40 bg-white/10 px-5 py-2 text-xs font-semibold uppercase tracking-[3px] text-[#D4A017] backdrop-blur-md">
      Traditional Andhra Hospitality
    </motion.span>

    <motion.h2 variants={fadeUp} className="mt-5 font-serif text-3xl font-bold leading-tight text-white md:text-5xl">
      A Meal That Feels Like Home
    </motion.h2>

    <motion.p variants={fadeUp} className="mx-auto mt-4 max-w-2xl text-base leading-7 text-gray-300">
      Enjoy authentic village recipes, fresh ingredients, and warm hospitality.
    </motion.p>

    <motion.div variants={stagger(0.1)} className="mt-6 flex flex-wrap justify-center gap-4">
      <motion.a
        variants={cardVariant}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.96 }}
        href="https://www.swiggy.com/city/kakinada/food-park-family-restaurant-kakinada-rest103033"
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-[#FC8019] px-7 py-3 font-semibold text-white transition"
      >
        Order on Swiggy
      </motion.a>

      <motion.a
        variants={cardVariant}
        whileHover={{ scale: 1.07 }}
        whileTap={{ scale: 0.96 }}
        href="https://www.zomato.com/kakinada/food-park-family-restaurant-1-kakinada-locality/order"
        target="_blank"
        rel="noreferrer"
        className="inline-block rounded-full bg-[#E23744] px-7 py-3 font-semibold text-white transition"
      >
        Order on Zomato
      </motion.a>

      <motion.div variants={cardVariant} whileHover={{ scale: 1.07 }} whileTap={{ scale: 0.96 }} className="inline-block">
        <Link to="/contact" className="inline-block rounded-full border border-white/30 px-7 py-3 font-semibold text-white transition hover:bg-white hover:text-[#3A1E12]">
          Contact Us
        </Link>
      </motion.div>
    </motion.div>
  </motion.div>
</section>


<Footer />
    </main>
  
  );
};

export default Home;
