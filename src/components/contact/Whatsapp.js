// FloatingWhatsApp.js
import React from 'react';
import './WhatsApp.css'; // Importa el archivo de estilos

const enviarWhatsApp = () => {
  const phoneNumber = "56989376647"; // Número de teléfono en formato internacional (sin + ni espacios)
  const message = "Hola, me gustaría obtener más información sobre sus servicios.";

  return (
    <a
      href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
      className="floating-whatsapp"
      target="_blank"
      rel="noopener noreferrer"
    >
      <img 
        src="https://path/to/whatsapp-icon.png" 
        alt="WhatsApp" 
        className="whatsapp-icon"
      />
    </a>
  );
};

export default enviarWhatsApp;
