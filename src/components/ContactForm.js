import React from 'react';
import '../styles/ContactForm.css';

function ContactForm() {
  return (
    <section id="contact" className="contact-form">
      <h2>Formulario de Cotización</h2>
      <form>
        <input type="text" placeholder="Nombre" required />
        <input type="email" placeholder="Correo" required />
        <textarea placeholder="Mensaje" required></textarea>
        <button type="submit">Enviar</button>
      </form>
    </section>
  );
}

export default ContactForm;
