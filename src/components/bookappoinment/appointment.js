import React from "react";
import {
  braces,
  green_left,
  green_right,
  yoga,
} from "../../assets/images/images";
import "./appointment.css";

function Appointment(props) {
  const handleBookAppointment = () => {
    const phoneNumber = "+916260428773"; // Replace with the actual phone number
    const message = "Hi, I want to book an appointment";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.location.href = whatsappUrl;
  };

  return (
    <>
      <div className="main-search-section">
        <img src={green_right} alt="shadow" className="left-shadow" />
        <img src={green_left} alt="shadow" className="right-shadow" />
        <div className="search-container">
          <div className="row">
            <div className="col-lg-2 border-line">
              <input
                type="search"
                placeholder="Ayurvedic/Dental "
                className="select_tag"
              />
            </div>
            <div className="col-lg-2 border-line">
              <select name="Doctors" id="Doctors" className="select_tag">
                <option value="Doctors">Doctors</option>
              </select>
            </div>
            <div className="col-lg-2 border-line">
              <select name="Doctors" id="Doctors" className="select_tag">
                <option value="Doctors">Doctors</option>
              </select>
            </div>
            <div className="col-lg-2 border-line">
              <select name="Age" id="Age" className="select_tag">
                <option value="Age">Age</option>
              </select>
            </div>
            <div className="col-lg-2 border-line">
              {" "}
              <select name="Date" id="Date" className="select_tag">
                <option value="Date">Date</option>
              </select>
            </div>
            <div className="col-lg-2 ">
              <select name="Time" id="Time" className="select_tag">
                <option value="Time">Time</option>
              </select>
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
                  Book Appoinment
                </button>
              </div>
              <div className="d-flex justify-content-center">
                <div className=" p-0">
                  <img src={yoga} alt="yoga" />
                </div>
                <div className="p-0">
                  <img src={braces} alt="braces" />
                </div>
              </div>
              <div className="counter-section">
                <div className="counts">
                  <h6>05</h6>
                  <p>Satifaction Rate</p>
                </div>
                <div className="counts">
                  <h6> 08+</h6>
                  <p>Years experience</p>
                </div>
                <div className="counts">
                  <h6> 250+</h6>
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
