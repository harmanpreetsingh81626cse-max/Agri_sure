import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">
        <Link to="/">Agrisure</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/crops">Crops</Link>
        <Link to="/soil-crops">Soil & Crops</Link>
        <Link to="/crop-calendar">Crop Calendar</Link>
        <Link to="/fertilizers">Fertilizers</Link>
        <Link to="/about">About</Link>
        <Link to="/profile">Profile</Link>
      </div>
    </nav>
  );
}

export default Navbar;