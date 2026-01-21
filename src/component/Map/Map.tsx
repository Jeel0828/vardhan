"use client";
import React from "react";

const Map = () => {
  return (
    <section className="w-full h-screen mt-10 md:mt-20">
      <iframe
        title="Vardhan Bliss Location"
        src="https://www.google.com/maps?q=Vardhan%20Bliss%20Mulund%20West&output=embed"
        className="w-full h-full border-0"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </section>
  );
};

export default Map;
