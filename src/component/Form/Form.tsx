"use client";
import React, { useState } from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const GOOGLE_SHEET_URL =
  "https://script.google.com/macros/s/AKfycbwLdm1JNz-3Qm0s7dyganBzZzJLDlXB8BD8W66S6u5J283lh7AYQOGFAl0mbRr6NuLDfg/exec";

const CallbackModal: React.FC<Props> = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.phone || !formData.email) {
      alert("Please fill all fields");
      return;
    }

    setLoading(true);

    try {
      setError("");

      const params = new URLSearchParams({
        sheet: "Vardhan",
        name: formData.name,
        phone: formData.phone,
        email: formData.email,
      });

      const response = await fetch(`${GOOGLE_SHEET_URL}?${params.toString()}`, {
        method: "GET",
      });

      if (!response.ok) {
        throw new Error("Server error");
      }

      const result = await response.json();

      if (result?.success === true) {
        setSuccess(true);
        setFormData({ name: "", phone: "", email: "" });

        setTimeout(() => {
          setSuccess(false);
          onClose();
        }, 2000);
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
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute cursor-pointer text-black top-4 right-4"
        >
          <X />
        </button>

        <h2 className="text-xl text-black font-bold text-center mb-2">
          ENTER YOUR DETAILS TO GET CALLBACK!
        </h2>

        <p className="text-center mb-6 text-gray-600">
          Our Expert will get in touch with you!
        </p>

        {success ? (
          <p className="text-center text-green-600 font-semibold">
            ✅ Submitted Successfully!
          </p>
        ) : (
          <form className="space-y-4" onSubmit={handleSubmit}>
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full text-black border p-3 rounded"
              placeholder="Name*"
            />

            <input
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full text-black border p-3 rounded"
              placeholder="Phone Number*"
            />

            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full text-black border p-3 rounded"
              placeholder="Email ID*"
            />

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#c7d35b] py-3 rounded text-white font-semibold disabled:opacity-60"
            >
              {loading ? "Submitting..." : "SUBMIT"}
            </button>
          </form>
        )}

        <p className="text-center mt-4 text-gray-600">
          or call us on <br />
          <strong>+91 9773069318</strong>
        </p>
      </div>
    </div>
  );
};

export default CallbackModal;
