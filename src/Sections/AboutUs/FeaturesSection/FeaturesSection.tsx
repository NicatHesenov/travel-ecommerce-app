import IconMap from "./assets/icon_map.png";
import IconExperience from "./assets/icon_experience.png";
import IconGuide from "./assets/icon_guide.png";
import IconBestPrice from "./assets/icon_best price.png";
import "./FeaturesSection.scss";
function FeaturesSection() {
  const featuresData = [
    {
      id: 1,
      icon: IconMap,
      text: "Complete Packages For All Your Wishes",
    },
    {
      id: 2,
      icon: IconExperience,
      text: "Over 30 Years Of Experience",
    },
    {
      id: 3,
      icon: IconGuide,
      text: "Expert Guides For You",
    },
    {
      id: 4,
      icon: IconBestPrice,
      text: "Guaranteed fun at the best price!",
    },
  ];
  return (
    <section className="featuresSection-container">
      {featuresData.map((item) => (
        <div key={item.id} className="featuresSection-cards">
          <img src={item.icon} alt="" />
          <p>{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default FeaturesSection;
