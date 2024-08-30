import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/HeroSection';
import Footer from './components/footer/Footer';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Servicios from './components/services/Servicios';
import Proyectos from './components/projects/Proyectos';
//import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicios />
      <Proyectos />
      <Footer />
      
      <BrowserRouter>
      <Routes>
        {/* Tus otras rutas aquí */}
        <Route path="/servicios" element={<Servicios />} />
      </Routes>
    </BrowserRouter>
      {/* <HeroSection />
      <AboutUs />
      <FeaturedProjects />
      <Brands />
      <ContactForm />
      <Footer /> */}
    </div>
  );
}

export default App;
