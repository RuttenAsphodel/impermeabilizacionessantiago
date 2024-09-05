import React from 'react';
import LogoMarcaAlkoat from '../images/marcas/alkoat.png'
import LogoMarcaAlva from '../images/marcas/arva.png'
import LogoMarcaFester from '../images/marcas/fester.png'
import LogoMarcaSika from '../images/marcas/sika.png'

function Marcas(){

  return (
  <div className="bg-background py-16 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Marcas que Respaldan Nuestro Trabajo</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={ LogoMarcaAlkoat}
                  alt="Marca 1"
                  width={120}
                  height={60}
                  className="rounded-t-md object-cover w-full h-56"
                  style={{ aspectRatio: "120/60", objectFit: "contain" }}
                />
              </div>
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={ LogoMarcaAlva }
                  alt="Marca 2"
                  width={120}
                  height={60}
                  className="rounded-t-md object-cover w-full h-56"
                  style={{ aspectRatio: "120/60", objectFit: "contain" }}
                />
              </div>
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={ LogoMarcaFester }
                  alt="Marca 3"
                  width={120}
                  height={60}
                  className="rounded-t-md object-cover w-full h-56"
                  style={{ aspectRatio: "120/60", objectFit: "contain" }}
                />
              </div>
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={LogoMarcaSika}
                  alt="Marca 4"
                  width={120}
                  height={60}
                  className="rounded-t-md object-cover w-full h-56"
                  style={{ aspectRatio: "120/60", objectFit: "contain" }}
                />
              </div>
            </div>
          </div>
  );
};

export default Marcas;