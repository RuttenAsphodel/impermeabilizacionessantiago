// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Inicio from './components/hero/HeroSection';
import Nosotros from './components/about/About';
import Servicios from './components/services/Servicios';
import Proyectos from './components/projects/Proyectos';
import Marcas from './components/brands/Marcas';
import Contacto from './components/contact/Contacto';
import Footer from './components/footer/Footer';
import Whatsapp from './components/contact/FloatingWhatsApp';
import LinkedIn from './components/contact/LinkedIn';


function App() {
  return (
    <Router>
      <Navbar position='fixed' />
      <LinkedIn username="impermeabilizaciones-luis-espricaute/"/>
      <Whatsapp 
        phoneNumber="56950744995" // Reemplaza con el número de WhatsApp
        message="Hola! Estoy interesado en sus servicios." 
      />
      
      
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/nosotros" element={<Nosotros />} />
        <Route path="/servicios" element={<Servicios />} />
        <Route path="/proyectos" element={<Proyectos />} />
        <Route path="/marcas" element={<Marcas />} />
        <Route path="/contacto" element={<Contacto />} />
      </Routes>
      <Footer />
    </Router>

  );
}

export default App;

