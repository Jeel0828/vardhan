// "use client";

// import { motion } from "framer-motion";
// import bannerImg from "../../assest/banner.webp";

// const Hero = () => {
//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 grid lg:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex justify-center"
//         >
//           <img
//             src={bannerImg.src}
//             alt="Vardhan Bliss"
//             className="w-full h-auto drop-shadow-2xl"
//           />
//         </motion.div>

//         <motion.div
//           initial={{ opacity: 0, x: 80 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="text-white"
//         >
//           <h1 className="text-4xl lg:text-5xl font-bold mb-4">
//             Discover Vardhan Bliss
//           </h1>

//           <p className="text-lg lg:text-xl mb-2">
//             Premium 2, 2.5 & 3 BHK Homes in Mulund West by Vardhan Group
//             Starting from ₹
//           </p>

//           <p className="text-xl font-semibold mb-2">1.8 Cr*</p>

//           <p className="mb-6 text-lg">5 mins from station</p>

//           <button className="bg-[#c7d35b] hover:bg-[#b6c24f] text-black font-semibold px-6 py-3 rounded-lg transition">
//             Book a Site Visit
//           </button>

//           {/* FORM CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 60 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.6, delay: 0.4 }}
//             className="mt-10 bg-white rounded-xl shadow-xl p-6 max-w-md"
//           >
//             <h3 className="text-xl font-semibold text-center mb-4 text-[#6b5b1a]">
//               Schedule a Site Visit today!
//             </h3>

//             <form className="space-y-4">
//               <input
//                 type="text"
//                 placeholder="Name"
//                 className="w-full border rounded-md px-4 py-2 outline-none"
//               />

//               <div className="flex gap-3">
//                 <input
//                   type="tel"
//                   placeholder="Mobile No."
//                   className="w-1/2 border rounded-md px-4 py-2 outline-none"
//                 />
//                 <input
//                   type="email"
//                   placeholder="Email ID"
//                   className="w-1/2 border rounded-md px-4 py-2 outline-none"
//                 />
//               </div>

//               <select className="w-full border rounded-md px-4 py-2">
//                 <option>Preferred Configuration</option>
//                 <option>2 BHK</option>
//                 <option>2.5 BHK</option>
//                 <option>3 BHK</option>
//               </select>

//               <button className="w-full bg-[#a7b54a] hover:bg-[#98a741] text-white font-semibold py-3 rounded-md">
//                 Submit
//               </button>
//             </form>
//           </motion.div>
//         </motion.div>
//       </div>

//       <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2">
//         <div className="bg-[#c7d35b] text-black font-semibold px-4 py-3 rounded-l-md rotate-90 origin-bottom-right">
//           Enquire Now
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;

"use client";

import { motion } from "framer-motion";
import bannerImg from "../../assest/banner.webp";

const Hero = () => {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* BACKGROUND IMAGE */}
      <img
        src={bannerImg.src}
        alt="Vardhan Bliss"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0"></div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 pt-32 pb-16 grid lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="hidden lg:block"
        />

        <motion.div
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-white"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            Discover Vardhan Bliss
          </h1>

          <p className="text-lg mb-2">
            Premium 2, 2.5 & 3 BHK Homes in Mulund West by Vardhan Group
          </p>

          <p className="text-xl font-semibold mb-2">Starting from ₹ 1.8 Cr*</p>

          <p className="mb-6 text-lg">5 mins from station</p>

          <button className="bg-[#c7d35b] hover:bg-[#b6c24f] font-semibold px-6 py-3 rounded-lg transition">
            Book a Site Visit
          </button>

          {/* FORM CARD */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-10 bg-white rounded-xl shadow-xl p-6 max-w-md"
          >
            <h3 className="text-xl font-semibold text-center mb-4 text-[#6b5b1a]">
              Schedule a Site Visit today!
            </h3>

            <form className="space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full text-black border rounded-md px-4 py-2 outline-none"
              />

              <div className="flex gap-3">
                <input
                  type="tel"
                  placeholder="Mobile No."
                  className="w-1/2 text-black border rounded-md px-4 py-2 outline-none"
                />
                <input
                  type="email"
                  placeholder="Email ID"
                  className="w-1/2 text-black border rounded-md px-4 py-2 outline-none"
                />
              </div>

              <select className="w-full text-black border rounded-md px-4 py-2">
                <option>Preferred Configuration</option>
                <option>2 BHK</option>
                <option>2.5 BHK</option>
                <option>3 BHK</option>
              </select>

              <button className="w-full bg-[#a7b54a] hover:bg-[#98a741] text-white font-semibold py-3 rounded-md">
                Submit
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>

      {/* ENQUIRE NOW TAB */}
      <div className="hidden lg:block absolute right-0 top-1/2 -translate-y-1/2 z-20">
        <div className="bg-[#c7d35b] text-black font-semibold px-4 py-3 rounded-l-md rotate-90 origin-bottom-right">
          Enquire Now
        </div>
      </div>
    </section>
  );
};

export default Hero;
