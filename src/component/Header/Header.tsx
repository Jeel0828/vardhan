"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import Logo from "../../assest/logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const menuItems = [
    "Home",
    "Location Advantages",
    "Project Specifications",
    "About",
    "E-Brochure",
    "Contact Us",
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <img
            src={Logo.src}
            alt="Vardhan Bliss"
            className="h-20 object-contain"
          />
        </div>

        <nav className="hidden cursor-pointer lg:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-800">
          {menuItems.map((item) => (
            <a
              key={item}
              href="#"
              className="uppercase hover:text-lime-600 transition"
            >
              {item}
            </a>
          ))}
        </nav>

        <button
          className="lg:hidden cursor-pointer text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-md"
          >
            <nav className="flex flex-col px-6 py-4 gap-4 text-gray-800">
              {menuItems.map((item) => (
                <a
                  key={item}
                  href="#"
                  className="uppercase font-medium tracking-wide hover:text-lime-600"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
