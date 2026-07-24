import { Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Patients from "./pages/Patients";
import Medecins from "./pages/Medecins";
import RendezVous from "./pages/RendezVous";
import DossierMedical from "./pages/DossierMedical";
import AboutUs from "./pages/AboutUs";
import Login from "./pages/LoginComponent";
import RegisterComponent from "./pages/RegisterComponent";
import LoginComponent from "./pages/LoginComponent";


import { Navigate } from 'react-router-dom'
import { useState } from "react";

function ProtectedRoute({ children, isAuthenticated }) {
  if (!isAuthenticated) {
    return <Navigate to='/login' replace />
  }

  return children
}

function App() {
  
 const [isAuthenticated, setIsAuthenticated] = useState(false)

  return (
    <Routes>
    
      <Route path="/register" element={<RegisterComponent />}></Route>
      <Route path="/" element={<LoginComponent />}></Route>
        <Route
        path='/dashboard'
        element={
          <ProtectedRoute isAuthenticated={isAuthenticated}>
            <Dashboard />
          </ProtectedRoute>
        }
      />
      <Route path="/patients" element={<Patients />}></Route>
      <Route path="/Medecins" element={<Medecins />}></Route>
      <Route path="/RendezVous" element={<RendezVous />}></Route>
      <Route path="/DossierMedical" element={<DossierMedical />}></Route>
      <Route path="/about" element={<AboutUs />}></Route>
    </Routes>
  );
}

export default App;