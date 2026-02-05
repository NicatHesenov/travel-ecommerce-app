import { NavLink } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../../assets/logo.jpg";
const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about" },
  { id: 3, title: "Tour Packages", path: "/tours" },
  { id: 4, title: "Contact", path: "/contact" },
];
function Navbar() {
  return (
    <div className="navbar-wrapper">
      <header className="logo">
        <img className="logo_icon" src={Logo} alt="logo" />
        <span className="logo_prefix">tours to</span>
        <p className="logo_title">Tuscany</p>
      </header>
      <nav className="navbar">
        {navItems.map((item) => (
          <NavLink
            key={item.id}
            to={item.path}
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            {item.title}
          </NavLink>
        ))}
      </nav>

      <div className="navbar-actions">
        <select className="action-select">
          <option value="en">En</option>
          <option value="Az">Az</option>
        </select>

        <div className="auth-buttons">
          <button className="auth-login">Login</button>
          <button className="signUp-signup">Sign Up</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
