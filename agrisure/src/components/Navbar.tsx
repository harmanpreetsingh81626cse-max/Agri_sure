import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <Link to="/" className="logo">
        Agrisure
      </Link>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/crops">Crops</Link>
        <Link to="/soil-crops">Soil & Crops</Link>
        <Link to="/crop-calendar">Crop Calendar</Link>
        <Link to="/fertilizers">Fertilizers</Link>
        <Link to="/about">About</Link>
      </div>

      <Link to="/profile" className="profile-link">
        👤 Profile
      </Link>

    </nav>
  );
}

export default Navbar;