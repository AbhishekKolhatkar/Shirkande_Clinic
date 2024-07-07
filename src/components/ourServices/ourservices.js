import React, { useState } from "react";
import "./ourservice.css";
import { Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { leaf_right, tooth } from "../../assets/images/images";

const services = [
  { id: 1, name: "Service Name 1", icon: "🌿", type: "AYURVEDA" },
  { id: 2, name: "Service Name 2", icon: "🪴", type: "AYURVEDA" },
  { id: 3, name: "Service Name 3", icon: "🍀", type: "AYURVEDA" },
  { id: 4, name: "Service Name 4", icon: "🌱", type: "AYURVEDA" },
  { id: 5, name: "Service Name 5", icon: "🪥", type: "DENTAL" },
  { id: 6, name: "Service Name 6", icon: "🦷", type: "DENTAL" },
  { id: 7, name: "Service Name 7", icon: "🪚", type: "DENTAL" },
  { id: 8, name: "Service Name 8", icon: "🦴", type: "DENTAL" },
];

function Ourservices(props) {
  const [selectedService, setSelectedService] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const ayurvedaServices = services.filter((service) => service.type === "AYURVEDA");
  const dentalServices = services.filter((service) => service.type === "DENTAL");

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Number of slides to show at a time
    slidesToScroll: 1, // Number of slides to scroll at a time
    autoplay: true,
    autoplaySpeed: 2000,
    swipeToSlide: true,
    arrow:false,
    rtl: false, // Set to true for left-to-right sliding
  };

  const handleClick = (service) => {
    setSelectedService(service);
    setModalVisible(true);
  };

  const renderServices = (services) => {
    return services.map((service) => (
      <div
        key={service.id}
        className="service-icon"
        onClick={() => handleClick(service)}
      >
        <h2>{service.icon}</h2>
        <p>{service.name}</p>
      </div>
    ));
  };

  return (
    <section className="container margin-auto">
      <div className="row justify-content-between">
        <img src={leaf_right} alt="leaf" className="leaf-wd" />
        <img src={tooth} alt="leaf" className="tooth" />
        <h3 className="mb-5 heading_main">OUR SERVICES</h3>
        <div className="col-lg-6">
          <h6 className="name-hollow text-start">AYURVEDA</h6>
          <div className="services-data-left1">
          <Slider {...settings}>
            {renderServices(ayurvedaServices)}
          </Slider>
          </div>
         
        </div>
        <div className="col-lg-6">
          <h6 className="name-hollow text-end">DENTAL</h6>
          <div className="services-data-right1">
          <Slider {...settings}>
            {renderServices(dentalServices)}
          </Slider>
          </div>
          
        </div>
      </div>

      <Modal show={modalVisible} onHide={() => setModalVisible(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>{selectedService?.name}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Content for {selectedService?.name}</p>
        </Modal.Body>
      </Modal>
    </section>
  );
}

export default Ourservices;
