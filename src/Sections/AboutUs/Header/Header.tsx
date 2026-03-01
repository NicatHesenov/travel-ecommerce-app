import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  return (
    <div className="aboutHeader-container">
      <h1 className="aboutHeader-title">
        Our team cares about your full relax
      </h1>
      <p className="aboutHeader-text">
        But I must explain to you how all this mistaken idea of denouncing
        pleasure and praising pain was born and I will give you a complete
        account of the system, and expound the actual teachings of the great
        explorer of the truth, the master-builder of human happiness.
      </p>
      <Link to="/tours">
        <button className="aboutHeader-btn">View our Tour Packages</button>
      </Link>
    </div>
  );
}

export default Header;
