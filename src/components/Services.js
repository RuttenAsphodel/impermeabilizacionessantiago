import React from 'react';
import '../styles/Services.css';
import fotoinyeccion from '../assets/images/foto Inyeccion 2.jpg'
import fototecho from '../assets/images/PVC Cubierta edificio.jpg'
import fotosub from '../assets/images/Estacionamiento Edificio.jpg'

function Services() {
  return (
    <section id="services" className="services">
      <div>
        <h2>Nuestros Servicios</h2>
      </div>
    
      <div class='contenedor-tarjetas'>
        <div class='card azul'>
          <h3>Servicio Inyección</h3>
          <img src = {fotoinyeccion} alt=''></img>
          <p>Nuestro servicio especializado de inyección está diseñado para sellar e impermeabilizar eficazmente su propiedad, previniendo filtraciones y daños por agua. Nuestro equipo de expertos utiliza técnicas avanzadas y materiales de alta calidad para garantizar una protección duradera.</p>
        </div>
        
        <div class='card azul'>
          <h3>Impermeabilización de Techos</h3>
          <img src = {fototecho} alt=''></img>
          <p>Proteja su techo de los daños causados por el agua con nuestros servicios profesionales de impermeabilización. Utilizamos las últimas técnicas y materiales para garantizar que su techo esté sellado y protegido contra los elementos.</p>
        </div>
        
        <div class='card azul'>
          <h3>Impermeabilización Subterranea</h3>
          <img src = {fotosub} alt=''></img>
          <p>Prevenga la entrada de agua y la acumulación de humedad en su sótano con nuestras soluciones integrales de impermeabilización. Nuestro equipo evaluará su sótano y le proporcionará la mejor estrategia para mantener su propiedad seca y protegida.</p>
        </div>
      
      </div>
      
      
    </section>
  );
}

export default Services;
