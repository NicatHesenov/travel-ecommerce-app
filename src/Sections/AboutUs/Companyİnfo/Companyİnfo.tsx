import InfoSection from "../../../components/infoSection/İnfoSection";
import img from "./assets/companyInfoImg.png";
function Companyİnfo() {
  const stats = [
    { id: 1, num: "20+", label: "Years\nExperience" },
    { id: 2, num: "100+", label: "Happy\nCustomer" },
    { id: 3, num: "15+", label: "Choice of\nServices" },
    { id: 4, num: "10+", label: "Professional\nGuides" },
  ];
  return (
    <InfoSection
      image={img}
      title={"We Are The Center Of Lucca To Offer You The Best"}
      description={
        "We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!"
      }
      stats={stats}
    />
  );
}

export default Companyİnfo;
