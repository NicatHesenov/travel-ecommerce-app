import "./infoSection.scss";
interface StatItem {
  id: number;
  num: string;
  label: string;
}
interface dataProp {
  image: string;
  title: string;
  description: string;
  stats: StatItem[];
}

function İnfoSection({ image, title, description, stats }: dataProp) {
  return (
    <section className="aboutCompany-container">
      <div className="aboutCompany-imageWrapper">
        <img src={image} alt="Company journey" />
      </div>

      <div className="aboutCompany-content">
        <span className="aboutCompany-subtitle">WELCOME TO OUR SITE!</span>
        <h2 className="aboutCompany-title">{title}</h2>
        <p className="aboutCompany-text">{description}</p>

        <div className="aboutCompany-statsGrid">
          {stats &&
            stats.map((item) => (
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

export default İnfoSection;
