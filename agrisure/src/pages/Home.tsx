import { Link } from "react-router-dom";
import { crops } from "../data/crops";

function Home() {
  return (
    <main className="page">

      {/* Hero Section */}
      <section className="hero">
        <h1>Welcome to Agrisure</h1>

        <p>
          Make better farming decisions with information
          about crops, varieties, soil, weather and diseases.
        </p>

        <Link to="/crops">
          Explore Crops →
        </Link>
      </section>

      {/* Main Features */}
      <section className="home-section">
        <h2>Explore Agrisure</h2>

        <div className="feature-grid">

          <article className="feature-card">
            <h3>🌾 Crops</h3>

            <p>
              Explore different crops, their varieties,
              soil requirements, weather and diseases.
            </p>

            <Link to="/crops">
              Explore Crops →
            </Link>
          </article>

          <article className="feature-card">
            <h3>🌱 Soil & Crops</h3>

            <p>
              Select your soil type and find crops that
              are suitable for it.
            </p>

            <Link to="/soil-crops">
              Find Suitable Crops →
            </Link>
          </article>

          <article className="feature-card">
            <h3>📅 Crop Calendar</h3>

            <p>
              Select a month to discover crops and varieties
              that can be sown during that period.
            </p>

            <Link to="/crop-calendar">
              View Calendar →
            </Link>
          </article>

          <article className="feature-card">
            <h3>🧪 Fertilizers</h3>

            <p>
              Learn about fertilizers and their use in
              crop cultivation.
            </p>

            <Link to="/fertilizers">
              Explore Fertilizers →
            </Link>
          </article>

        </div>
      </section>

      {/* Crops Preview */}
      <section className="home-section">

        <h2>Popular Crops</h2>

        <div className="crop-grid">

          {crops.map((crop) => (
            <article
              className="crop-card"
              key={crop.id}
            >
              <h3>{crop.name}</h3>

              <p>{crop.description}</p>

              <p>
                <strong>Varieties:</strong>{" "}
                {crop.varieties.length}
              </p>

              <p>
                <strong>Diseases:</strong>{" "}
                {crop.diseases.length}
              </p>

              <Link to={`/crops/${crop.id}`}>
                View Crop →
              </Link>
            </article>
          ))}

        </div>

      </section>

      {/* Disease Section */}
      <section className="home-section">

        <h2>Crop Disease Information</h2>

        <p>
          Facing a crop disease? Agrisure provides information
          about common diseases, their causes, symptoms,
          prevention and management.
        </p>

        <Link to="/crops">
          Check Crop Diseases →
        </Link>

      </section>

    </main>
  );
}

export default Home;