import "./AboutCompany.scss";
import AboutUs from "../../../assets/about.png";
function AboutCompany() {
  const stats = [
    { id: 1, num: "20+", label: "Years\nExperience" },
    { id: 2, num: "100+", label: "Happy\nCustomer" },
    { id: 3, num: "15+", label: "Choice of\nServices" },
    { id: 4, num: "10+", label: "Professional\nGuides" },
  ];

  return (
    <section className="aboutCompany-container">
      <div className="aboutCompany-imageWrapper">
        <img src={AboutUs} alt="Company journey" />
      </div>

      <div className="aboutCompany-content">
        <span className="aboutCompany-subtitle">WELCOME TO OUR SITE!</span>
        <h2 className="aboutCompany-title">
          We are the best company for your visit
        </h2>
        <p className="aboutCompany-text">
          After decades of experience, and a whole life in Lucca, we offer you
          the most complete tourism service in the city. In addition to having
          bikes and rickshaws to have as much fun as you want, you have the
          choice of tour guides with whom to tour and drivers for your every
          need! We offer packages in the way that you get the most at the lowest
          price. Book with us and we will always be available for you!
        </p>

        <div className="aboutCompany-statsGrid">
          {stats.map((item) => (
            <div key={item.id} className="aboutCompany-statItem">
              <p className="aboutCompany-num">{item.num}</p>
              <p className="aboutCompany-label">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AboutCompany;
