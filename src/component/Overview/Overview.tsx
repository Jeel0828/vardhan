"use client";

import { motion } from "framer-motion";
import overviewImg from "../../assest/about.webp";

const Overview = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="text-4xl font-bold text-[#6b5b1a] mb-4">Overview</h2>

          <p className="text-lg font-medium text-[#6b5b1a] mb-6">
            Live Where Comfort Meets Elegance
          </p>

          <p className="text-gray-700 leading-relaxed text-lg mb-8">
            Welcome to Vardhan Bliss, a boutique residential address in the
            heart of Mulund West. Designed for modern families, these spacious
            2, 2.5, and 3 BHK homes offer breathtaking skyline views and access
            to over 26 lifestyle amenities. Experience peaceful living with easy
            access to schools, shopping, and highways – everything you need,
            right where you want it.
          </p>

          <button className="bg-[#c7d35b] cursor-pointer hover:bg-[#b6c24f] text-white text-lg font-semibold px-8 py-3 rounded-lg transition">
            Come Home to Comfort | Come Home to Bliss
          </button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="w-full rounded-lg overflow-hidden shadow-lg"
        >
          <img
            src={overviewImg.src}
            alt="Vardhan Group"
            className="w-full h-full object-cover hover:scale-105 transition duration-500"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Overview;
