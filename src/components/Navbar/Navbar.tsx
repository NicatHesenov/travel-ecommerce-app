import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.scss";
import Logo from "../../assets/logo.jpg";
import Button from "../Button/Button";
import AuthModal from "../AuthModal/AuthModal";
import UserProfile from "../UserProfile/UserProfile";
import { useAuth } from "../../context/useAuth";

const navItems = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "About Us", path: "/about" },
  { id: 3, title: "Tour Packages", path: "/tours" },
];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [modal, setModal] = useState<{
    open: boolean;
    view: "login" | "signup" | "forgot" | "checkEmail";
  }>({
    open: false,
    view: "login",
  });

  const { isLoggedIn } = useAuth();
  const location = useLocation();

  const isTourPage = location.pathname.startsWith("/tours");
  const handToggleMenu = () => setIsOpen(!isOpen);

  const openAuthModal = (viewType: "login" | "signup") => {
    setModal({ open: true, view: viewType });
    if (isOpen) setIsOpen(false);
  };

  return (
    <div className={`navbar-wrapper ${isTourPage ? "navbar-white" : ""}`}>
      <header className="logo">
        <img className="logo_icon" src={Logo} alt="logo" />
        <div className="logo-text">
          <span className="logo_prefix">tours to</span>
          <p className="logo_title">Tuscany</p>
        </div>
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
                onClick={() => setIsOpen(false)}
              >
                {item.title}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="navbar-actions">
          {isLoggedIn ? (
            <UserProfile />
          ) : (
            <div className="auth-buttons">
              <Button variant="login" onClick={() => openAuthModal("login")}>
                Login
              </Button>
              <Button variant="signup" onClick={() => openAuthModal("signup")}>
                Sign Up
              </Button>
            </div>
          )}
        </div>
      </nav>

      <AuthModal
        isOpen={modal.open}
        onClose={() => setModal({ ...modal, open: false })}
        initialView={modal.view}
      />
    </div>
  );
};

export default Navbar;
