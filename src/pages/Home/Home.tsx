import AboutCompany from "../../Sections/Home/AboutCompany/AboutCompany";
import Destinations from "../../Sections/Home/Destinations/Destinations";
import Header from "../../Sections/Home/Header/Header";
import "./Home.scss";
function Home() {
  return (
    <div className="home">
      <div>
        <Header />
        <main>
          <Destinations />
          <AboutCompany />
        </main>
      </div>
    </div>
  );
}

export default Home;
