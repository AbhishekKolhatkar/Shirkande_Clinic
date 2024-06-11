import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "../header/header.css"
import {brand_logo,hamburger} from "../../../assets/images/images"

const HomeHeader = () => {

  const menuItems = (
    <ul>
      <li>
        <button className="sign_up_btn_new after_mobile" >
          Sign Up
        </button>
      </li>
      <li>
        <a href="/about-us">About Us</a>
      </li>
      <li>
        <a href="/features">Features</a>
      </li>
     
      <li>
        <a href="/contact-us">Contact Us</a>
      </li>
    </ul>
  );

  // const [activeLink, setActiveLink] = useState(null);

  // const handleLinkClick = (index) => {
  //     setActiveLink(index);
  // };

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
                    <button
                      className="hamburger-menu"
                    >
                     <img src={hamburger} alt="hamburger_menu"/>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default HomeHeader;
