import React, { useState } from 'react';
import emailjs from '@emailjs/browser';

const Contacto = () => {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    region: '',
    ciudad: '',
    telefono: '',
    tipoTrabajo: '',
    superficie: '',
    descripcion: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace these with your actual EmailJS service ID, template ID, and user ID
      const result = await emailjs.send(
        'service_54oj9rj',
        'template_3lbivid',
        formData,
        'DJYkf2kWxptD2qDX3'
      );

      console.log('Email successfully sent!', result);
      setSubmitStatus('success');
      setFormData({
        nombre: '',
        email: '',
        region: '',
        ciudad: '',
        telefono: '',
        tipoTrabajo: '',
        superficie: '',
        descripcion: ''
      });
    } catch (error) {
      console.error('Failed to send email:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };
        // Aquí puedes agregar la lógica para enviar los datos del formulario
  

  return (
    <form onSubmit={handleSubmit} className="max-w-6xl mx-auto p-6">
      <div>
        <h2 className="text-3xl font-bold mb-6 text-center" id='contacto'>Contactanos</h2>  
      </div>  
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">Nombre *</label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            value={formData.nombre}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Nombre"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email de contacto *</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Email"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="region" className="block text-sm font-medium text-gray-700">Región</label>
          <select
            id="region"
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value=""  disabled={true}>Seleccione una región</option>
            <option value="Arica-Parinacota">Arica y Parinacota</option>
            <option value="Tarapaca">Tarapacá</option>
            <option value="Antofagasta">Antofagasta</option>
            <option value="Atacama">Atacama</option>
            <option value="Coquimbo">Coquimbo</option>
            <option value="Valparaiso">Valparaíso</option>
            <option value="Metropolitana">Región Metropolitana de Santiago</option>
            <option value="O'higgins">Libertador General Bernardo O'Higgins</option>
            <option value="Maule">Maule</option>
            <option value="Ñuble">Ñuble</option>
            <option value="BioBio">Biobío</option>
            <option value="Araucania">La Araucanía</option>
            <option value="Los Rios">Los Ríos</option>
            <option value="Los Lagos">Los Lagos</option>
            <option value="Aysen">Aysén del General Carlos Ibáñez del Campo</option>
            <option value="Magallanes">Magallanes y de la Antártica Chilena</option>
            {/* Agrega aquí las opciones necesarias */}
          </select>
        </div>
        <div>
          <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">Ciudad/Comuna</label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            value={formData.ciudad}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Ciudad/Comuna"
          />
        </div>
        <div>
          <label htmlFor="telefono" className="block text-sm font-medium text-gray-700">Teléfono</label>
          <input
            type="tel"
            id="telefono"
            name="telefono"
            value={formData.telefono}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Teléfono"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
        <div>
          <label htmlFor="tipoTrabajo" className="block text-sm font-medium text-gray-700">Tipo de trabajo</label>
          <select
            id="tipoTrabajo"
            name="tipoTrabajo"
            value={formData.tipoTrabajo}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          >
            <option value="" disabled={true}>-- Seleccione uno de la lista --</option>
            <option value="Impermabilización Subterranea">Impermabilización Subterranea</option>
            <option value="Servicio de Inyección">Servicio de Inyección</option>
            <option value="Impermabilización de Techos">Impermabilización de Techos</option>
            {/* Agrega aquí las opciones necesarias */}
          </select>
        </div>
        
        <div>
          <label htmlFor="superficie" className="block text-sm font-medium text-gray-700">Superficie en m2 (aproximadamente)</label>
          <input
            type="number"
            id="superficie"
            name="superficie"
            value={formData.superficie}
            onChange={handleChange}
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            placeholder="Superficie en m2"
          />
        </div>
      </div>

      <div className="mt-4">
        <label htmlFor="descripcion" className="block text-sm font-medium text-gray-700">Descripción del trabajo</label>
        <textarea
          id="descripcion"
          name="descripcion"
          value={formData.descripcion}
          onChange={handleChange}
          rows="4"
          className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          placeholder="Escriba aquí una breve descripción del trabajo"
        ></textarea>
      </div>

      <div className="mt-6">
        <button 
          type="submit" 
          className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          disabled={isSubmitting}
          >
            {isSubmitting ? "Enviando..'" : "Enviar"}
          </button>
      </div>

      {submitStatus === 'success' && (
        <div className="mt-4 text-green-600">
          ¡Mensaje enviado con éxito! Nos pondremos en contacto contigo pronto.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="mt-4 text-red-600">
          Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo más tarde.
        </div>
      )}
    </form>
  );
};

export default Contacto;