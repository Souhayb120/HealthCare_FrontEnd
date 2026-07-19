
function Cards({  totalMedecines , totalRendezVous , totalDossierMedical}) {
  return (
    <div className="stats-grid">
      <div className="stat-card">
        <div>
          <div className="stat-label">Total Patients</div>
          <div className="stat-value">1</div>
        </div>
        <div className="stat-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
          </svg>
        </div>
      </div>

      <div className="stat-card">
        <div>
          <div className="stat-label">Total Doctors</div>
          <div className="stat-value">{totalMedecines}</div>
        </div>
        <div className="stat-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="7" width="18" height="13" rx="2" />
            <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            <path d="M12 11v4M10 13h4" />
          </svg>
        </div>
      </div>

      <div className="stat-card">
        <div>
          <div className="stat-label">Appointments</div>
          <div className="stat-value">{totalRendezVous}</div>
        </div>
        <div className="stat-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <rect x="3" y="4" width="18" height="17" rx="2" />
            <path d="M3 9h18M8 3v4M16 3v4" />
          </svg>
        </div>
      </div>

      <div className="stat-card">
        <div>
          <div className="stat-label">Medical Records</div>
          <div className="stat-value">{totalDossierMedical}</div>
        </div>
        <div className="stat-icon">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M6 2h9l3 3v17H6z" />
            <path d="M9 9h6M9 13h6M9 17h4" />
          </svg>
        </div>
      </div>
    </div>
  );
}

export default Cards;