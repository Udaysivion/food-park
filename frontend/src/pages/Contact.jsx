import { useState } from "react";
import { motion } from "framer-motion";
import { viewport, fadeUp, staggerContainer, fadeLeft, fadeRight, cardVariant } from "../hooks/useScrollAnimation";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted successfully!");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <main className="min-h-screen bg-[#F8F1E7]">
      {/* Hero Section */}
      <section className="relative min-h-[620px] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?auto=format&fit=crop&w=1600&q=80"
          alt="Village hotel"
          className="absolute inset-0 h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-[#2A140C]/70"></div>

        <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 pt-24">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
            className="max-w-3xl"
          >
            <motion.p variants={fadeUp} className="mb-4 text-sm font-semibold uppercase tracking-[5px] text-[#D4A017]">
              Contact Us
            </motion.p>

            <motion.h1 variants={fadeUp} className="font-serif text-6xl font-bold leading-tight text-white md:text-8xl">
              Contact Us
            </motion.h1>

            <motion.h2 variants={fadeUp} className="mt-4 text-2xl font-bold text-[#D4A017]">
              We’re here to serve you better
            </motion.h2>

            <motion.p variants={fadeUp} className="mt-5 max-w-xl text-lg leading-8 text-gray-200">
              Have a question, need help with a reservation, or planning a
              special event? Reach out to us anytime.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="-mt-20 relative z-20 px-6">
        <motion.div
          variants={staggerContainer(0.12)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] bg-[#FFF8EE] p-6 shadow-2xl md:grid-cols-2 lg:grid-cols-4"
        >
          {[
            {
              icon: "📍",
              title: "Visit Us",
              text: "Ruchi Lokam Village Hotel, Nizamabad, Telangana",
            },
            {
              icon: "📞",
              title: "Call Us",
              text: "+91 98765 43210",
            },
            {
              icon: "✉️",
              title: "Email Us",
              text: "info@ruchilokam.com",
            },
            {
              icon: "🕒",
              title: "Opening Hours",
              text: "Mon - Fri: 8 AM - 10 PM",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              variants={cardVariant}
              className="rounded-[1.5rem] bg-white p-8 text-center shadow-lg transition-transform hover:-translate-y-2"
            >
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8F1E7] text-3xl">
                {item.icon}
              </div>

              <h3 className="font-serif text-2xl font-bold text-[#3A1E12]">
                {item.title}
              </h3>

              <p className="mt-3 text-sm leading-7 text-gray-600">
                {item.text}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* Form + Image */}
      <section className="bg-[#F8F1E7] py-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:grid-cols-2">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="p-8 md:p-12"
          >
            <motion.p variants={fadeRight} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Send Us A Message
            </motion.p>

            <motion.h2 variants={fadeRight} className="font-serif text-4xl font-bold text-[#3A1E12]">
              We’d Love To Hear From You
            </motion.h2>

            <motion.form variants={fadeRight} onSubmit={handleSubmit} className="mt-8 space-y-5">
              <div className="grid gap-5 md:grid-cols-2">
                <input
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  className="rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4A017]"
                  required
                />

                <input
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Phone Number"
                  className="rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4A017]"
                  required
                />
              </div>

              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4A017]"
                required
              />

              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your Message"
                rows="5"
                className="w-full rounded-xl border border-gray-300 px-5 py-4 outline-none focus:border-[#D4A017]"
                required
              />

              <button className="rounded-full bg-[#3A1E12] px-8 py-4 font-semibold text-white transition hover:bg-[#6B0F0F] hover:shadow-lg hover:-translate-y-1">
                Send Message
              </button>
            </motion.form>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeLeft}
            className="min-h-[520px]"
          >
            <img
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=80"
              alt="Village hotel contact"
              className="h-full w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-[#FFF8EE] pb-20">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] bg-white shadow-2xl lg:grid-cols-[35%_65%]">
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="p-8 md:p-12"
          >
            <motion.p variants={fadeRight} className="mb-3 text-sm font-semibold uppercase tracking-[4px] text-[#D4A017]">
              Find Us Here
            </motion.p>

            <motion.h2 variants={fadeRight} className="font-serif text-4xl font-bold text-[#3A1E12]">
              Our Location
            </motion.h2>

            <motion.p variants={fadeRight} className="mt-5 leading-8 text-gray-600">
              We are located in the heart of Nizamabad. Visit us and enjoy the
              authentic village dining experience.
            </motion.p>

            <motion.a
              variants={fadeRight}
              href="https://www.google.com/maps/dir/?api=1&destination=Nizamabad%2C%20Telangana"
              target="_blank"
              rel="noreferrer"
              className="mt-8 inline-block rounded-full bg-[#3A1E12] px-7 py-3 font-semibold text-white transition hover:bg-[#6B0F0F] hover:shadow-lg hover:-translate-y-1"
            >
              Get Directions
            </motion.a>
          </motion.div>

          <motion.iframe
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={viewport}
            title="Ruchi Lokam Location"
            src="https://www.google.com/maps?q=Nizamabad%20Telangana&output=embed"
            className="h-[420px] w-full border-0 lg:h-full"
            loading="lazy"
          ></motion.iframe>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Contact;
