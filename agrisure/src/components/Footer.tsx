import { Sprout } from "lucide-react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="logo">
          <Sprout size={20} />
          <span>Agrisure</span>
        </div>
        <p>Crop information for farmers and students.</p>
        <small>© {new Date().getFullYear()} Agrisure. All rights reserved.</small>
      </div>
    </footer>
  );
}

export default Footer;