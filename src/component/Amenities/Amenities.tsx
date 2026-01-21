"use client";

import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const amenities = [
  {
    title: "Meditation Area",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
  },
  {
    title: "Fitness Centre & Indoor Games",
    image:
      "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
  },
  {
    title: "Rooftop Sky Theatre",
    image:
      "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=800&q=80",
  },
  {
    title: "Swimming Pool & Deck",
    image:
      "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
  },
  {
    title: "Kids' Play Area",
    image:
      "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=800&q=80",
  },
  {
    title: "Jogging Track",
    image:
      "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
  },
];

export default function Amenities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isHovered) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % amenities.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHovered]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + amenities.length) % amenities.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % amenities.length);
  };

  const getPosition = (index: number) => {
    let diff = index - currentIndex;
    if (diff < -amenities.length / 2) diff += amenities.length;
    if (diff > amenities.length / 2) diff -= amenities.length;
    return diff;
  };

  return (
    <section
      className="w-full bg-[#0f172a] py-16 md:py-20 relative overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          External Amenities
        </h2>
        <p className="text-xl md:text-2xl text-blue-200 font-light mb-10">
          26+ Lifestyle Amenities Where Leisure Meets Luxury
        </p>

        <div className="relative min-h-[520px] sm:min-h-[580px] lg:min-h-[620px] flex items-center justify-center">
          <button
            onClick={goToPrevious}
            className="absolute left-2 sm:left-6 lg:left-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-[#c7d35b] transition-all duration-300 shadow-xl touch-manipulation"
            aria-label="Previous amenity"
          >
            <ChevronLeft className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          <button
            onClick={goToNext}
            className="absolute right-2 sm:right-6 lg:right-12 top-1/2 -translate-y-1/2 z-30 w-12 h-12 sm:w-14 sm:h-14 bg-black/40 hover:bg-black/60 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:text-[#c7d35b] transition-all duration-300 shadow-xl touch-manipulation"
            aria-label="Next amenity"
          >
            <ChevronRight className="w-7 h-7 sm:w-8 sm:h-8" />
          </button>

          <div className="relative w-full h-full flex items-center justify-center overflow-visible">
            {amenities.map((amenity, index) => {
              const position = getPosition(index);
              const isCenter = position === 0;
              const isNear = Math.abs(position) <= 1.5;

              if (!isNear) return null;

              const offsetPx =
                position *
                (window.innerWidth < 640
                  ? 260
                  : window.innerWidth < 1024
                    ? 300
                    : 360);

              return (
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${offsetPx}px) scale(${isCenter ? 1 : 0.82})`,
                    zIndex: isCenter ? 30 : 20 - Math.abs(position),
                    opacity: isCenter ? 1 : 0.65,
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div
                      className={`rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl transition-all duration-700 ${
                        isCenter
                          ? "border-4 border-[#c7d35b]/60 shadow-[#c7d35b]/40"
                          : "border border-white/10 shadow-black/60"
                      }`}
                      style={{
                        width: isCenter ? "340px" : "260px",
                        height: isCenter ? "420px" : "340px",
                        minWidth: "260px",
                      }}
                    >
                      <img
                        src={amenity.image}
                        alt={amenity.title}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                      />
                    </div>

                    <p
                      className={`mt-6 text-base sm:text-lg md:text-xl font-medium transition-all duration-700 ${
                        isCenter ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {amenity.title}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-10">
          {amenities.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`transition-all duration-300 rounded-full ${
                index === currentIndex
                  ? "bg-[#c7d35b] w-10 h-3.5"
                  : "bg-gray-500/50 hover:bg-gray-400 w-3.5 h-3.5"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="mt-12 md:mt-16">
          <button
            className="px-8 py-4 sm:px-12 sm:py-5 bg-[#c7d35b] hover:bg-[#b8c550] text-[#fff] font-normal text-base sm:text-lg rounded-full transition-all duration-300 shadow-lg hover:shadow-[#c7d35b]/50 active:scale-95"
            style={{ letterSpacing: "0.5px" }}
          >
            View More Amenities
          </button>
        </div>
      </div>
    </section>
  );
}
