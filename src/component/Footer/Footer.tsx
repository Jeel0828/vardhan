"use client";

import React, { useState } from "react";
import { Earth, Mail, Phone } from "lucide-react";

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwLdm1JNz-3Qm0s7dyganBzZzJLDlXB8BD8W66S6u5J283lh7AYQOGFAl0mbRr6NuLDfg/exec";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      setError("Please fill all fields");
      return;
    }

    setLoading(true);
    setError("");

    try {
      const form = new FormData();
      form.append("name", formData.name);
      form.append("phone", formData.phone);
      form.append("email", formData.email);
      form.append("sheet", "Vardhan");

      const response = await fetch(GOOGLE_SHEET_URL, {
        method: "POST",
        body: form,
      });

      const result = await response.json();

      if (result.success) {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "" });

        setTimeout(() => setSuccess(false), 3000);
      } else {
        setError("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <footer className="bg-[#c7cf6a] w-full py-15" id="contact">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-[#5a5300] mb-3">
          Have questions or want to schedule a site visit?
        </h2>

        <p className="text-lg text-[#5a5300] mb-9">
          Fill out the form below, and our team will contact you shortly
        </p>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-6"
        >
          <input
            type="text"
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full bg-white px-6 py-4 border rounded-lg outline-none text-gray-700"
          />

          <input
            type="tel"
            placeholder="Mobile No."
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full bg-white px-6 py-4 border rounded-lg outline-none text-gray-700"
          />

          <input
            type="email"
            placeholder="Email ID"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="md:col-span-2 w-full bg-white px-6 py-4 border rounded-lg outline-none text-gray-700"
          />

          <button
            type="submit"
            disabled={loading}
            className="md:col-span-2 bg-[#3d3a00] hover:bg-[#2f2c00] transition text-white text-lg font-semibold px-16 py-4 rounded-lg"
          >
            {loading ? "Submitting..." : "Request a Call Back"}
          </button>
        </form>

        {/* MESSAGES */}
        {success && (
          <p className="text-green-700 font-semibold mb-6">
            ✅ Submitted successfully!
          </p>
        )}

        {error && <p className="text-red-700 font-semibold mb-6">{error}</p>}

        {/* CONTACT INFO */}
        <h3 className="text-2xl font-semibold text-[#5a5300] mb-4 md:mt-10">
          Contact Information
        </h3>

        <div className="grid md:grid-cols-3 gap-8 text-[#5a5300] font-medium text-lg">
          <div className="flex items-center justify-center gap-3 md:border-r border-white pr-6">
            <Phone size={22} />
            <span>Call Us: +91 8657575501</span>
          </div>

          <div className="flex items-center justify-center gap-3 md:border-r border-white pr-6">
            <Mail size={22} />
            <span>bliss@vardhangroup.com</span>
          </div>

          <div className="flex items-center justify-center gap-3">
            <Earth size={22} />
            <span>vardhan-bliss.site</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
