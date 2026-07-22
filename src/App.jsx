import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Medecins from "./pages/Medecins";
import RendezVous from "./pages/RendezVous";
import DossierMedical from "./pages/DossierMedical";
import AboutUs from "./pages/AboutUs";


function App() {

  return (
    <Routes>
      <Route path="/" element={<Dashboard />}></Route>
      <Route path="/patients" element={<Patients />}></Route>
      <Route path="/Medecins" element={<Medecins />}></Route>
      <Route path="/RendezVous" element={<RendezVous />}></Route>
      <Route path="/DossierMedical" element={<DossierMedical />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
    </Routes>
  );
}

export default App;