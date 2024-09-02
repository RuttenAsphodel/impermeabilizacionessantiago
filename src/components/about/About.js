import React from 'react';

const Nosotros = () => {
  return (
    <div className="min-h-screen bg-gray-100" id='nosotros'>
      <main className="py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-extrabold text-gray-900 text-center mb-8">Quiénes Somos</h1>
          
          <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Impermeabilizaciones Santiago</h2>
            <p className="text-lg text-gray-600 mb-6">
              Somos una empresa líder en soluciones de impermeabilización en Santiago y sus alrededores. Con más de una década de experiencia, nos hemos especializado en proporcionar servicios de alta calidad para proteger su hogar o negocio contra los daños causados por el agua.
            </p>
            <p className="text-lg text-gray-600 mb-6">
              Nuestro equipo de profesionales altamente capacitados está comprometido con la excelencia en cada proyecto, utilizando las técnicas más avanzadas y materiales de primera calidad para garantizar resultados duraderos.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestra Misión</h2>
            <p className="text-lg text-gray-600 mb-6">
              Nuestra misión es proporcionar soluciones de impermeabilización confiables y duraderas, protegiendo las propiedades de nuestros clientes y mejorando su calidad de vida. Nos esforzamos por ofrecer un servicio excepcional, asesoramiento experto y resultados que superen las expectativas.
            </p>
          </section>

          <section className="bg-white shadow-lg rounded-lg p-8 mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Nuestros Servicios</h2>
            <ul className="list-disc list-inside text-lg text-gray-600 mb-6">
              <li>Impermeabilización de techos y terrazas</li>
              <li>Servicio de Inyección</li>
              <li>Impermeabilización de estructuras subterráneas</li>
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
    </div>
  );
};

export default Nosotros;