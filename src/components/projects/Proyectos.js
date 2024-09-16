import React, { useState } from 'react';

// Componente para el carrusel de imágenes dentro del modal
const ModalImageCarousel = ({ images, title, onClose }) => {
  // Estado para mantener el índice de la imagen actual
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Función para avanzar a la siguiente imagen
  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Función para retroceder a la imagen anterior
  const prevImage = () => {
    setCurrentImageIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    // Fondo oscuro que cubre toda la pantalla
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      {/* Contenedor del modal */}
      <div className="bg-white p-4 rounded-lg max-w-3xl w-full">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {/* Contenedor de la imagen y botones de navegación */}
        <div className="relative">
          <img
            src={images[currentImageIndex]}
            alt={`Imagen ${currentImageIndex + 1}`}
            className="w-full h-auto"
          />
          {/* Botón para imagen anterior */}
          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            onClick={prevImage}
          >
            &#8592; {/* Flecha izquierda */}
          </button>
          {/* Botón para siguiente imagen */}
          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-2"
            onClick={nextImage}
          >
            &#8594; {/* Flecha derecha */}
          </button>
        </div>
        {/* Contador de imágenes */}
        <div className="text-center mt-2">
          Imagen {currentImageIndex + 1} de {images.length}
        </div>
        {/* Botón para cerrar el modal */}
        <button
          className="mt-4 bg-slate-600 text-white hover:bg-gray-200 hover:text-gray-900 font-bold py-2 px-4 rounded"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

// Componente para la tarjeta de imagen individual
const ImageCard = ({ images, title, description, worktype, location }) => {
  // Estado para controlar la visibilidad del modal
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="flex flex-col h-full rounded overflow-hidden shadow-lg bg-white text-gray-800">
      {/* Imagen principal de la tarjeta */}
      <img className="bg-white rounded-t-md w-full h-56" src={images[0]} alt={title} style={{ aspectRatio: "600/400", objectFit: "contain"}}/>
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
        {/* Botón para abrir el modal */}
        <button
          className="w-full bg-slate-600 text-white hover:bg-gray-200 hover:text-gray-900 font-bold py-2 px-4 rounded"
          onClick={() => setIsModalOpen(true)}
        >
          Info
        </button>
      </div>
      {/* Renderizado condicional del modal */}
      {isModalOpen && (
        <ModalImageCarousel
          images={images}
          title={title}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </div>
  );
};

// Componente principal de Proyectos
const Proyectos = () => {
  // Array de datos de los proyectos
  const cards = [
    {
      images: [
        "../images/salvador.jpg",
        "../images/Bentonita Hospital Salvador.jpg",
        "../images/Bentonita Hospital Salvador 1.jpg"
      ],
      title: "Hospital del Salvador",
      description: "Proyecto de impermeabilización bajo cota cero",
      location: "Santiago, Región Metropolitana",
      worktype: "Muro y Subterraneo, Membrana de Bentonita y Dren"
    },
    {
      images: [
        "../images/queilen.jpg",
        "../images/Estacionamiento Edificio.jpg",
        "../images/PVC Hospital Queilen.jpg"
      ],
      title: "Hospital de Queilen",
      description: "Proyecto impermeabilización bajo cota cero",
      location: "Chiloé, X Región de Los Lagos",
      worktype: "Proyecto de Impermeabilización, Membrana de PVC"
    },
    {
      images: [
        "https://hcv.cl/HCV2/wp-content/uploads/2020/06/LOGO-NUEVO-HOSPITAL2.png",
        "../images/IMG-20190205-WA0021.jpg",
        "../images/IMG-20201114-WA0032.jpg"
      ],
      title: "Hospital Claudio Vicuña, San Antonio",
      description: "Estacionamientos, Cubiertas, Estanques de Agua",
      location: "San Antonio, Región de Valparaiso",
      worktype: "Impermeabilizacion Poliuretano"
    },
    {
      images: [
        "https://images.adsttc.com/media/images/56fd/7332/e58e/ce7e/8500/0004/slideshow/12-_Attali.jpg?1459450655",
        "../images/TRANSOCEANICA 2 1ER PISO.jpg",
        "../images/IMG-20190206-WA0013 (1).jpg"
      ],
      title: "Edificio Transoceanica 2",
      description: "Proyecto de Impermeabilizacion Transoceanica 2",
      location: "Vitacura, Región Metropolitana",
      worktype: "Impermeabilizacion Poliuretano 100%"
    },
  ];

  return (
    // Contenedor principal con id para navegación
    <div className="container mx-auto px-4 py-8" id='proyectos'>
      <h2 className="text-3xl font-bold mb-6 text-center">Proyectos</h2>
      {/* Grid responsivo de tarjetas de proyectos */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Mapeo de los datos de proyectos a componentes ImageCard */}
        {cards.map((card, index) => (
          <ImageCard key={index} {...card} />
        ))}
      </div>
    </div>
  );
};

export default Proyectos;