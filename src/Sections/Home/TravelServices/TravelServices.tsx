import "./TravelServices.scss";
import Bike from "./assets/Bike.png";
import Humans from "./assets/Humans.jpg";
import Car from "./assets/Car.jpg";
import Bus from "./assets/Bus.png";
const travelServices = [
  {
    id: 1,
    img: Bike,
    title: "Bike and rickshaw rental",
    text: "Book your quality vehicle quickly for an hour or all day!",
  },
  {
    id: 2,
    img: Humans,
    title: "Guided tour of the countryside",
    text: "Live the real Lucchese experience by visiting the suburbs by bike!",
  },
  {
    id: 3,
    img: Car,
    title: "Taxi and NCC service",
    text: "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    id: 4,
    img: Bus,
    title: "Bus Package",
    text: "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
];
function TravelServices() {
  return (
    <section className="travelServices">
      {travelServices.map((item) => (
        <div className="travelServices-container" key={item.id}>
          <img
            className="travelServices-img"
            src={item.img}
            alt="travel services"
          />
          <h3 className="travelServices-title">{item.title}</h3>
          <p className="travelServices-text">{item.text}</p>
        </div>
      ))}
    </section>
  );
}

export default TravelServices;
