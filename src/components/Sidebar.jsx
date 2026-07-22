import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-title">Health Care</div>
        <div className="brand-sub">Health Systems</div>
      </div>

<div className="container_side_bar">
      <ul className="nav-list">
        

        <li>
            <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
          <svg
            className="nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <rect x="3" y="3" width="7" height="7" rx="1.5" />
            <rect x="14" y="3" width="7" height="7" rx="1.5" />
            <rect x="3" y="14" width="7" height="7" rx="1.5" />
            <rect x="14" y="14" width="7" height="7" rx="1.5" />
          </svg>
          Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/patients"
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="12" cy="8" r="4" />
              <path d="M4 21c0-4 3.5-7 8-7s8 3 8 7" />
            </svg>
            Patients
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            to="/Medecins"
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="7" width="18" height="13" rx="2" />
              <path d="M8 7V5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
            </svg>
            Doctors
          </NavLink>
        </li>

        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            to="/RendezVous"
          >
            <svg
              className="nav-icon"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <rect x="3" y="4" width="18" height="17" rx="2" />
              <path d="M3 9h18M8 3v4M16 3v4" />
            </svg>
            Appointments
          </NavLink>
        </li>
        <li>
             <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            to="/DossierMedical"
          >
          <svg
            className="nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M6 2h9l3 3v17H6z" />
            <path d="M9 9h6M9 13h6M9 17h4" />
          </svg>
          Medical Records
          </NavLink>
        </li>
        <li>
        <NavLink
            className={({ isActive }) =>
              isActive ? "nav-item active" : "nav-item"
            }
            to="/about"
          >
        
          <svg
            className="nav-icon"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="12" cy="12" r="9" />
            <path d="M12 8h.01M11 12h1v4h1" />
          </svg>
          About
          </NavLink>
        </li>
      </ul>
      <div className="nav-item dex">
<svg
  className="nav-icon"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  strokeWidth="2"
  strokeLinecap="round"
  strokeLinejoin="round"
>
  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
  <path d="M10 17l5-5-5-5" />
  <path d="M15 12H3" />
</svg>
        Deconxion</div>
</div>


    </aside>
  );
}

export default Sidebar;
