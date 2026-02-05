import Navbar from "../Layout/Navbar/Navbar";
import Header from "../Layout/Header/Header";
import "./mainLayout.scss";
function MainLayout() {
  return (
    <>
      <section className="hero">
        <Navbar />
        <Header />;
      </section>
    </>
  );
}

export default MainLayout;
