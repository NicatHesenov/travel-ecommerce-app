import { Route, Routes } from "react-router-dom";
import "./App.scss";
import MainLayout from "./Layout/MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import AboutUs from "./pages/AboutUs/AboutUs";
import TourDetails from "./Sections/TourPackages/TourDetails/TourDetails";
import ScrollToTop from "./components/ScrollToTop/ScrollToTop";
import Checkout from "./components/Checkout/Checkout";
import Tours from "./Sections/TourPackages/Tours/Tours";
import TourDescription from "./Sections/TourPackages/TourDetails/TourDescription";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<AboutUs />} />
          <Route path="tours" element={<Tours />} />
          <Route path="tours/:id" element={<TourDetails />}>
            <Route index element={<TourDescription />} />
            <Route path="checkout" element={<Checkout />} />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
