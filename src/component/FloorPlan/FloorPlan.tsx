"use client";
import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

// const floorPlan = [
//   {
//     title: "Rooftop Sky Theatre",
//     image:
//       "https://media.istockphoto.com/id/1288292255/photo/residential-building-blueprint-plan-real-estate-housing-project-construction-concept.jpg?s=612x612&w=0&k=20&c=Th166PnOqlvPLxRFiysxtgbWR2nWvCvI90-mic6pdH8=",
//   },
//   {
//     title: "Jogging Track & Landscaped Garden",
//     image:
//       "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?w=800&q=80",
//   },
//   {
//     title: "Outdoor Fitness Zone",
//     image:
//       "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80",
//   },
//   {
//     title: "Senior Citizen Sit-out",
//     image:
//       "https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?w=800&q=80",
//   },
//   {
//     title: "Swimming Pool & Deck",
//     image:
//       "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=800&q=80",
//   },
// ];

const floorPlan = [
  {
    title: "2 BHK - Type A",
    image:
      "https://cdn.prod.website-files.com/65ba5ae85ed7a1a3bf872a13/67dca04c484486d2a9c693f7_2000%20Sq%20Foot%20House%20Floor%20Plans-Main%20Floor%20Plan.png",
  },
  {
    title: "2.5 BHK - Type B",
    image:
      "https://www.advancedsystemshomes.com/data/uploads/media/image/10-2016-re.jpg?w=730",
  },
  {
    title: "3 BHK - Type C",
    image: "https://vardhan-bliss.site/Images/floor-plan-re-size_flat-05.jpg",
  },
  {
    title: "Stilt Floor Plan",
    image:
      "https://vardhan-bliss.site/Images/floor-plan-re-size_stlit-plan.jpg",
  },
  {
    title: "Ground Floor Plan",
    image: "https://vardhan-bliss.site/Images/floor-plan-re-size_e-deck.jpg",
  },
];

export default function FloorPlan() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % floorPlan.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const goToPrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + floorPlan.length) % floorPlan.length);
  };

  const goToNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % floorPlan.length);
  };

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
  };

  const getSlidePosition = (index: number) => {
    const total = floorPlan.length;
    let position = index - currentIndex;

    if (position < -total / 2) position += total;
    if (position > total / 2) position -= total;

    return position;
  };

  return (
    <section
      className="w-full bg-[#fff] py-20 relative overflow-hidden"
      id="floorplan"
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-[#c7d35b]/5 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <div className="animate-fadeIn">
          <h2 className="text-4xl md:text-[30px] font-medium text-[#58510d] mb-4 md:mb-2 tracking-tight">
            Project Specification, Configuration & Floor Plans
          </h2>
        </div>

        <div className="relative h-[600px]">
          <button
            onClick={goToPrevious}
            className="absolute cursor-pointer left-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#c7d35b]"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={goToNext}
            className="absolute cursor-pointer right-0 top-1/2 -translate-y-1/2 z-30 bg-black/50 hover:bg-black/90 backdrop-blur-sm text-white p-3 rounded-full transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#c7d35b]"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Slides */}
          <div className="relative h-full flex items-center justify-center">
            {floorPlan.map((item, index) => {
              const position = getSlidePosition(index);
              const isCenter = position === 0;
              const isVisible = Math.abs(position) <= 2;

              return (
                // <div
                //   key={index}
                //   className="absolute transition-all duration-700 ease-out"
                //   style={{
                //     transform: `translateX(${position * 320}px) scale(${isCenter ? 1 : 0.85})`,
                //     zIndex: isCenter ? 20 : 10 - Math.abs(position),
                //     opacity: isVisible ? (isCenter ? 1 : 0.5) : 0,
                //     pointerEvents: isVisible ? "auto" : "none",
                //   }}
                // >
                //   <div className="flex flex-col items-center">
                //     <div
                //       className={`rounded-3xl overflow-hidden shadow-2xl border transition-all duration-700 ${
                //         isCenter
                //           ? "border-[#c7d35b]/50 shadow-[#c7d35b]/20"
                //           : "border-white/10"
                //       }`}
                //       style={{
                //         width: isCenter ? "320px" : "280px",
                //         height: isCenter ? "400px" : "350px",
                //       }}
                //     >
                //       <img
                //         src={item.image}
                //         alt={item.title}
                //         className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                //       />
                //     </div>
                //     <p
                //       className={`text-white text-lg mt-6 font-medium transition-all duration-700 ${
                //         isCenter ? "opacity-100 text-xl" : "opacity-70"
                //       }`}
                //     >
                //       {item.title}
                //     </p>
                //   </div>
                // </div>
                <div
                  key={index}
                  className="absolute transition-all duration-700 ease-out"
                  style={{
                    transform: `translateX(${position * 320}px) scale(${isCenter ? 1 : 0.82})`,
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
                        height: isCenter ? "300px" : "300px",
                      }}
                    >
                      <img
                        src={floorPlan[index].image}
                        alt={`${floorPlan[index].title} Floor Plan`}
                        className="w-full h-full transition-transform duration-1000 hover:scale-110"
                      />
                    </div>

                    <div className="mt-6 text-center">
                      <p
                        className={`text-base sm:text-lg md:text-xl font-medium transition-all duration-700 ${
                          isCenter ? "text-black" : "text-black"
                        }`}
                      >
                        {floorPlan[index].title}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-8">
          {floorPlan.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all cursor-pointer duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-[#c7d35b] ${
                index === currentIndex
                  ? "bg-[#c7d35b] w-8 h-3"
                  : "bg-[#000]/50 hover:bg-[#c7d35b] w-3 h-3"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="animate-fadeIn" style={{ animationDelay: "0.3s" }}>
          <button className="bg-[#c7d35b] hover:bg-[#b9c84f] text-[#fff] font-medium cursor-pointer px-10 py-4 rounded-xl text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#c7d35b]/30 focus:outline-none focus:ring-2 focus:ring-[#c7d35b] focus:ring-offset-2 focus:ring-offset-[#182b4d]">
            View More Amenities
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out forwards;
        }

        @keyframes pulse {
          0%,
          100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.5;
          }
        }

        .animate-pulse {
          animation: pulse 4s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}
