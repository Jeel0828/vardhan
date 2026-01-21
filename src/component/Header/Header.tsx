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
    { label: "Home", id: "home" },
    { label: "Overview", id: "overview" },
    { label: "Project Specifications", id: "floorplan" },
    { label: "About", id: "about" },
    { label: "E-Brochure", id: "brochure" },
    { label: "Contact Us", id: "contact" },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 80; // height of header
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

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

        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium tracking-wide text-gray-800">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="uppercase cursor-pointer hover:text-lime-600 transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        <button
          className="lg:hidden cursor-pointer text-gray-800"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.35 }}
            className="fixed top-0 right-0 w-full h-screen bg-white z-50 lg:hidden"
          >
            <div className="flex justify-end p-6">
              <button
                className="cursor-pointer text-gray-800"
                onClick={() => setIsOpen(false)}
              >
                <X size={32} />
              </button>
            </div>

            <nav className="flex flex-col items-center h-full gap-8 text-lg font-semibold text-gray-800">
              {menuItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => {
                    scrollToSection(item.id);
                    setIsOpen(false);
                  }}
                  className="uppercase hover:text-lime-600 transition"
                >
                  {item.label}
                </button>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
