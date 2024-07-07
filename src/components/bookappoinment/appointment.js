import React, { useState } from "react";
import {
  braces,
  green_left,
  green_right,
  yoga,
} from "../../assets/images/images";
import "./appointment.css";

function Appointment(props) {
  const [formData, setFormData] = useState({
    serviceType: "",
    doctor: "",
    patientName: "",
    age: "",
    date: "",
    time: "",
  });

  const doctorsByService = {
    Ayurvedic: [
      { name: "Abhishek", phone: "+916260428773" },
      { name: "Hrushikesh", phone: "+919359625756" },
      // Add more Ayurvedic doctors
    ],
    Dental: [
      { name: "Piyush", phone: "+917219250460" },
      { name: "Nikhil", phone: "+918850209401" },
      // Add more Dental doctors
    ],
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    if (name === "serviceType") {
      setFormData((prevState) => ({
        ...prevState,
        doctor: "", // Reset the doctor when service type changes
      }));
    }
  };

  const handleBookAppointment = () => {
    const { serviceType, doctor, patientName, age, date, time } = formData;
    const selectedDoctor = doctorsByService[serviceType].find(
      (d) => d.name === doctor
    );
    const phoneNumber = selectedDoctor ? selectedDoctor.phone : "+916260428773"; // Default phone number
    const message = `Hi, I want to book an appointment.\nService: ${serviceType}\nDoctor: ${doctor}\nPatient Name: ${patientName}\nAge: ${age}\nDate: ${date}\nTime: ${time}`;
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappUrl;
  };

  const renderDoctorOptions = () => {
    const { serviceType } = formData;
    if (!serviceType) return null;

    return doctorsByService[serviceType].map((doctor) => (
      <option key={doctor.name} value={doctor.name}>
        {doctor.name}
      </option>
    ));
  };

  return (
    <>
      <div className="main-search-section">
        <img src={green_right} alt="shadow" className="left-shadow" />
        <img src={green_left} alt="shadow" className="right-shadow" />
        <div className="search-container">
          <div className="row">
            <div className="col-lg-2 border-line">
              <select
                name="serviceType"
                className="select_tag"
                value={formData.serviceType}
                onChange={handleChange}
              >
                <option value="">Select Service</option>
                <option value="Dental">Dental</option>
                <option value="Ayurvedic">Ayurvedic</option>
              </select>
            </div>
            <div className="col-lg-2 border-line">
              <select
                name="doctor"
                className="select_tag"
                value={formData.doctor}
                onChange={handleChange}
                disabled={!formData.serviceType}
              >
                <option value="">Select Doctor</option>
                {renderDoctorOptions()}
              </select>
            </div>
            <div className="col-lg-2 border-line">
              <input
                type="search"
                placeholder="Patient Name"
                className="select_tag"
                name="patientName"
                value={formData.patientName}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-2 border-line">
              <select
                name="age"
                id="Age"
                className="select_tag"
                value={formData.age}
                onChange={handleChange}
              >
                <option value="">Age</option>
                {/* Loop through ages from 1 to 70 and generate options */}
                {[...Array(70)].map((_, index) => (
                  <option key={index + 1} value={index + 1}>
                    {index + 1}
                  </option>
                ))}
                {/* Add age options */}
                <option value="20">20</option>
                <option value="21">21</option>
                {/* Add more options as needed */}
              </select>
            </div>
            <div className="col-lg-2 border-line">
              <input
                type="date"
                name="date"
                id="Date"
                className="select_tag"
                value={formData.date}
                onChange={handleChange}
              />
            </div>
            <div className="col-lg-2">
              <input
                type="time"
                name="time"
                id="Time"
                className="select_tag"
                value={formData.time}
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
      </div>
      <section className="container-fluid margin-auto">
        <div className="row">
          <h3 className="margin-top-auto">HEADLINE</h3>
          <div className="col-lg-12">
            <div className="row appointement-booking">
              <div className="book-container">
                <button
                  className="Book-Appoinment-btn"
                  onClick={handleBookAppointment}
                >
                  Book Appointment
                </button>
              </div>
              <div className="d-flex justify-content-center">

                <div className="p-0 w-50">
                  <img src={yoga} alt="yoga" className="img-wdt" />
                </div>
                <div className="p-0 w-50">
                  <img src={braces} alt="braces" className="img-wdt" />
                <div className="p-0">
                  <img src={yoga} alt="yoga" />
                </div>
                <div className="p-0">
                  <img src={braces} alt="braces" />
                </div>
              </div>
              <div className="counter-section">
                <div className="counts">
                  <h6>05</h6>
                  <p>Satisfaction Rate</p>
                </div>
                <div className="counts">
                  <h6>08+</h6>
                  <p>Years experience</p>
                </div>
                <div className="counts">
                  <h6>250+</h6>
                  <p>Patients</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Appointment;
