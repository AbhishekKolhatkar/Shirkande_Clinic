import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../header/header.css";
import {
  brand_logo,
  hamburger,
  close_icon,
} from "../../../assets/images/images";

const HomeHeader = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const menuItems = (
    <ul>
      <li>
        <button className="sign_up_btn_new after_mobile">Sign Up</button>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
      <li>
        <NavLink to="/features">Features</NavLink>
      </li>
      <li>
        <NavLink to="/contact-us">Contact Us</NavLink>
      </li>
    </ul>
  );

  return (
    <>
      {/* Navigation Section */}
      <header className="head_sec_pro_rect">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="head_sec_pro_rect_inner">
                <div className="head_sec_pro_rect_inner_logo">
                  <Link to="/">
                    <img src={brand_logo} alt="brand_logo" />
                  </Link>
                </div>
                <div className="head_sec_pro_rect_inner_menu">
                  <div className="navbar">
                    <ul>
                      <li>
                        <NavLink to="/about-us">About Us</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Services">Services</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Doctors">Doctors</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Testimonials">Testimonials</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Gallery">Gallery</NavLink>
                      </li>
                      <li>
                        <NavLink to="/Blog">Blog </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <button className="hamburger-menu" onClick={toggleDrawer}>
                      <img src={hamburger} alt="hamburger_menu" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Drawer Menu */}
      <div className={`drawer ${isDrawerOpen ? "open" : ""}`}>
        <div className="drawer-header">
          <button className="close-btn" onClick={toggleDrawer}>
            {/* <img src={close_icon} alt="close_icon" /> */}
            <p>X</p>
          </button>
        </div>
        <div className="drawer-menu">{menuItems}</div>
      </div>

      {/* Overlay */}
      {isDrawerOpen && <div className="overlay" onClick={toggleDrawer}></div>}
    </>
  );
};

export default HomeHeader;
