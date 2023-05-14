// src/components/ContactUs.js

import React from 'react';
import './styles/ContactUs.css';
import ContactForm from './ContactForm'; // Add this import

const ContactUs = () => {
  return (
    <div className="contact-us">
      <h2>Contact Us</h2>
      <div className="contact-content">
        <div className="contact-info">
          <div className="info-item">
            <h3>Email</h3>
            <p>example@example.com</p>
          </div>
          <div className="info-item">
            <h3>Phone</h3>
            <p>+1 (123) 456-7890</p>
          </div>
          <div className="info-item">
            <h3>Address</h3>
            <p>123 Main Street, Anytown, USA</p>
          </div>
          <ContactForm /> {/* Add the contact form here */}
        </div>
        <div className="map">
          <iframe
            title="Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509464!2d144.9537353159192!3d-37.817209379751864!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad646b5d2ba4df7%3A0x4045675218ccd90!2sMelbourne%20VIC%2C%20Australia!5e0!3m2!1sen!2sus!4v1620183762000!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
