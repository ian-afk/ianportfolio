import React from "react";

type ModalProps = {
  showModal: React.Dispatch<React.SetStateAction<boolean>>;
  message: string;
  custName: string;
};

export default function Modal({ showModal, message, custName }: ModalProps) {
  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/50 backdrop-blur-md"
      onClick={() => showModal(false)}
    >
      {/* Modal Content */}
      <div
        className="bg-white p-6 rounded-lg shadow-lg w-96"
        onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside modal
      >
        <h2 className="text-xl font-bold">
          Thank you! <span className="text-[]">{custName}</span>
        </h2>
        <p className="mt-2 text-gray-600">{message}</p>

        {/* Close Button */}
        <button
          onClick={() => showModal(false)}
          className="mt-4 px-4 py-2 bg-[#2d64b0] text-white rounded-lg hover:bg-[#1f4a87] transition-colors duration-200 hover:cursor-pointer"
        >
          Done
        </button>
      </div>
    </div>
  );
}
