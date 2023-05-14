// src/components/Gallery.js

import React, { useState } from 'react';
import './styles/Gallery.css';

const images = [
    '/images/slide1.jpg',
    '/images/slide1.jpg',
    '/images/slide1.jpg',
    '/images/slide1.jpg',
];

const Gallery = () => {
    const [popupImage, setPopupImage] = useState(null);
  
    const handleClick = (image) => {
      setPopupImage(image);
    };
  
    const closePopup = () => {
      setPopupImage(null);
    };
  
    return (
      <section className="gallery" id="gallery">
        <h2>Gallery</h2>
        <div className="image-grid">
          {images.map((image, index) => (
            <div key={index} className="image-item" onClick={() => handleClick(image)}>
              <img src={image} alt={`Gallery image ${index + 1}`} />
            </div>
          ))}
        </div>
        {popupImage && (
          <div className="popup" onClick={closePopup}>
            <img src={popupImage} alt="Popup" />
          </div>
        )}
      </section>
    );
  };
  
  export default Gallery;
