import React from 'react';

const ImageCard = ({ imageUrl, marca }) => {
  return (
    <div className="flex flex-col h-full rounded overflow-hidden shadow-lg bg-gray-100 text-blue-900">
      <img className="w-full h-40 object-content" src={imageUrl} alt={marca} />
      <div className="px-4 py-10 flex-grow">
        <div className="font-bold text-xl text-center mb-2">{marca}</div>
        </div>
      
    </div>
  );
};

const Marcas = () => {
  const cards = [
    {
      imageUrl: "https://http2.mlstatic.com/D_NQ_NP_942275-MLM25918648783_082017-O.webp",
      marca: "Alkoat",

    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQt76NIDPaSdLm1TsivItSa1wO3BsJrWjfJWA&s",
      marca: "Arva",
    },
    
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQHzcnyPDGSLOmKj_7IUjMyVdDlVggbyggU7w&s",
      marca: "Fester",
    },
    {
      imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjX6D99sbQRftI2KUnQs-GyZGiq6jtlerMqg&s",
      marca: "Sika",
    },

  ];

  return (
    <div className="container mx-auto px-40 py-10" id='proyectos'>
      <h2 className="text-3xl font-bold mb-6 text-center">Marcas Asociadas</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Marcas;