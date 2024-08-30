import React from 'react';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/HeroSection';
import Servicios from './components/services/Servicios';
// import HeroSection from './components/HeroSection';
// import AboutUs from './components/AboutUs';
// import Services from './components/Services';
// import FeaturedProjects from './components/FeaturedProjects';
// import Brands from './components/Brands';
// import ContactForm from './components/ContactForm';
import Footer from './components/footer/Footer';

//import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Servicios />
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
