import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Table from "../components/Table";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getRendezVous } from "../services/getRendezVous";
import { getDossierMedical } from "../services/dossierMedicals";

const DossierMedical = () => {
  const [dossierMedical, setDossierMedical] = useState([]);
  useEffect(() => {
    async function fetchDossierMedical() {
      const data = await getDossierMedical();
      console.log(data);
      setDossierMedical(data);
    }
    fetchDossierMedical();
  }, []);

  const dossierMedicalColumns = [
    { title: "ID", key: "id" },
    { title: "diagnostic", key: "diagnostic" },
    { title: "observations", key: "observations" },
    { title: "dateCreation", key: "dateCreation" },
  ];

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">
          <Table
            columns={dossierMedicalColumns}
            data={dossierMedical}
            tableTitle={"Les Dossiers Medicaux"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default DossierMedical;
