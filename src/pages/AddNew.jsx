import AboutHeader from "../components/AboutHeader";
import "../index.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AboutCards from "../components/AboutCards";

const AddNew  = ({type,name,})=>{
    return(
       <div className="app-layout">
      <Sidebar />
      <div className="main">
        <Navbar />
        <div className="content">
       <form onSubmit={handleSubmit}>
      <div>
        <label>Nom</label>
        <input
          type="text"
          name="nom"
          value={patient.nom}
          onChange={handleChange}
          placeholder="Entrer le nom"
        />
      </div>

      <div>
        <label>Prénom</label>
        <input
          type="text"
          name="prenom"
          value={patient.prenom}
          onChange={handleChange}
          placeholder="Entrer le prénom"
        />
      </div>

      <div>
        <label>Email</label>
        <input
          type="email"
          name="email"
          value={patient.email}
          onChange={handleChange}
          placeholder="Entrer l'email"
        />
      </div>

      <div>
        <label>Téléphone</label>
        <input
          type="text"
          name="telephone"
          value={patient.telephone}
          onChange={handleChange}
          placeholder="Entrer le téléphone"
        />
      </div>

      <div>
        <label>Date de naissance</label>
        <input
          type="date"
          name="dateNaissance"
          value={patient.dateNaissance}
          onChange={handleChange}
        />
      </div>

      <button type="submit">Ajouter</button>
    </form>
        </div>
        <Footer />
      </div>
    </div>
    )
}

export default AboutUs; 