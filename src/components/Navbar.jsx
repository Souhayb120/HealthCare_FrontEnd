
function Navbar() {
  return (
    <div className="topbar">
      <div className="search-box">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="11" cy="11" r="7" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        Search patients, ID, or records...
      </div>
    </div>
  );
}

export default Navbar;