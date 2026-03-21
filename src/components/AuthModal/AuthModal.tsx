import React, { useEffect, useState } from "react";
import "./AuthModal.scss";
import Button from "../Button/Button";
import { useAuth } from "../../context/useAuth";

type AuthView = "login" | "signup" | "forgot" | "checkEmail";

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialView: AuthView;
}

const AuthModal: React.FC<AuthModalProps> = ({
  isOpen,
  onClose,
  initialView,
}) => {
  const [view, setView] = useState<AuthView>(initialView);
  const { login } = useAuth();

  useEffect(() => {
    setView(initialView);
  }, [initialView]);
  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    login();
    onClose();
  };
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-x" onClick={onClose}>
          &times;
        </button>

        {view === "signup" && (
          <form onSubmit={handleSubmit} className="auth-form">
            <h2>Create Account</h2>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <Button variant="signup" type="submit">
              Sign Up
            </Button>
            <p>
              Already have an account?{" "}
              <span onClick={() => setView("login")}>Login</span>
            </p>
          </form>
        )}

        {view === "login" && (
          <form onSubmit={handleSubmit} className="auth-form">
            <h2>Login</h2>
            <input type="email" placeholder="Email address" required />
            <input type="password" placeholder="Password" required />
            <span className="forgot-pw" onClick={() => setView("forgot")}>
              Forgot Password?
            </span>
            <Button variant="signup" type="submit">
              Login
            </Button>
            <p>
              Don't have an account?{" "}
              <span onClick={() => setView("signup")}>Sign Up</span>
            </p>
          </form>
        )}

        {view === "forgot" && (
          <div className="auth-form">
            <h2>Forgot Password</h2>
            <p className="desc">Enter your email to reset password</p>
            <input type="email" placeholder="Email address" required />
            <Button variant="signup" onClick={() => setView("checkEmail")}>
              Submit
            </Button>
            <p className="back" onClick={() => setView("login")}>
              Back to Login
            </p>
          </div>
        )}

        {view === "checkEmail" && (
          <div className="auth-form centered">
            <div className="icon-mail">✉️</div>
            <h2>Check your email</h2>
            <p>We've sent recovery instructions to your email.</p>
            <Button variant="signup" onClick={() => setView("login")}>
              Back to Login
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthModal;
