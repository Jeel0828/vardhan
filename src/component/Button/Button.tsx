// import React from "react";

// const Button = () => {
//   return (
//     <section className="w-full flex justify-center mt-10 mb-10">
//       <div className="flex gap-2 items-center cursor-pointer ">
//         <button className="bg-[#c7d35b] cursor-pointer hover:bg-[#b6c24f] text-[20px] font-semibold px-6 py-3 rounded-lg transition">
//           Get a Detailed Cost Breakup
//         </button>
//       </div>
//     </section>
//   );
// };

// export default Button;

"use client";
import CallbackModal from "@/src/pages/Form/Form";
import React, { useState } from "react";

const Button = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <section className="w-full flex justify-center mt-10 mb-10">
        <button
          onClick={() => setOpen(true)}
          className="bg-[#c7d35b] cursor-pointer hover:bg-[#b6c24f] text-[20px] font-semibold px-6 py-3 rounded-lg transition"
        >
          Get a Detailed Cost Breakup
        </button>
      </section>

      <CallbackModal isOpen={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default Button;
