// src/components/About.js

import React, { useState } from 'react';
import './styles/About.css';

const About = () => {
  const [activeAmenity, setActiveAmenity] = useState(null);

  const amenities = [
    {
      id: 1,
      title: 'Capacity',
      description: 'Our party plot event lawn venue can accommodate events with a minimum of 200 guests and a maximum of up to 1000 guests. Whether youre planning a wedding, corporate event, birthday party, or engagement ceremony, our venue offers plenty of space and amenities to meet your needs. Our experienced team will work closely with you to ensure that your event is a success, from start to finish.so you can relax and enjoy your special day.',
      image: '/images/slide1.jpg',
      logo: '/logo192.png'
    },
    {
      id: 2,
      title: 'Capacity',
      description: 'Our party plot event lawn venue can accommodate events with a minimum of 200 guests and a maximum of up to 1000 guests. Whether youre planning a wedding, corporate event, birthday party, or engagement ceremony, our venue offers plenty of space and amenities to meet your needs. Our experienced team will work closely with you to ensure that your event is a success, from start to finish.so you can relax and enjoy your special day.',
      image: '/images/slide1.jpg',
      logo: '/logo192.png'
    },
    {
      id: 3,
      title: 'Capacity',
      description: 'Our party plot event lawn venue can accommodate events with a minimum of 200 guests and a maximum of up to 1000 guests. Whether youre planning a wedding, corporate event, birthday party, or engagement ceremony, our venue offers plenty of space and amenities to meet your needs. Our experienced team will work closely with you to ensure that your event is a success, from start to finish.so you can relax and enjoy your special day.',
      image: '/images/slide1.jpg',
      logo: '/logo192.png'
    },
    {
      id: 4,
      title: 'Capacity',
      description: 'Our party plot event lawn venue can accommodate events with a minimum of 200 guests and a maximum of up to 1000 guests. Whether youre planning a wedding, corporate event, birthday party, or engagement ceremony, our venue offers plenty of space and amenities to meet your needs. Our experienced team will work closely with you to ensure that your event is a success, from start to finish.so you can relax and enjoy your special day.',
      image: '/images/slide1.jpg',
      logo: '/logo192.png'
    },
    // ... Add other amenities here
  ];

  return (
    <div className="about">
      <h2>About Us</h2>
      <p>Welcome to our party plot, where stunning natural scenery meets modern amenities and world-class service. Located in the heart of Gujarat between Ahmedabad and Gandhinagar, our venue offers a serene oasis for your next event. Whether you're planning a wedding, corporate retreat, or family celebration, our stunning outdoor space can accommodate events of all sizes and styles.</p>
      <p>At our party plot event lawn venue, we believe that every event should be a unique and memorable experience. That's why we offer top-notch amenities such as catering, lighting, sound systems, and parking facilities, along with expert event planning services that are tailored to your specific needs and budget. Our goal is to provide a one-stop-shop for all your event needs, so you can focus on creating unforgettable memories with your loved ones.</p>
      <p>So if you're looking for a party plot event lawn venue that offers both natural beauty and modern convenience, look no further than our venue. Our team of experienced professionals will work closely with you to ensure that every detail of your event is taken care of, from start to finish.
.</p>

      <div className="amenities">
        {amenities.map((amenity) => (
          <div
            key={amenity.id}
            className="amenity-logo"
            onMouseEnter={() => setActiveAmenity(amenity)}
            onMouseLeave={() => setActiveAmenity(null)}
          >
            <img src={amenity.logo} alt={amenity.title} />
            <h3>{amenity.title}</h3>
          </div>
        ))}
      </div>

      {activeAmenity && (
        <div className="amenity-details">
          <img src={activeAmenity.image} alt={activeAmenity.title} />
          <h3>{activeAmenity.title}</h3>
          <p>{activeAmenity.description}</p>
        </div>
      )}
    </div>
  );
};

export default About;
