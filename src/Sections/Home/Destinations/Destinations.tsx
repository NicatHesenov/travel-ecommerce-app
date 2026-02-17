import CustomSlider from "../../../components/CustomSlider/CustomSlider";
import DestinationsCard from "./DestinationsCard";
import { useGetToursQuery } from "../../../store/Slices/dataSlices";

function Destinations() {
  const { data, isLoading, error } = useGetToursQuery();

  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error loading tours!</p>;

  return (
    <div className="Destinations">
      <h2>Explore Our Popular Destinations</h2>

      <CustomSlider
        data={data}
        renderItem={(tour) => <DestinationsCard tour={tour} />}
        slidesPerView={3}
      />
    </div>
  );
}

export default Destinations;
