import React from "react";
import "./map.css"; // Make sure to create this CSS file for custom styles

const MapSection = () => {
  return (
    <div className="container margin-auto">
      <h2 className="heading_main">Our Location</h2>
      <div className="map-container">
        <iframe
          title="Google Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.6875726742096!2d73.81070707465476!3d18.633117165727743!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9a5c46d032d%3A0x71bb9b25b90aad02!2sShirkande%20Dental%20clinic!5e0!3m2!1sen!2sin!4v1719734286707!5m2!1sen!2sin"
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
