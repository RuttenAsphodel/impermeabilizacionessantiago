import React from 'react';
import LogoMarcaSika from '../images/marcas/sika.png'
import LogoMarcaCave from '../images/marcas/cave_logo.jpg'
import LogoMarcaDynal from '../images/marcas/dynal.png'
import LogoMarcaMc from '../images/marcas/mcbeauchemie.jpg'
import LogoMarcaAltec from '../images/marcas/altec_soprema_logo.jfif'
import LogoMarcaDesmopol from '../images/marcas/desmopol.png'

function Marcas(){

  return (
  <div className="bg-background py-16 px-6 max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Marcas que Respaldan Nuestro Trabajo</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={ LogoMarcaCave}
                  alt="Marca 1"
                  width={120}
                  height={60}
                  className="rounded-t-md object-cover w-full h-56"
                  style={{ aspectRatio: "120/60", objectFit: "contain" }}
                />
              </div>
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={ LogoMarcaDesmopol }
                  alt="Marca 2"
                  width={120}
                  height={60}
                  className="rounded-t-md object-cover w-full h-56"
                  style={{ aspectRatio: "120/60", objectFit: "contain" }}
                />
              </div>
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={ LogoMarcaDynal }
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
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={LogoMarcaMc}
                  alt="Marca 5"
                  width={120}
                  height={60}
                  className="rounded-t-md object-cover w-full h-56"
                  style={{ aspectRatio: "120/60", objectFit: "contain" }}
                />
              </div>
              <div className="bg-muted rounded-md p-6 flex items-center justify-center">
                <img
                  src={LogoMarcaAltec}
                  alt="Marca 6"
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