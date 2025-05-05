import React from 'react';

function Modal({ isOpen, closeModal, cardData }) {
  if (!isOpen) return null; // Don't render the modal if it's closed

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-6 rounded-lg max-w-md w-full">
        <h2 className="text-xl font-bold">{cardData.title}</h2>
        <p className="mt-2">{cardData.description}</p>
        {/* Add more details if needed */}
        
        <button
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
          onClick={closeModal}
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;
