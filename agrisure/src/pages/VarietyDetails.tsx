import { Link, useParams } from "react-router-dom";
import { crops } from "../data/crops";
import DiseaseCard from "../components/DiseaseCard";

function VarietyDetails() {
  const {
    cropId,
    varietyId
  } = useParams();

  const crop = crops.find(
    (item) => item.id === cropId
  );

  if (!crop) {
    return (
      <main className="page">

        <h1>
          Crop Not Found
        </h1>

        <Link to="/crops">
          ← Back to Crops
        </Link>

      </main>
    );
  }

  const variety = crop.varieties.find(
    (item) => item.id === varietyId
  );

  if (!variety) {
    return (
      <main className="page">

        <h1>
          Variety Not Found
        </h1>

        <Link to={`/crops/${crop.id}`}>
          ← Back to {crop.name}
        </Link>

      </main>
    );
  }

  return (
    <main className="page">

      <section className="page-header">

        <span>
          {crop.name.toUpperCase()} VARIETY
        </span>

        <h1>
          {variety.name}
        </h1>

        <p>
          Detailed information about the{" "}
          {variety.name} variety of{" "}
          {crop.name}.
        </p>

      </section>

      <section className="variety-detail-grid">

        <div className="variety-detail-card">

          <span>⏱️</span>

          <p>
            Duration
          </p>

          <strong>
            {variety.duration}
          </strong>

        </div>

        <div className="variety-detail-card">

          <span>🌾</span>

          <p>
            Expected Yield
          </p>

          <strong>
            {variety.yield}
          </strong>

        </div>

        <div className="variety-detail-card">

          <span>🌱</span>

          <p>
            Sowing
          </p>

          <strong>
            {variety.sowingMonths.join(", ")}
          </strong>

        </div>

        <div className="variety-detail-card">

          <span>🧺</span>

          <p>
            Harvest
          </p>

          <strong>
            {variety.harvestMonths.join(", ")}
          </strong>

        </div>

      </section>

      <section className="crop-section">

        <div className="section-heading">

          <span>
            CROP CONDITIONS
          </span>

          <h2>
            Suitable Soil
          </h2>

        </div>

        <div className="soil-list">

          {crop.suitableSoils.map((soil) => (
            <span key={soil}>
              🌱 {soil}
            </span>
          ))}

        </div>

      </section>

      <section className="crop-section">

        <div className="section-heading">

          <span>
            WEATHER
          </span>

          <h2>
            Favorable Conditions
          </h2>

        </div>

        <div className="weather-grid">

          <div className="weather-card">
            <span>🌡️</span>
            <p>Temperature</p>
            <strong>
              {crop.weather.temperature}
            </strong>
          </div>

          <div className="weather-card">
            <span>🌧️</span>
            <p>Rainfall</p>
            <strong>
              {crop.weather.rainfall}
            </strong>
          </div>

          <div className="weather-card">
            <span>💧</span>
            <p>Humidity</p>
            <strong>
              {crop.weather.humidity}
            </strong>
          </div>

        </div>

      </section>

      <section className="crop-section">

        <div className="section-heading">

          <span>
            CROP HEALTH
          </span>

          <h2>
            Common Diseases
          </h2>

        </div>

        <div className="disease-grid">

          {crop.diseases.map((disease) => (

            <DiseaseCard
              key={disease.id}
              id={disease.id}
              name={disease.name}
              image={disease.image}
              cause={disease.cause}
              symptoms={disease.symptoms}
              prevention={disease.prevention}
              management={disease.management}
              fertilizerIds={disease.fertilizerIds}
            />

          ))}

        </div>

      </section>

      <Link
        to={`/crops/${crop.id}`}
        className="back-link"
      >
        ← Back to {crop.name}
      </Link>

    </main>
  );
}

export default VarietyDetails;