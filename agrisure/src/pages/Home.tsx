import { Link } from "react-router-dom";
import { crops } from "../data/crops";

function Home() {
  const currentMonth = new Date().toLocaleString("en-US", {
    month: "long"
  });

  const currentMonthCrops = crops.filter((crop) =>
    crop.varieties.some((variety) =>
      variety.sowingMonths.includes(currentMonth)
    )
  );

  return (
    <main>

      {/* HERO */}
      <section
        className="hero"
        style={{
          backgroundImage: "url('/images/home/hero.jpg')"
        }}
      >
        <div className="hero-overlay"></div>

        <div className="hero-content">

          <span className="hero-badge">
            🌱 SMART AGRICULTURE PLATFORM
          </span>

          <h1>
            Smarter Farming.
            <br />
            <span>Better Decisions.</span>
          </h1>

          <p>
            Explore crops, varieties, soil requirements,
            sowing seasons, diseases and nutrient information
            in one simple platform.
          </p>

          <div className="hero-actions">

            <Link
              to="/crops"
              className="hero-button primary-button"
            >
              Explore Crops →
            </Link>

            <Link
              to="/crop-calendar"
              className="hero-button outline-button"
            >
              View Calendar
            </Link>

          </div>

        </div>

        <div className="hero-visual">

          <div className="hero-circle">
            🌾
          </div>

          <div className="hero-floating-card card-one">
            🌱
            <span>Healthy Crops</span>
          </div>

          <div className="hero-floating-card card-two">
            📅
            <span>Smart Calendar</span>
          </div>

        </div>

      </section>


      {/* FEATURES */}
      <section className="home-section">

        <div className="section-heading">

          <span>EXPLORE AGRISURE</span>

          <h2>
            Everything you need,
            <br />
            in one place.
          </h2>

        </div>

        <div className="feature-grid">

          <article className="feature-card">

            <div className="feature-icon">
              🌾
            </div>

            <h3>
              Crops & Varieties
            </h3>

            <p>
              Explore crops, their varieties,
              growing conditions and expected yield.
            </p>

            <Link to="/crops">
              Explore →
            </Link>

          </article>


          <article className="feature-card">

            <div className="feature-icon">
              🌱
            </div>

            <h3>
              Soil & Crops
            </h3>

            <p>
              Find crops that are suitable
              for different soil types.
            </p>

            <Link to="/soil-crops">
              Find Crops →
            </Link>

          </article>


          <article className="feature-card">

            <div className="feature-icon">
              📅
            </div>

            <h3>
              Crop Calendar
            </h3>

            <p>
              Discover which crops and varieties
              can be sown during each month.
            </p>

            <Link to="/crop-calendar">
              View Calendar →
            </Link>

          </article>


          <article className="feature-card">

            <div className="feature-icon">
              🧪
            </div>

            <h3>
              Nutrient Support
            </h3>

            <p>
              Learn about fertilizers and the
              nutrients they provide.
            </p>

            <Link to="/fertilizers">
              Explore →
            </Link>

          </article>

        </div>

      </section>


      {/* FARM LANDSCAPE */}
      <section className="home-image-section">

        <div className="home-image-content">

          <span>
            SMART FARMING
          </span>

          <h2>
            Better information
            <br />
            for better farming.
          </h2>

          <p>
            Agrisure brings crop, soil, calendar,
            disease and fertilizer information together
            so that important farming decisions are easier
            to understand.
          </p>

          <Link
            to="/about"
            className="card-button"
          >
            Learn More About Agrisure →
          </Link>

        </div>

        <div className="home-image-wrapper">

          <img
            src="/images/home/farm-landscape.jpg"
            alt="Agricultural farm landscape"
          />

        </div>

      </section>


      {/* POPULAR CROPS */}
      <section className="home-section">

        <div className="section-heading section-heading-row">

          <div>

            <span>
              DISCOVER
            </span>

            <h2>
              Popular Crops
            </h2>

          </div>

          <Link
            to="/crops"
            className="section-link"
          >
            View All Crops →
          </Link>

        </div>


        <div className="crop-grid">

          {crops.slice(0, 6).map((crop) => (

            <article
              className="home-crop-card"
              key={crop.id}
            >

              <div className="home-crop-image">

                <img
                  src={crop.image}
                  alt={crop.name}
                />

                <span>
                  {crop.varieties.length} varieties
                </span>

              </div>


              <div className="home-crop-content">

                <h3>
                  {crop.name}
                </h3>

                <p>
                  {crop.description}
                </p>

                <Link
                  to={`/crops/${crop.id}`}
                >
                  Explore Crop →
                </Link>

              </div>

            </article>

          ))}

        </div>

      </section>


      {/* CROP CALENDAR */}
      <section className="calendar-preview">

        <div>

          <span>
            THIS MONTH
          </span>

          <h2>
            What can you sow in {currentMonth}?
          </h2>

          <p>
            Check crops and varieties that are
            suitable for sowing this month.
          </p>

          <Link
            to="/crop-calendar"
            className="card-button"
          >
            Open Crop Calendar →
          </Link>

        </div>


        <div className="calendar-preview-icon">
          📅
        </div>


        <div className="calendar-preview-crops">

          {currentMonthCrops
            .slice(0, 4)
            .map((crop) => (

              <span key={crop.id}>
                🌱 {crop.name}
              </span>

            ))}


          {currentMonthCrops.length === 0 && (

            <span>
              No crop data available.
            </span>

          )}

        </div>

      </section>


      {/* FARMER TECHNOLOGY / DISEASE */}
      <section className="home-image-section reverse">

        <div className="home-image-wrapper">

          <img
            src="/images/home/farmer-technology.jpg"
            alt="Farmer using modern agricultural technology"
          />

        </div>


        <div className="home-image-content">

          <span>
            CROP HEALTH
          </span>

          <h2>
            Identify problems
            <br />
            before they spread.
          </h2>

          <p>
            Agrisure provides information about common
            crop diseases, their causes, symptoms,
            prevention and management.
          </p>

          <Link
            to="/crops"
            className="card-button"
          >
            Explore Crop Diseases →
          </Link>

        </div>

      </section>

    </main>
  );
}

export default Home;