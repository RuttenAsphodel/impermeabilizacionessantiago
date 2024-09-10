import React from 'react';

const ImageCard = ({ imageUrl, title, description, worktype, location, buttonText }) => {
  return (
    <div className="flex flex-col h-full rounded overflow-hidden shadow-lg bg-white text-gray-800">
      <img className="bg-white rounded-t-md w-full h-56" src={imageUrl} alt={title} style={{ aspectRatio: "600/400", objectFit: "contain"}}/>
      <div className="px-6 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-800 font-bold text-md text-left">Descripcion:</p>        
        <p className="text-gray-800 p-2 text-md text-left">{description}</p>
        <p className="text-gray-800 font-bold text-md text-left">Servicio realizado:</p>
        <p className="text-gray-800 p-2 text-md text-left">{worktype}</p>
        <p className="text-gray-800 font-bold text-md text-left">Ubicación:</p>
        <p className="text-gray-800 p-2 text-md text-left">{location}</p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <button className="w-full bg-slate-600 text-white hover:bg-gray-200  hover:text-gray-900 font-bold py-2 px-4 rounded">
          {buttonText}
        </button>
      </div>
    </div>
  );
};

const Proyectos = () => {
  const cards = [
    {
      imageUrl: "../images/salvador.jpg",
      title: "Hospital del Salvador",
      description: "Proyecto de impermeabilización bajo cota cero",
      location: "Santiago, Región Metropolitana",
      worktype: "Muro y Subterraneo, Membrana de Bentonita y Dren",
      buttonText: "Info"

    },
    {
      imageUrl: "../images/queilen.jpg",
      title: "Hospital de Queilen",
      description: "Proyecto impermeabilización bajo cota cero",
      location: "Chiloé, X Región de Los Lagos",
      worktype: "Proyecto de Impermeabilización, Membrana de PVC",
      buttonText: "Info"
    },
    {
      imageUrl: "https://hcv.cl/HCV2/wp-content/uploads/2020/06/LOGO-NUEVO-HOSPITAL2.png",
      title: "Hospital Claudio Vicuña, San Antonio",
      description: "Impermeabilización Poliuretano",
      location: "San Antonio, Región de Valparaiso",
      worktype: "Impermeabilizacion Poliuretano",
      buttonText: "Info"    
    },
    
    {
      imageUrl: "https://images.adsttc.com/media/images/56fd/7332/e58e/ce7e/8500/0004/slideshow/12-_Attali.jpg?1459450655",
      title: "Edificio Transoceanica",
      description: "Proyecto de Impermeabilizacion Transoceanica",
      location: "Vitacura, Región Metropolitana",
      worktype: "Impermeabilizacion Subterranea",
      buttonText: "Info"    
    },
    
  ];

  return (
    <div className="container mx-auto px-4 py-8" id='proyectos'>
      <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;