import React from 'react';

const ImageCard = ({ imageUrl, title, description, worktype, location, buttonText }) => {
  return (
    <div className="flex flex-col h-full rounded overflow-hidden shadow-lg bg-blue-950 text-white">
      <img className="w-full h-80 object-content" src={imageUrl} alt={title} />
      <div className="px-6 py-10 flex-grow">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-300 font-bold text-xl text-left">Descripcion:</p>        
        <p className="text-gray-200 p-2 text-md text-left">{description}</p>
        <p className="text-gray-300 font-bold text-xl text-left">Servicio realizado:</p>
        <p className="text-gray-200 p-2 text-md text-left">{worktype}</p>
        <p className="text-gray-300 font-bold text-xl text-left">Ubicación:</p>
        <p className="text-gray-200 p-2 text-md text-left">{location}</p>
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
      description: "Proyecto de impermeabilizacion en Hospital del Salvador",
      location: "Santiago, Región Metropolitana",
      worktype: "Impermeabilizacion Subterranea",
      buttonText: "Info"

    },
    {
      imageUrl: "../images/queilen.jpg",
      title: "Hospital de Queilen",
      description: "Proyecto de aplicacion de Inyeccion en Hospital de Queilen, Isla de Chiloé",
      location: "Chiloé, X Región de Los Lagos",
      worktype: "Servicio de Inyección",
      buttonText: "Info"
    },
    {
      imageUrl: "https://nrao.cl/wp-content/uploads/2020/11/alma-logo.png",
      title: "Proyecto Alma",
      description: "Proyecto de impermeabilizacion Observatorio Alma",
      location: "Atacama, III Región de Atacama",
      worktype: "Impermeabilizacion de Techo",
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