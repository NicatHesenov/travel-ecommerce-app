import BookingForm from "../../components/BookingForm/BookingForm";
import AboutCompany from "../../Sections/Home/AboutCompany/AboutCompany";
import Destinations from "../../Sections/Home/Destinations/Destinations";
import Header from "../../Sections/Home/Header/Header";
import SpecialOffers from "../../Sections/Home/SpecialOffers/SpecialOffers";
import TravelServices from "../../Sections/Home/TravelServices/TravelServices";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <Header />
      <Destinations />
      <AboutCompany />
      <SpecialOffers />
      <TravelServices />
      <BookingForm />
    </div>
  );
}

export default Home;
