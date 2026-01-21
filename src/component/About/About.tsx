"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  Users,
  Home,
  Building2,
  Landmark,
  DollarSign,
  Train,
} from "lucide-react";

const stats = [
  {
    icon: <Landmark size={32} />,
    value: "70+",
    label: "Years of Excellence in Real Estate",
  },
  {
    icon: <Home size={32} />,
    value: "5000+",
    label: "Happy Families & Counting",
  },
  {
    icon: <Building2 size={32} />,
    value: "20+",
    label: "Million Sq. Ft. Successfully Delivered",
  },
  {
    icon: <Users size={32} />,
    value: "50+",
    label: "Million Sq. Ft. Under Development",
  },
  {
    icon: <DollarSign size={32} />,
    value: "$10 Million+",
    label: "in Institutional Funding",
  },
  {
    icon: <Train size={32} />,
    value: "100%",
    label: "On-Time Delivery Track Record",
  },
];

const About = () => {
  return (
    <section className="w-full bg-white py-24" id="about">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#6b5200]"
        >
          About Vardhan Group
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          viewport={{ once: true }}
          className="mt-2 text-lg text-[#6b5200]"
        >
          Building Trust, One Landmark at a Time
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-6 max-w-4xl mx-auto text-base md:text-lg text-[#6b5200]/90 leading-relaxed"
        >
          Established in 1951, Vardhan Group has proudly shaped Mumbai’s skyline
          for over 70 years. With an unwavering commitment to quality, timely
          delivery, and customer satisfaction, consistently ranked among the
          city’s most trusted real estate developers.
        </motion.p>

        {/* STATS GRID */}
        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-12">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6 }}
              className="flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full border border-[#b6b04d] flex items-center justify-center text-[#b6b04d] mb-4">
                {item.icon}
              </div>

              <h3
                className="text-2xl font-nromal text-[#6b5200]"
                style={{ letterSpacing: "0.5px", fontWeight: "700" }}
              >
                {item.value}
              </h3>

              <p
                className="mt-2 text-sm md:text-[17px] text-[#6b5200]/90 max-w-xs"
                style={{ letterSpacing: "0.5px", fontWeight: "500" }}
              >
                {item.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
