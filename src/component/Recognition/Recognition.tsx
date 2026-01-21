"use client";
import React from "react";
import { motion } from "framer-motion";
import cerImg from "../../assest/certificate11.webp";

const Recognition = () => {
  return (
    <section className="w-full">
      <div className="grid lg:grid-cols-2 min-h-[400px]">
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-[#c6cf6a] flex items-center px-6 md:px-16 py-16"
        >
          <div className="max-w-6xl mx-auto text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-[#5a5300] mb-6">
              Awards & Recognition
            </h2>

            <h3 className="text-xl md:text-2xl font-semibold text-[#5a5300] mb-4">
              Times Group Realty Icon Award 2019
            </h3>

            <p className="text-base md:text-lg text-[#5a5300]/90 leading-relaxed">
              An industry badge of honor for superior quality housing at
              affordable prices. Certified as premium developers, invest in your
              future worry-free.
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 40 }}
          whileInView={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          viewport={{ once: true }}
          className="bg-white flex items-center justify-center px-6 md:px-16 py-16"
        >
          <motion.img
            src={cerImg.src}
            alt="Awards Certificate"
            className="w-full object-contain"
            animate={{ y: [0, -10, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Recognition;
