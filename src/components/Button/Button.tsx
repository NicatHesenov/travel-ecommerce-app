import "./Button.Modal.scss";
import React from "react";
import "./Button.Modal.scss";

interface ButtonProps {
  children: React.ReactNode;
  variant?: "login" | "signup" | "contactUs";
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

function Button({ children, variant, onClick, type = "button" }: ButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`button ${variant}`}>
      {children}
    </button>
  );
}

export default Button;
