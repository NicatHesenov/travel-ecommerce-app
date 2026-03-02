import { NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/logo.jpg";
import { useState } from "react";
import Button from "../Button/Button";
const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about" },
  { id: 3, title: "Tour Packages", path: "/tours" },
];
function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isTourPage = location.pathname.startsWith("/tours");
  const handToggleMenu = () => setIsOpen(!isOpen);
  return (
    <div className={`navbar-wrapper ${isTourPage ? "navbar-white" : ""}`}>
      <header className="logo">
        <img className="logo_icon" src={Logo} alt="logo" />
        <span className="logo_prefix">tours to</span>
        <p className="logo_title">Tuscany</p>
      </header>

      <div
        className={`hamburger ${isOpen ? "open" : ""}`}
        onClick={handToggleMenu}
        aria-label="Menu"
      >
        <button className="bar"></button>
        <button className="bar"></button>
        <button className="bar"></button>
      </div>
      <nav className={`navbar ${isOpen ? "open" : ""}`}>
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

        <div className="navbar-actions">
          <div className="auth-buttons">
            <Button variant="login">Login</Button>
            <Button variant="signup">Sign Up</Button>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
