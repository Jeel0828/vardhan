"use client";
import React from "react";
import { motion } from "framer-motion";
import barcode from "../../assest/barcode.jpg";

const Location = () => {
  return (
    <section className="w-full bg-white py-20">
      <div className="max-w-6xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="w-full h-[400px] lg:h-[500px] rounded-xl overflow-hidden shadow-md"
        >
          <iframe
            title="Vardhan Bliss Location"
            src="https://www.google.com/maps?q=Vardhan%20Bliss%20Mulund%20West&output=embed"
            className="w-full h-full border-0"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 10 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="flex flex-col justify-between h-full"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-[#6b5200] mb-4">
              Vardhan Bliss
            </h2>

            <p className="text-lg text-[#6b5200] mb-4">
              2, 2.5 & 3 BHK Premium Residences in Mulund West
            </p>

            <p className="text-base text-[#6b5200]/90 mb-3">
              <span className="font-semibold">Location:</span> Sevaram Lalwani
              Rd, Ramgad Nagar, Vishwakarma Nagar, Mulund West, Mumbai,
              Maharashtra 400080
            </p>

            <p className="text-base text-[#6b5200]/90 mb-6">
              <span className="font-semibold">RERA No.:</span> P51800055919
            </p>

            <img
              src={barcode.src}
              alt="RERA QR Code"
              className="w-32 h-32 object-contain border p-2 mb-6"
            />
          </div>

          {/* CTA */}
          <div>
            <button className="bg-[#c7d35b] hover:bg-[#b6c24f] cursor-pointer transition text-white font-semibold px-8 py-3 rounded-lg">
              Get in Touch
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Location;
