import React from 'react';
import '../styles/Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Impermeabilizaciones Santiago
      </div>
      <ul className="navbar-links">
        <li><a href="#about-us">Quienes Somos</a></li>
        <li><a href="#services">Servicios</a></li>
        <li><a href="#projects">Proyectos</a></li>
        <li><a href="#brands">Marcas</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
