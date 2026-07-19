import { Routes, Route } from "react-router-dom";
import Home from "./pages/Accueil";
import Patients from "./pages/Patients";
import Medecins from "./pages/Medecins";
import RendezVous from "./pages/RendezVous";
import About from "./pages/AboutUs";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/patients" element={<Patients />}></Route>
      <Route path="/Medecins" element={<Medecins />}></Route>
      <Route path="/RendezVous" element={<RendezVous />}></Route>
      <Route path="/about" element={<About />}></Route>
    </Routes>
  );
}

export default App;