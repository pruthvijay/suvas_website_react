// src/components/ContactForm.js

import React, { useState } from 'react';
import './styles/ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    description: '',
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form data here (e.g., send to API or email)
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      description: '',
    });
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        name="name"
        id="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        id="email"
        value={formData.email}
        onChange={handleChange}
        required
      />
      <label htmlFor="phone">Phone</label>
      <input
        type="tel"
        name="phone"
        id="phone"
        value={formData.phone}
        onChange={handleChange}
        required
      />
      <label htmlFor="description">Description</label>
      <textarea
        name="description"
        id="description"
        rows="5"
        value={formData.description}
        onChange={handleChange}
        required
      ></textarea>
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactForm;
