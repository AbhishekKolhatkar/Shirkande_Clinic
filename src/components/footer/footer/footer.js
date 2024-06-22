import { Link, NavLink } from "react-router-dom";
import "./footer.css";
import { right_arrow,facebook,
  instagram,
  linkedIn,
  youtube,
  dental_image } from "../../../assets/images/images";

const HomeFooter = () => {
  return (
    <>
      <footer className="footer-section">
        <div className="container">
            <div className="footer-section-main">
            <div className="row">
            <div className="col-lg-12 col-md-12">
                <div className="row footer-section-main-list">
                <div className="col-lg-3 col-md-2">
                    <h4>Company</h4>
                    <ul>
                        <li>Home</li>
                        <li>Services</li>
                        <li>About Us</li>
                        <li>Why Choose Us</li>
                        <li>Testimonials</li>
                        <li>Contact Us</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-2">
                <h4>Pages</h4>
                    <ul>
                        <li>404</li>
                        <li>Licensing</li>
                        <li>Instructions</li>
                        <li>Style Guide</li>
                        <li>Changelog</li>
                    </ul>
                </div>
                <div className="col-lg-3 col-md-4">
                    <div className="left-align">
                    <h4>Address</h4>
                    <p className="wd">123 Dental Avenue City ville, State 12345 United States</p>
                    <a href="#">View on Maps </a>
                    </div>
                    <div className="left-align">
                    <h4>Inquiries</h4>
                    <p>(123) 456-7890</p>
                    <p>info@57dentcare.com</p>
                    </div>
                </div>
                <div className="col-lg-3 col-md-4">
                <div className="left-align">
                    <h4>Newsletter</h4>
                    <p>Stay Updated with our Latest News </p>
                    <div className="email-container">
                    <input type="text" placeholder="Your Email"/>
                    <button className="email-enter"><img src={right_arrow} alt="right arrow"/></button>
                    </div>
                    </div>
                    <div className="left-align">
                    <h4>Follow Us</h4>
                    <div className="footer-icon-section">
                        <img src={facebook} alt="facebook"/>
                        <img src={instagram} alt="facebook"/>
                        <img src={linkedIn} alt="facebook"/>
                        <img src={youtube} alt="facebook"/>
                    </div>
                    </div>
                </div>
                </div>
            </div>
          </div>
            </div>
        </div>
      </footer>
    </>
  );
};

export default HomeFooter;
