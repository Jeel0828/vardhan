"use client";
import React from "react";
import mapImg from "../../assest/vardhanmap.webp";

const Map = () => {
  return (
    <section className="w-full h-full mt-10 md:mt-20 flex justify-center items-center">
      <div>
        <img src={mapImg.src} alt="" />
      </div>
    </section>
  );
};

export default Map;
