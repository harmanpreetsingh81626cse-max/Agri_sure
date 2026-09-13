import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="page">

      <section className="not-found">

        <span className="not-found-number">
          404
        </span>

        <div className="not-found-icon">
          🌱
        </div>

        <h1>
          Page Not Found
        </h1>

        <p>
          Looks like this field hasn't been planted yet.
        </p>

        <Link
          to="/"
          className="card-button"
        >
          ← Back to Agrisure
        </Link>

      </section>

    </main>
  );
}

export default NotFound;