import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/HeroSection';
import Footer from './components/footer/Footer';
import Servicios from './components/services/Servicios';
import Proyectos from './components/projects/Proyectos';
import Marcas from './components/brands/Marcas';
import Contacto from './components/contact/Contacto';
//import './App.css';




function App() {
  return (
  

    <div className="App">
     
      <Navbar />
      <Hero />
      <Servicios />
      <Proyectos />
      <Marcas />
      <Contacto />
      <Footer />
      

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
