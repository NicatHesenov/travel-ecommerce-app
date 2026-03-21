import React, { useState, useRef, useEffect } from "react";
import { useAuth } from "../../context/useAuth";
import "./UserProfile.scss";
import { FaCircleUser } from "react-icons/fa6";

const UserProfile: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { logout } = useAuth();
  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const close = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node))
        setIsOpen(false);
    };
    document.addEventListener("mousedown", close);
    return () => document.removeEventListener("mousedown", close);
  }, []);

  return (
    <div className="user-profile" ref={menuRef}>
      <div className="profile-info" onClick={() => setIsOpen(!isOpen)}>
        <div className="avatar">
          <FaCircleUser className="avatar-circle" />
        </div>
      </div>
      {isOpen && (
        <div className="profile-dropdown">
          <div className="item logout" onClick={logout}>
            🚪 Logout
          </div>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
