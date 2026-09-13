import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">

          <Link to="/" className="footer-logo">
            🌿 Agrisure
          </Link>

          <p>
            Smarter farming decisions through simple,
            accessible agricultural information.
          </p>

        </div>

        <div className="footer-links">

          <div>
            <h3>Explore</h3>

            <Link to="/crops">
              Crops
            </Link>

            <Link to="/soil-crops">
              Soil & Crops
            </Link>

            <Link to="/crop-calendar">
              Crop Calendar
            </Link>
          </div>

          <div>
            <h3>Resources</h3>

            <Link to="/fertilizers">
              Fertilizers
            </Link>

            <Link to="/about">
              About
            </Link>

            <Link to="/profile">
              Profile
            </Link>
          </div>

        </div>

      </div>

      <div className="footer-bottom">

        <p>
          © 2026 Agrisure. All rights reserved.
        </p>

        <p>
          Built with React + TypeScript
        </p>

      </div>

    </footer>
  );
}

export default Footer;