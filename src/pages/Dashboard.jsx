import "../index.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Table from "../components/Table";
import Footer from "../components/Footer";
import axios from "axios";
import { useEffect, useState } from "react";
import { get } from "react-hook-form";
import { getCountMedecins } from "../services/getMedecines";
import { getCountPatients } from "../services/getPatients";
import { getRendezVous, getCountRendezVous } from "../services/getRendezVous";
import { getCountDossierMedical } from "../services/dossierMedicals";
function Dashboard() {
  const [rendezVous, setRendezVous] = useState([]);

  const [countPatients, setCountPatients] = useState(0);
  const [countRendezVous, setCountRendezVous] = useState(0);
  const [countDossiersMedical, setcountDossiersMedical] = useState(0);
  const [countMedecin, setCountMedecin] = useState(0);
  useEffect(() => {
    async function fetchCount() {
      const dataM = await getCountMedecins();
      const dataP = await getCountPatients();
      const dataD = await getCountRendezVous();
      const dataDs = await getCountDossierMedical();
      const RendezVous = await getRendezVous();
      const rendez = RendezVous.map((rdv) => {
        return {
          id: rdv.id,
          dateRendezVous: rdv.dateRendezVous,
          statut: rdv.statut,
          patient: rdv.patient.nom,
          medecine: rdv.medecine.nom,
        };
      });
      setRendezVous(rendez);
      setCountMedecin(dataM);
      setCountPatients(dataP);
      setCountRendezVous(dataD);
      setcountDossiersMedical(dataDs);
    }
    fetchCount();
  }, []);

  const rendezVousColumns = [
    { title: "ID", key: "id" },
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
          <Cards
            countDossiersMedical={countDossiersMedical}
            countRendezVous={countRendezVous}
            countPatients={countPatients}
            countMedecin={countMedecin}
          />
          <Table
            columns={rendezVousColumns}
            data={rendezVous}
            tableTitle={"Latest Rendez_Vous"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Dashboard;
