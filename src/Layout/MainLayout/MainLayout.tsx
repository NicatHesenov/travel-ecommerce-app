import { Outlet } from "react-router-dom";
import Footer from "../../components/Footer/Footer";
import Navbar from "../../components/Navbar/Navbar";
import { AuthProvider } from "../../context/AuthContext";
function MainLayout() {
  return (
    <div className="hero">
      <AuthProvider>
        <Navbar />
        <main>
          <Outlet />
        </main>

        <Footer />
      </AuthProvider>
    </div>
  );
}

export default MainLayout;
