"use client";
import React from "react";

const projects = [
  {
    title: "Mahvir Tower",
    location: "Tardeo",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    title: "Adhinath Tower",
    location: "Borivali",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    title: "Vardhan Royal",
    location: "Malad (E)",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    title: "Amit Nagar",
    location: "Versova, Andheri West",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
];

const Portfolio = () => {
  return (
    <section className="w-full py-10 bg-white">
      <h2 className="text-center text-4xl font-semibold text-[#6b5200] mb-14">
        Project Portfolio
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((item, index) => (
          <div
            key={index}
            className="relative group h-[420px] cursor-pointer overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover opacity-100 group-hover:opacity-100 transition-opacity duration-700"
            />

            <div className="absolute inset-0 bg-[#9aa64a]/90 group-hover:bg-[#000000]/40 transition duration-700" />

            <div className="relative z-10 h-full flex flex-col items-center justify-center text-white px-4 text-center">
              <h3 className="text-2xl font-semibold mb-1">{item.title}</h3>
              <p className="text-sm tracking-wide">{item.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
