import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import "./mainLayout.scss";
function MainLayout() {
  return (
    <div className="hero">
      <Navbar />
      <main>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;
