import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Cards from "../components/Cards";
import Table from "../components/Table";
import Footer from "../components/Footer";
import { useEffect, useState } from "react";
import { getPatients } from "../services/getPatients";

const Patients = () => {
  const [patients, setPatients] = useState([]);

  useEffect(() => {
    async function fetchPatients() {
      const data = await getPatients();
      setPatients(data);
    }
    fetchPatients();
  }, []);

  const patientColumns = [
    { title: "ID", key: "id" },
    { title: "nom", key: "nom" },
    { title: "prenom", key: "prenom" },
    { title: "email", key: "email" },
    { title: "telephone", key: "telephone" },
    { title: "dateNaissance", key: "dateNaissance" },
  ];

  return (
    <div className="app-layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">
          <Table
            columns={patientColumns}
            data={patients}
            tableTitle={"Patients"}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Patients;
