import { useGetToursQuery } from "../../../store/Slices/dataSlices";
import DestinationsCard from "../../Home/Destinations/DestinationsCard";
import "./Tours.scss";
function Tours() {
  const { data } = useGetToursQuery();

  return (
    <section className="tour-packages-section">
      <div className="container">
        <h2 className="section-title">Tour Packages</h2>
        <div className="tour-grid">
          {data?.map((tour) => (
            <DestinationsCard key={tour.id} tour={tour} showReadMore={true} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Tours;
