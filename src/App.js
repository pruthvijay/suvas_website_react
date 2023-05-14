import React from 'react';

import Header from './Header';
import Home from './Home';
import About from './AboutUs';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Gallery from './Gallery';
import './styles/styles.css';

const App = () => {
  return (
    <div className="App">
      <Header />
      <Home />
      <div id="about-us">
        <About />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="gallery">
      <Gallery />
      </div>
      <div id="contact-us">
        <ContactUs />
      </div>
    </div>
  );
};

export default App;
