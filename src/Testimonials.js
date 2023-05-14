// src/components/Testimonials.js

import React, { useState, useEffect } from 'react';
import './styles/Testimonials.css';



  const testimonialsData = [
    {
        title: "Great Venue!",
        content: "We had a fantastic time at Suvas farm & Party plot. The staff was friendly and accommodating, and the facilities were top-notch.",
        author: "John Doe"
      },
      {
        title: "Amazing Experience",
        content: "I hosted my wedding at Suvas farm & Party plot, and it was a dream come true. The location was beautiful, and the staff went above and beyond to make our day special.",
        author: "Jane Smith"
      },
    // ... Add other testimonials here
  ];

  const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
  
    useEffect(() => {
      const timer = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonialsData.length);
      }, 5000);
  
      return () => clearInterval(timer);
    }, []);
  
    return (
      <section className="testimonials" id="testimonials">
        <h2>Testimonials</h2>
        <div className="testimonial-slider">
          {testimonialsData.map((testimonial, index) => (
            <div
              key={index}
              className={`testimonial-item${currentIndex === index ? ' active' : ''}`}
            >
              <h3>{testimonial.title}</h3>
              <p>{testimonial.content}</p>
              <p className="author">- {testimonial.author}</p>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Testimonials;