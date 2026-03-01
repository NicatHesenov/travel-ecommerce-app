import img from "./assets/specialOffersImg.png";
import Button from "../../../components/Button/Button";
import "./SpecialOffers.scss";
function SpecialOffers() {
  return (
    <section className="specialOffers">
      <div className="specialOffers-container">
        <div className="specialOffers-text">
          <h1 className="specialOffers-title">
            Get Special Offers for Organizations
          </h1>
          <p className="specialOffers-description">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <Button variant="contactUs">Contact Us</Button>
        </div>
        <div className="specialOffers-img">
          <img src={img} alt="" />
        </div>
      </div>
    </section>
  );
}

export default SpecialOffers;
