import React from 'react';
import Marcas from '../brands/Marcas';

const ImageCard = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className="flex flex-col h-full rounded overflow-hidden shadow-lg bg-blue-950 text-white">
      <img className="w-full h-48 object-cover fluid" src={imageUrl} alt={title} />
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-200 text-md text-justify">{description}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="w-full bg-slate-600 text-white hover:bg-gray-200  hover:text-gray-900 font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Servicios = () => {
  const cards = [
    {
      imageUrl: "../images/Foto Inyeccion.jpg",
      title: "Servicio Inyección",
      description: "Nuestro servicio especializado de inyección está diseñado para sellar e impermeabilizar eficazmente su propiedad, previniendo filtraciones y daños por agua. Nuestro equipo de expertos utiliza técnicas avanzadas y materiales de alta calidad para garantizar una protección duradera.",
      buttonText: "Cotizar"
    },
    {
      imageUrl: "../images/PVC Cubierta casa.jpg",
      title: "Impermeabilización de Techos",
      description: "Proteja su techo de los daños causados por el agua con nuestros servicios profesionales de impermeabilización. Utilizamos las últimas técnicas y materiales para garantizar que su techo esté sellado y protegido contra los elementos.",
      buttonText: "Cotizar"
    },
    {
      imageUrl: "../images/estacionamiento icaad 1.jpg",
      title: "Impermeabilización Subterranea",
      description: "Prevenga la entrada de agua y la acumulación de humedad en su sótano con nuestras soluciones integrales de impermeabilización. Nuestro equipo evaluará su sótano y le proporcionará la mejor estrategia para mantener su propiedad seca y protegida.",
      buttonText: "Cotizar"
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8" id='servicios'>
      <h2 className="text-3xl font-bold mb-6 text-center">Nuestros Servicios</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </div>
    <div>
      <Marcas />
    </div>
    </div>
    
  );
};

export default Servicios;