import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className="page">

      <section className="profile-card">

        <div className="profile-icon">
          👤
        </div>

        <span>
          AGRISURE ACCOUNT
        </span>

        <h1>
          Your Profile
        </h1>

        <p>
          Login or create an account to manage
          your Agrisure profile.
        </p>

        <div className="profile-actions">

          <Link
            to="/login"
            className="card-button"
          >
            Login
          </Link>

          <Link
            to="/signup"
            className="card-button secondary-button"
          >
            Create Account
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Profile;