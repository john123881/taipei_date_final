import React from 'react';

function ConfirmModal({ title, message, buttonText, onButtonClick }) {
  return (
    <div className="p-4 gap-4 mx-10 max-w-screen-lg w-full md:w-96 flex flex-col justify-center items-center border-2 border-white rounded-lg shadow-lg">
      <h2 className="text-neongreen font-bold mb-4">{title}</h2>
      <div className="flex flex-col justify-center items-center">
        <p className="text-center">{message}</p>
      </div>
      <button
        className="w-40 md:w-48 py-1 px-4 md:px-6 mx-2 bg-black border-2 border-neongreen rounded-full text-neongreen text-xs md:text-sm"
        onClick={onButtonClick}
      >
        {buttonText}
      </button>
    </div>
  );
}

export default ConfirmModal;
