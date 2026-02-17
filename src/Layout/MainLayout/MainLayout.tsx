import Navbar from "../../components/Navbar/Navbar";
import Home from "../../pages/Home/Home";
import "./mainLayout.scss";
function MainLayout() {
  return (
    <div className="hero">
      <Navbar />
      <main>
        <Home />
      </main>
    </div>
  );
}

export default MainLayout;
