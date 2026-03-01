import "./Footer.scss";
import Logo from "../../assets/logo.jpg";
import { NavLink } from "react-router-dom";
import {
  FaEnvelope,
  FaFacebookF,
  FaLinkedin,
  FaMapMarkerAlt,
  FaPhoneAlt,
} from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";

const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about" },
  { id: 3, title: "Tour Packages", path: "/tours" },
  { id: 4, title: "Contact", path: "/contact" },
];
function Footer() {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer-logo-section">
          <div className="logo">
            <img className="logo_icon  " src={Logo} alt="logo" />
            <span className="logo_prefix">tours to</span>
            <p className="logo_title">Tuscany</p>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="info">
          <div className="footer-col services">
            <h3 className="col-title services-title">Services</h3>
            <ul>
              <li>Bike and Rickshaw rental</li>
              <li>Guided Tours of Lucca</li>
              <li>Guided Bike Tour of Lucca</li>
              <li>Transportation With Luxury Cars</li>
              <li>Wine Tours By Bus With Guide</li>
            </ul>
          </div>
          <div className="footer-col ">
            <h3 className="col-title home-title">Home</h3>
            <ul className="nav-menu">
              {navItems.map((item) => (
                <li key={item.id}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) => (isActive ? "active" : "")}
                  >
                    {item.title}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <div className="footer-col ">
            <h3 className="col-title help-title">Help</h3>
            <ul>
              <li>Terms of Use</li>
              <li>Provicy Policy</li>
            </ul>
          </div>
          <div className="footer-col ">
            <h3 className="col-title contacts-title">Contacts</h3>
            <ul>
              <li>
                <FaMapMarkerAlt className="icon" /> Piazza Napoleone, Lucca,
                Tuscany
              </li>
              <li>
                <FaPhoneAlt className="icon" /> +39 346 368 5708
              </li>
              <li>
                <FaEnvelope className="icon" /> italiainlimo@gmail.com
              </li>
            </ul>
          </div>
          <div className="footer-col ">
            <h3 className="col-title socialMedia">Social Media</h3>
            <div className="social-icons">
              <a
                href="https://www.linkedin.com/in/nicat-hasanov/"
                className="social-icon"
              >
                <FaLinkedin />
              </a>
              <a href="#" className="social-icon">
                <FaFacebookF />
              </a>
              <a
                href="https://www.instagram.com/__hesenov_nicat_/"
                className="social-icon"
              >
                <FaInstagram />
              </a>

              <p></p>
            </div>
          </div>
        </div>

        <hr className="footer-divider" />

        <div className="footer-copyright">
          <p>Copyright © 2026. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
