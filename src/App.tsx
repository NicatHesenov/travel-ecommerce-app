import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import TourPackages from "./pages/TourPackages/TourPackages";
import TourDetails from "./Sections/TourPackages/TourDetails/TourDetails";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<AboutUs />} />
        <Route path="tours" element={<TourPackages />} />
        <Route path="/tours/:id" element={<TourDetails />} />
        <Route path="*" element={<div>Səhifə tapılmadı (404)</div>} />
      </Route>
    </Routes>
  );
}

export default App;
