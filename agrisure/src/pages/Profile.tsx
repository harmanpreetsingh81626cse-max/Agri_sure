import { Link } from "react-router-dom";

function Profile() {
  return (
    <main className="page">

      <section className="page-header">

        <h1>Your Profile</h1>

        <p>
          Manage your Agrisure profile and account information.
        </p>

      </section>

      <section className="crop-section">

        <h2>Welcome to Agrisure</h2>

        <p>
          Login or create an account to access your profile.
        </p>

        <div>
          <Link to="/login">
            Login
          </Link>
          {" | "}
          <Link to="/signup">
            Create Account
          </Link>
        </div>

      </section>

    </main>
  );
}

export default Profile;