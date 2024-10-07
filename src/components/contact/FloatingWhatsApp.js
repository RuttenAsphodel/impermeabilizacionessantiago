// FloatingWhatsAppButton.jsx
import React from 'react';

const FloatingWhatsAppButton = ({ phoneNumber, message }) => {
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={whatsappLink}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-16 right-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full shadow-lg flex items-center justify-center transition-transform transform hover:scale-105"
    >
      <svg
        className="w-6 h-6"
        fill="currentColor"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.063.521 4.06 1.515 5.83L0 24l6.242-1.572C7.943 22.73 9.939 23.2 12 23.2c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.333c-1.763 0-3.474-.451-5.016-1.305l-.363-.205L2.947 22l1.19-3.661-.24-.373A9.333 9.333 0 1 1 21.333 12c0 5.154-4.179 9.333-9.333 9.333z" />
        <path d="M17.12 14.982l-.723-.361c-.383-.191-.662-.283-.942-.094-.27.184-1.11 1.092-1.345 1.358-.236.265-.448.283-.83.094s-1.166-.439-2.205-1.229c-.816-.64-1.367-1.429-1.529-1.666-.161-.237-.017-.37.173-.543.191-.174.438-.444.65-.667.213-.223.28-.376.423-.623.142-.247.073-.46-.038-.639-.11-.179-.971-2.37-1.36-3.32-.292-.73-.59-.654-.81-.665-.216-.011-.462-.012-.71-.013-.248 0-.652-.025-.995.207-.342.232-1.302.948-1.302 2.308 0 1.36 1.072 2.676 1.222 2.85.15.173 2.442 3.765 5.941 5.302.45.198.8.316 1.077.428.493.204.942.176 1.295.106.396-.08 1.241-.499 1.414-1.028.173-.529.173-1.06.122-1.158-.051-.097-.204-.157-.514-.289z" />
      </svg>
    </a>
  );
};

export default FloatingWhatsAppButton;
