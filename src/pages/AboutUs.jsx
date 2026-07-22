import AboutHeader from "../components/AboutHeader";
import "../index.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCards from "../components/AboutCards";

const AboutUs = () => {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">
          <AboutHeader />
          <AboutCards />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default AboutUs;
