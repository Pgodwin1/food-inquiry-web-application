'use client';
import React from 'react'
import { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export default function Price({ type, ngnToUsdRate }) {
    const [isPopupOpen, setPopupOpen] = useState(false);

    const handleOpenPopup = () => {
      setPopupOpen(true);
    };
  
    const handleClosePopup = () => {
      setPopupOpen(false);
    };
  
    const price = Math.floor(Math.random() * 1000);
   const formattedPrice = price.toString() + '.00';
  
    return (
      <div>
        <button
          className="text-white bg-red-500 hover:bg-red-600 rounded py-1 px-3 mt-5 client"
          onClick={handleOpenPopup}
        >
          N{formattedPrice}
        </button>
  
        {isPopupOpen && (
          <div className="fixed inset-0 flex items-center justify-center">
            <div className="bg-black bg-opacity-50 absolute inset-0"></div>
            <div className="bg-white rounded-lg p-4 z-10">
            <p>Conversion Rate (NGN to USD): ${ngnToUsdRate}</p>
              <button
                className="mt-4 p-2 bg-red-500 text-white rounded hover:bg-red-600"
                onClick={handleClosePopup}
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
  )
}
