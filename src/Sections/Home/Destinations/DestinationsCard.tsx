import { MdOutlineCalendarMonth } from "react-icons/md";
import type Tour from "../../../types/Tour";
import "./Destinations.scss";
import { HiOutlineUserGroup } from "react-icons/hi";
interface DestinationsCardProps {
  tour: Tour;
}

function DestinationsCard({ tour }: DestinationsCardProps) {
  return (
    <div className="destinations-card">
      <div className="destinations-cards">
        <img className="destions-img" src={tour.image} alt={tour.title} />
        <h3 className="destions-title">{tour.title}</h3>
        <p>{tour.location}</p>
        <p className="destinations-price">
          {" "}
          from <span className="price">{tour.price} €</span>
        </p>
        <div className="destinations-details">
          <div>
            <MdOutlineCalendarMonth /> {tour.duration}
          </div>
          <div>
            <HiOutlineUserGroup /> {tour.groupSize} PP
          </div>
        </div>
        <p className="destinations-description">{tour.description}</p>
      </div>
    </div>
  );
}

export default DestinationsCard;
