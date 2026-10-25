import { useEffect, useState } from "react";
import {
  Bookmark,
  LogIn,
  LogOut,
  Menu,
  Sprout,
  UserPlus,
  X,
} from "lucide-react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

function Navbar() {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const location = useLocation();

  // close the menu whenever the page changes
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? "nav-link active" : "nav-link";

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <button
          type="button"
          className="menu-toggle"
          onClick={() => setOpen((value) => !value)}
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
        >
          {open ? <X size={24} /> : <Menu size={24} />}
        </button>

        <Link to="/" className="logo">
          <Sprout size={24} />
          <span>Agrisure</span>
        </Link>

        <nav className={open ? "nav-links open" : "nav-links"}>
          <NavLink to="/" className={linkClass} end>Home</NavLink>
          <NavLink to="/crops" className={linkClass}>Crops</NavLink>
          <NavLink to="/soil-crops" className={linkClass}>Soil &amp; Crops</NavLink>
          <NavLink to="/crop-calendar" className={linkClass}>Calendar</NavLink>
          <NavLink to="/fertilizers" className={linkClass}>Fertilizers</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>

          {/* account buttons inside the dropdown (phones only) */}
          <div className="menu-account">
            {user ? (
              <>
                <Link to="/profile" className="btn btn-light">
                  <Bookmark size={16} />
                  {user.name}
                  <span className="badge">{user.favoriteCropIds.length}</span>
                </Link>
                <button type="button" className="btn btn-light" onClick={logout}>
                  <LogOut size={16} /> Log out
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-light">
                  <LogIn size={16} /> Login
                </Link>
                <Link to="/signup" className="btn btn-green">
                  <UserPlus size={16} /> Sign up
                </Link>
              </>
            )}
          </div>
        </nav>

        {/* account buttons in the bar (desktop only) */}
        <div className="nav-account">
          {user ? (
            <>
              <Link to="/profile" className="btn btn-light">
                <Bookmark size={16} />
                {user.name}
                <span className="badge">{user.favoriteCropIds.length}</span>
              </Link>
              <button
                type="button"
                className="icon-btn"
                onClick={logout}
                title="Log out"
                aria-label="Log out"
              >
                <LogOut size={18} />
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-light">
                <LogIn size={16} /> Login
              </Link>
              <Link to="/signup" className="btn btn-green">
                <UserPlus size={16} /> Sign up
              </Link>
            </>
          )}
        </div>

        {/* quick bookmark shortcut in the bar (phones, logged in only) */}
        {user && (
          <Link to="/profile" className="mobile-saved" aria-label="Saved crops">
            <Bookmark size={20} />
            <span className="badge">{user.favoriteCropIds.length}</span>
          </Link>
        )}
      </div>
    </header>
  );
}

export default Navbar;