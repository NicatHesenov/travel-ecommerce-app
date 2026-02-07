import BookingWidget from "../BookingWidget/BookingWidget";
import "./header.scss";
function Header() {
  return (
    <div className="header-container">
      <h1 className="header-title">Enjoy in the best way!</h1>
      <p className="header-text">Enjoy our services for your trip anytime</p>
      <BookingWidget />
    </div>
  );
}

export default Header;
