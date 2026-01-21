"use client";
import React from "react";
import { X } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const CallbackModal: React.FC<Props> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center"
      onClick={onClose}
    >
      <div
        className="bg-white w-full max-w-md rounded-xl p-8 relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute cursor-pointer text-black top-4 right-4">
          <X />
        </button>

        <h2 className="text-xl text-black font-bold text-center mb-2">
          ENTER YOUR DETAILS TO GET CALLBACK!
        </h2>

        <p className="text-center mb-6 text-gray-600">
          Our Expert will get in touch with you!
        </p>

        <form className="space-y-4">
          <input
            className="w-full text-black border p-3 rounded"
            placeholder="Name*"
          />
          <input
            className="w-full text-black border p-3 rounded"
            placeholder="Phone Number*"
          />
          <input
            className="w-full text-black border p-3 rounded"
            placeholder="Email ID*"
          />

          <button className="w-full bg-[#c7d35b] py-3 rounded text-white font-semibold">
            SUBMIT
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          or call us on <br />
          <strong>+91 9773069318</strong>
        </p>
      </div>
    </div>
  );
};

export default CallbackModal;
