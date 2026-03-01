import AboutUs from "./assets/about.png";
import InfoSection from "../../../components/infoSection/İnfoSection";
function AboutCompany() {
  const stats = [
    { id: 1, num: "20+", label: "Years\nExperience" },
    { id: 2, num: "100+", label: "Happy\nCustomer" },
    { id: 3, num: "15+", label: "Choice of\nServices" },
    { id: 4, num: "10+", label: "Professional\nGuides" },
  ];

  return (
    <InfoSection
      image={AboutUs}
      title={"We are the best company for your visit"}
      description={
        "After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!"
      }
      stats={stats}
    />
  );
}

export default AboutCompany;
