import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Table from "../components/Table";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";

import { getMedecines } from "../services/getMedecines";
const Medecins = () => {
  const [medecins, setMedecins] = useState([]);
  useEffect(() => {
    async function fetchMedecins() {
      const data = await getMedecines();
      setMedecins(data);
    }
    fetchMedecins();
  }, []);

  const medecinColumns = [
    { title: "nom", key: "nom" },
    { title: "telephone", key: "telephone" },
    { title: "email", key: "email" },
    { title: "specialite", key: "specialite" },
  ];

  return (
    <>
      <div className="app-layout">
        <Sidebar />
        <div className="main">
          <Navbar />
          <div className="content">
            <Table
              columns={medecinColumns}
              data={medecins}
              tableTitle={"Medecins"}
            />
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default Medecins;
