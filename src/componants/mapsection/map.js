import React from 'react';
import './map.css'; // Make sure to create this CSS file for custom styles

const MapSection = () => {
  return (
    <div className="container margin-auto">
      <h2>Our Location</h2>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.8796711729285!2d73.81273731524904!3d18.620858987366446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bff12cd9ddc3%3A0x408aecd0b9f4e8de!2sChinchwad%2C%20Pimpri-Chinchwad%2C%20Maharashtra%20411033%2C%20India!5e0!3m2!1sen!2sus!4v1629033200981!5m2!1sen!2sus"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
