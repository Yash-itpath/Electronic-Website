// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, data }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
      <div
        className="p-8 rounded-lg shadow-xl w-full max-w-3xl relative transform transition-all duration-500 scale-100 hover:scale-105 ease-in-out"
        style={{
          background: 'linear-gradient(135deg, #FF4F8C, #9B5DE5, #3B82F6)', // Pink, Purple, Blue Gradient
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)', // Subtle shadow
        }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white hover:text-gray-200 text-2xl font-semibold transition-colors"
        >
          ✖
        </button>
        <h2 className="text-3xl font-bold mb-4 text-center text-white">{data.title}</h2>

        <div className="flex gap-8 mb-6">
          <img
            src={data.image}
            alt={data.title}
            className="w-48 h-48 object-contain border-2 border-white rounded-lg shadow-md transition-transform duration-300 hover:scale-110"
          />
          <div className="flex-1 space-y-4 text-sm text-white">
            <p className="font-medium">
              <strong>Category:</strong> {data.category}
            </p>
            <div className="flex items-center gap-4">
              {data.discount ? (
                <>
                  <p className="text-xl font-semibold text-green-400">
                    ${ (data.price * (1 - data.discount / 100)).toFixed(2) }
                  </p>
                  <p className="text-base text-gray-300 line-through">
                    ${data.price.toFixed(2)}
                  </p>
                  <span className="text-xs text-red-500">
                    ({data.discount}% OFF)
                  </span>
                </>
              ) : (
                <p className="text-xl font-semibold text-white">
                  ${data.price?.toFixed(2)}
                </p>
              )}
            </div>

            {data.rating && (
              <p className="text-white">
                <strong>Rating:</strong> {data.rating.rate} ★ (
                {data.rating.count} reviews)
              </p>
            )}
          </div>
        </div>

        <div className="text-sm text-white whitespace-pre-wrap">
          <strong>Description:</strong>
          <p>{data.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
