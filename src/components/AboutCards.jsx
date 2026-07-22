
function AboutCards() {
    
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div>
           
          <img src="src\assets\images\Calendar-rafiki.png" alt="" />
          <div style={{"padding":"1rem 0rem"}} className="stat-value">Gestion de Rendez Vous</div>
          <div className="stat-label">
            Organisez et gérez facilement les rendez-vous des patients.
            Planifiez les consultations, consultez les disponibilités des
            médecins et assurez un suivi efficace des rendez-vous afin d'offrir
            un service rapide et bien organisé.
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div>
          <img src="src\assets\images\Doctors-rafiki.png" alt="" />
          <div style={{"padding":"1rem 0rem"}} className="stat-value">Gestion des Médecins</div>
          <div className="stat-label">
            Centralisez les informations des médecins, gérez leurs profils,
            leurs spécialités et leurs disponibilités. Facilitez l'organisation
            des consultations tout en garantissant une meilleure coordination au
            sein de l'établissement.
          </div>
        </div>
      </div>

      <div className="stat-card">
        <div>
          <img src="src\assets\images\Oncology patient-rafiki.png" alt="" />
          <div style={{"padding":"1rem 0rem"}} className="stat-value">Gestion des Patients</div>
          <div className="stat-label">
            Enregistrez et gérez les informations des patients en toute
            sécurité. Accédez rapidement aux dossiers médicaux, suivez
            l'historique des consultations et améliorez la qualité de la prise
            en charge des patients.
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutCards;
