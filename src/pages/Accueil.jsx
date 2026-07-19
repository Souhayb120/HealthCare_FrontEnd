import "../index.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Table from "../components/Table";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { get } from "react-hook-form";

function Accueil() {
 
  const dossierMedicalURL = "http://localhost:8080/api/dossierMedical";
  const [rendezVous, setRendezVous] = useState([]);
  const [dossierMedical, setDossierMedical] = useState([]);


  const getDossierMedical = async () => {
    try {
      const response = await axios.get(
        dossierMedicalURL + "/getAllDossierMedical?page=0&size=2",
      );
      setDossierMedical(response.data.content);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getDossierMedical();
  }, []);

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">
          <Cards
            totalDossierMedical={dossierMedical.length}
            totalRendezVous={rendezVous.length}
          />
          <Table data={rendezVous} />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Accueil;
