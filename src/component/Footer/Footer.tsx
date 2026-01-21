import { Earth, Mail, Network, Phone } from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#c7cf6a] w-full py-20" id="contact">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5a5300] mb-3">
          Have questions or want to schedule a site visit?
        </h2>
        <p className="text-lg text-[#5a5300] mb-9">
          Fill out the form below, and our team will contact you shortly
        </p>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-10">
          <input
            type="text"
            placeholder="Name"
            className="w-full bg-white text-black px-6 py-4 border rounded-lg outline-none text-gray-700"
          />

          <input
            type="tel"
            placeholder="Mobile No."
            className="w-full bg-white text-black px-6 py-4 border rounded-lg outline-none text-gray-700"
          />

          <input
            type="email"
            placeholder="Email ID"
            className="w-full bg-white text-black px-6 py-4 border rounded-lg outline-none text-gray-700"
          />

          <select className="w-full bg-white text-black px-6 py-4 border rounded-lg outline-none text-gray-700">
            <option>Preferred Configuration</option>
            <option>2 BHK</option>
            <option>2.5 BHK</option>
            <option>3 BHK</option>
          </select>
        </div>

        {/* BUTTON */}
        <button className="bg-[#3d3a00] hover:bg-[#2f2c00] cursor-pointer transition text-white text-lg font-semibold px-16 py-4 rounded-lg mb-16">
          Request a Call Back
        </button>

        {/* CONTACT INFO */}
        <h3 className="text-2xl font-semibold text-[#5a5300] mb-8">
          Contact Information
        </h3>

        <div className="grid md:grid-cols-3 gap-8 text-[#5a5300] font-medium text-lg">
          <div className="flex items-center justify-center gap-3 md:border-r border-[#fff] pr-6">
            <span className="text-2xl">
              <Phone />
            </span>
            <span>Call Us: +91 8657575501</span>
          </div>

          <div className="flex items-center justify-center gap-3 md:border-r border-[#fff] pr-6">
            <span className="text-2xl">
              <Mail />
            </span>
            <span>bliss@vardhangroup.com</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <span className="text-2xl">
              <Earth />
            </span>
            <span>vardhan-bliss.site</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
