import React from 'react';

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-gray-100 text-justify" id='nosotros' >
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Quiénes Somos</h1>
          
          <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Impermeabilizaciones Luis Espricaute</h2>
            <p className="text-lg text-gray-600 mb-6">
            Empresa líder en soluciones de impermeabilizacion,  dando respuesta a cada uno de los problemas ocasionados por el agua, disminuyendo las post ventas, con servicio de calidad protegiendo la integridad de las estructuras en el corto y largo plazo.

            </p>
            <p className="text-lg text-gray-600 mb-6">
            Dándole al cliente  la tranquilidad  a las problemáticas de filtraciones de agua, asegurando  el buen funcionamiento de las impermeabilizaciones a través del tiempo.</p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 mb-6">
            Proporcionar soluciones que puedan garantizar la durabilidad e integridad de las estructuras.
            </p>
            <p className="text-lg text-gray-600 mb-6">
            Ofrecemos un servicio integral acompañando en cada etapa de su proyecto,  con asesoramiento experto.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
              <li>Impermeabilización de Cubiertas</li>
              <li>Servicio de Inyección en grietas y muros subterraneos</li>
              <li>Impermeabilización con cementicios flexibles, estanques de agua</li>
              <li>Impermeabilización zonas humedas y bajo pavimento</li>
              <li>Impermeabilización con poliuretanos, rampas y helipuertos</li>
              <li>Impermeabilización con poliuretanos, terrazas y jardineras</li>
              <li>Impermeabilización con membranas de bentonita</li>
              <li>Impermeabilización PVC</li>
              <li>Impermeabilización HDPE y Green Roof</li>
              <li>Asesoría y consultoría en impermeabilización</li>
            </ul>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Por Qué Elegirnos</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Experiencia Comprobada</h3>
                <p className="text-gray-600">Más de 10 años de experiencia en el sector.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Calidad Garantizada</h3>
                <p className="text-gray-600">Utilizamos solo materiales de primera calidad.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Equipo Profesional</h3>
                <p className="text-gray-600">Personal altamente capacitado y certificado.</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">Atención Personalizada</h3>
                <p className="text-gray-600">Nos adaptamos a las necesidades específicas de cada cliente.</p>
              </div>
            </div>
          </section>
        </div>
      </main>
      <div>
      </div>
    </div>
  );
};


export default Nosotros;