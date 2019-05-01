import React from 'react';
import './css/contactcontainer.css';
import ContactForm from './ContactForm';
import ContactLinks from './ContactLinks';

const ContactContainer = props => {
  return (
    <div className="contact-container">
      <ContactForm />
      <ContactLinks />
    </div>
  );
};

export default ContactContainer;
