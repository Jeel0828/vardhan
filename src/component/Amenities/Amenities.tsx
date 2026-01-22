"use client";
import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const amenities = [
  {
    title: "Rooftop Sky Theatre",
    image: "https://vardhan-bliss.site/Images/Rooftop-Sky-Theatre.webp",
  },
  {
    title: "Jogging Track & Landscaped Garden",
    image:
      "https://vardhan-bliss.site/Images/Jogging-Track-&-Landscaped-Garden.webp",
  },
  {
    title: "Kids' Play Area & Party Zone",
    image: "https://vardhan-bliss.site/Images/KidsPlay-Area-&-Party-Zone.webp",
  },
  {
    title: "Outdoor Fitness Zone",
    image:
      "https://vardhan-bliss.site/Images/Fitness-Centre-&-Indoor-Games.webp",
  },
  {
    title: "Terrace Lounge",
    image: "https://vardhan-bliss.site/Images/terrace-lounge1.webp",
  },
];

export default function Amenities() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % amenities.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [autoPlay]);

  const prevSlide = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev - 1 + amenities.length) % amenities.length);
  };

  const nextSlide = () => {
    setAutoPlay(false);
    setCurrentIndex((prev) => (prev + 1) % amenities.length);
  };

  const getVisibleSlides = () => {
    const prev = (currentIndex - 1 + amenities.length) % amenities.length;
    const next = (currentIndex + 1) % amenities.length;

    return [
      { ...amenities[prev], position: "left" },
      { ...amenities[currentIndex], position: "center" },
      { ...amenities[next], position: "right" },
    ];
  };

  return (
    <section
      className="w-full bg-[#0f172a] py-20 relative overflow-hidden"
      id="amenities"
    >
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
          External Amenities
        </h2>
        <p className="text-xl md:text-2xl text-blue-200 font-light mb-10">
          26+ Lifestyle Amenities Where Leisure Meets Luxury
        </p>

        <div className="relative flex items-center justify-center">
          <button
            onClick={prevSlide}
            className="absolute left-0 cursor-pointer z-[999] md:z-20 bg-black/70 hover:bg-black text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronLeft size={28} />
          </button>

          <div className="flex items-center justify-center gap-8">
            {getVisibleSlides().map((item, index) => {
              const isCenter = item.position === "center";

              return (
                <div
                  key={index}
                  className={`transition-all duration-700 ease-out ${
                    isCenter
                      ? "scale-100 opacity-100 translate-y-0 z-20"
                      : "scale-90 opacity-70 translate-y-2"
                  }`}
                >
                  <div
                    className={`overflow-hidden rounded-2xl shadow-xl border transition-all duration-500 ${
                      isCenter
                        ? "border-[#c7d35b] shadow-[#c7d35b]/30"
                        : "border-gray-200"
                    }`}
                    style={{
                      width: isCenter ? "360px" : "260px",
                      height: "300px",
                    }}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                    />
                  </div>

                  <p
                    className={`mt-5 text-lg font-medium transition-all duration-500 ${
                      isCenter
                        ? "text-white opacity-100 translate-y-0"
                        : "text-white opacity-70"
                    }`}
                  >
                    {item.title}
                  </p>
                </div>
              );
            })}
          </div>

          <button
            onClick={nextSlide}
            className="absolute right-0 cursor-pointer z-20 bg-black/70 hover:bg-black text-white p-3 rounded-full transition-all duration-300 hover:scale-110"
          >
            <ChevronRight size={28} />
          </button>
        </div>
        <div className="flex justify-center gap-3 mt-10">
          {amenities.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setAutoPlay(false);
                setCurrentIndex(index);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? "w-8 bg-[#c7d35b]"
                  : "w-3 bg-gray-400 hover:bg-gray-500"
              }`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeUp {
          animation: fadeUp 0.8s ease-out forwards;
        }
      `}</style>
    </section>
  );
}
