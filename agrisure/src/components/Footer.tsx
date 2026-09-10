import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">

        <div className="footer-section">
          <h2>Agrisure</h2>
          <p>
            Helping farmers make better decisions about crops,
            soil, varieties and cultivation.
          </p>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>

          <Link to="/">Home</Link>
          <Link to="/crops">Crops</Link>
          <Link to="/soil-crops">Soil & Crops</Link>
          <Link to="/crop-calendar">Crop Calendar</Link>
        </div>

        <div className="footer-section">
          <h3>More</h3>

          <Link to="/fertilizers">Fertilizers</Link>
          <Link to="/about">About</Link>
          <Link to="/profile">Profile</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2026 Agrisure. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;