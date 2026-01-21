import React from "react";

const Expert = () => {
  return (
    <section className="w-full py-12">
      <div className="max-w-6xl mx-auto px-6 lg:px-12 flex flex-col items-center">
        <h2
          className="text-4xl lg:text-[40px] text-[#58510d] font-normal text-center mb-4"
          style={{ letterSpacing: "1px", fontWeight: "700" }}
        >
          Why Invest in Mulund West?
        </h2>
        <p
          className="text-[15px] font-normal text-[#6b5b1a] mb-6 text-center"
          style={{ letterSpacing: "0.5px", fontWeight: "400" }}
        >
          Mulund West is Mumbai’s rising star, offering easy city access, serene
          green areas, and booming infrastructure. With property values soaring
          16.1% in five years, A winning combination of a peaceful home and
          promising financial gains.
        </p>
        <p
          className="text-[15px] font-normal text-[#6b5b1a] text-center"
          style={{ letterSpacing: "1px", fontWeight: "400" }}
        >
          - 99acres Real Estate
        </p>
        <button className="bg-[#c7d35b] cursor-pointer hover:bg-[#b6c24f] text-[20px] font-semibold px-6 py-3 rounded-lg transition mt-10">
          Talk to our Expert
        </button>
      </div>
    </section>
  );
};

export default Expert;
