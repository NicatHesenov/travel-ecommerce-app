import { MdOutlineCalendarMonth } from "react-icons/md";
import type Tour from "../../../types/Tour";
import "./Destinations.scss";
import { HiOutlineUserGroup } from "react-icons/hi";
import { Link } from "react-router-dom";
interface DestinationsCardProps {
  tour: Tour;
  showReadMore?: boolean;
}

function DestinationsCard({ tour, showReadMore }: DestinationsCardProps) {
  return (
    <div className="destinations-card">
      <div className="destinations-cards">
        <img className="destions-img" src={tour.image} alt={tour.title} />
        <h3 className="destionsCard-title">{tour.title}</h3>
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
        {showReadMore && (
          <Link to={`/tours/${tour.id}`} className="read-more">
            Read More <span>→</span>
          </Link>
        )}
      </div>
    </div>
  );
}

export default DestinationsCard;
