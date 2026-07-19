import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Table from "../components/Table";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getRendezVous } from "../services/getRendezVous";
const RendezVous = () => {
  const [rendezVous, setRendezVous] = useState([]);

  useEffect(() => {
    async function fetchRendezVous() {
      const data = await getRendezVous();
      const r = data.map((rdv) => {return ({dateRendezVous:rdv.dateRendezVous , statut: rdv.statut ,patient: rdv.patient.nom ,medecine: rdv.medecine.nom})})
      console.log(r)
      setRendezVous(r);
    }
    fetchRendezVous();
  }, []);

  const rendezVousColumns = [
    { title: "dateRendezVous", key: "dateRendezVous" },
    { title: "statut", key: "statut" },
    { title: "medecine", key: "medecine" },
    { title: "patient", key: "patient" },
  ];



  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">
          <Table
            columns={rendezVousColumns}
            data={rendezVous}
            tableTitle={"Les Rendez_Vous"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default RendezVous;
