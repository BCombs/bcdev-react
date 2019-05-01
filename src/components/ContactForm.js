import React from 'react';
import './css/contactform.css';

const ContactForm = props => {
  return (
    <div className="contact-form-container">
      <form className="contact-form">
        <h3>Name:</h3>
        <input
          className="name-input"
          type="text"
          name="name"
          placeholder="Please enter name"
        />

        <br />

        <h3>Email:</h3>
        <input
          className="email-input"
          type="email"
          name="email"
          placeholder="Please enter email"
        />

        <br />

        <h3>Message:</h3>
        <textarea
          className="message-text-area"
          rows="5"
          placeholder="Please enter your message"
        />
      </form>
    </div>
  );
};

export default ContactForm;
