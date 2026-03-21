import { Outlet } from "react-router-dom";

function TourDetails() {
  return (
    <div className="tour-details-wrapper">
      <Outlet />
    </div>
  );
}

export default TourDetails;
