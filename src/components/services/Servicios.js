import React from 'react';
import Marcas from '../brands/Marcas';

const ImageCard = ({ imageUrl, title, description, buttonText }) => {
  return (
    <div className="flex flex-col h-full rounded overflow-hidden shadow-lg bg-white text-gray-800">
      <img className="w-full h-56 object-cover" src={imageUrl} alt={title} />
      <div className="px-4 py-4 flex-grow">
        <div className="font-bold text-xl mb-2">{title}</div>
        <p className="text-gray-800 text-md text-justify">{description}</p>
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
      imageUrl: "https://i.ibb.co/DVGCrc7/inyeccion.jpg",
      title: "SERVICIO DE INYECCIONES",
      description: "Nuestro servicio de inyección esta diseñado para reparar y sellar, filtraciones, en el Hormigon con resinas Flexibles  para la  eliminación de vías de agua de alta y baja presión, con materiales acuarreactivos qué reaccionan y encapsulan el agua una vez entre en contacto con esta.",
      buttonText: "Cotizar"
    },
    {
      imageUrl: "https://i.ibb.co/M59Ngqc/cubiertas.jpg", // reemplaza imagen por la de altodelparque
      title: "IMPERMEABILIZACION  DE CUBIERTAS",
      description: "Proteja sus edificaciones con Sistemas de Impermeabilizacion, en edificios, casas o obras civiles con Poliuretanos, Metacrilato, Cementicios Flexibles, Geoceldas drenajes, Láminas de PVC, Pinturas Acrílicas, Sistemas de Bentonitas, Dren con Geotextil abarcando una amplia gama de edificaciones.",
      buttonText: "Cotizar"
    },
    {
      imageUrl: "https://i.ibb.co/b72Wj03/bentonita.jpg",
      title: "IMPERMEABILIZACIONES EN MUROS SUBTERRÁNEO CONTRATERRENO O BAJO COTA CERO",
      description: "Edificios , Estacionamientos, Centros comerciales obras de mayor envergadura como Hospitales, etc. Con diferentes opciones, Bentonitas auto reparables, cordones de bentonita, HDPE para redirigir el agua, Cementicios Cristalizantes, Poliuretanos bajo pavimentos.",
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