// src/components/Home.js

import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './styles/Home.css';


const Home = () => {
  return (
    <div className="home">
      <Carousel
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
        infiniteLoop
        autoPlay
        interval={4000}
        transitionTime={600}
        swipeable
      >
        <div className="slide" style={{ backgroundImage: `url('/images/slide1.jpg')` }}>
          <div className="tagline">
            <h1>Your Perfect Party Destination</h1>
          </div>
        </div>
        <div className="slide" style={{ backgroundImage: `url('/images/slide2.jpg')` }}>
        </div>
        <div className="slide" style={{ backgroundImage: `url('/images/slide3.jpg')` }}>
        </div>
      </Carousel>
    </div>
  );
};

export default Home;
