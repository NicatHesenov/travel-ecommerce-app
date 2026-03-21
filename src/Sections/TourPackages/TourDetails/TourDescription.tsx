import { useNavigate, useParams } from "react-router-dom";
import { useGetToursQuery } from "../../../store/Slices/dataSlices";
import { Calendar } from "antd";
import { HiOutlineUserGroup } from "react-icons/hi";
import { TbTimeDuration0 } from "react-icons/tb";
import { VscLocation } from "react-icons/vsc";
import CustomSlider from "../../../components/CustomSlider/CustomSlider";

import "./TourDetails.scss";

function TourDescription() {
  const { id } = useParams<{ id: string }>();
  const { data: tours, isLoading, error } = useGetToursQuery();
  const navigate = useNavigate();
  const tour = tours?.find((t) => String(t.id) === id);

  if (isLoading) return <div className="loading">Loading...</div>;
  if (error || !tour) return <div className="error">Tour not found!</div>;

  return (
    <div className="tour-details-page">
      <span className="backNav" onClick={() => navigate(-1)}>
        <span>←</span> Back
      </span>
      <section className="tour-header">
        <div className="img-container">
          <img className="header-img" src={tour.image} alt={tour.title} />
        </div>

        <div className="header-info">
          <h2 className="info-title">{tour.title}</h2>
          <p className="info-price">
            from <span className="price">{tour.price} €</span>
          </p>
          <p className="info-description">{tour.description}</p>

          <div className="booking-card">
            <p className="info-select">Select a date</p>
            <div className="calendar-container">
              <Calendar fullscreen={false} headerRender={undefined} />
            </div>
            <button
              className="buy-now-btn"
              onClick={() => navigate("checkout")}
            >
              Buy now
            </button>
          </div>
        </div>
      </section>

      {/* DETAILS SECTION */}
      <section className="tour-detail">
        <h3>Details</h3>
        <p className="detail-description">{tour.description}</p>
        <div className="detail-specs">
          <p>
            <HiOutlineUserGroup className="detail-icon" />{" "}
            <strong>Group size:</strong> {tour.groupSize} PP
          </p>
          <p>
            <TbTimeDuration0 className="detail-icon" />{" "}
            <strong>Duration:</strong> {tour.duration}
          </p>
          <p>
            <VscLocation className="detail-icon" /> <strong>Location:</strong>{" "}
            {tour.location}
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      {tour.gallery && (
        <section className="tour-gallery-section">
          <h3>Gallery</h3>
          <CustomSlider
            data={tour.gallery.map((imgUrl, index) => ({
              id: String(index),
              url: imgUrl,
            }))}
            slidesPerView={4}
            renderItem={(item) => (
              <div className="gallery-slide-item">
                <img src={item.url} alt="Gallery" />
              </div>
            )}
          />
        </section>
      )}
    </div>
  );
}

export default TourDescription;
