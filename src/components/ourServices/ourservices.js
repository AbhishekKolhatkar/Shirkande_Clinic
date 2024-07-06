import React, { useState, useEffect } from "react";
import "./ourservice.css";
import { Modal } from "react-bootstrap";
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
  const [ayurvedaServices, setAyurvedaServices] = useState([]);
  const [dentalServices, setDentalServices] = useState([]);

  useEffect(() => {
    setAyurvedaServices(
      services.filter((service) => service.type === "AYURVEDA")
    );
    setDentalServices(services.filter((service) => service.type === "DENTAL"));
  }, []);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setAyurvedaServices((prevServices) => shiftServices(prevServices));
      setDentalServices((prevServices) => shiftServices(prevServices));
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  const shiftServices = (services) => {
    if (services.length > 0) {
      const [first, ...rest] = services;
      return [...rest, first];
    }
    return services;
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
          <div className="services-data-right">
            {renderServices(ayurvedaServices)}
          </div>
        </div>
        <div className="col-lg-6">
          <h6 className="name-hollow text-end">DENTAL</h6>
          <div className="services-data-left">
            {renderServices(dentalServices)}
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
