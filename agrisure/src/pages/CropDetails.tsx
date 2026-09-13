import { Link, useParams } from "react-router-dom";
import { crops } from "../data/crops";
import VarietyCard from "../components/VarietyCard";
import DiseaseCard from "../components/DiseaseCard";

function CropDetails() {
  const { cropId } = useParams();

  const crop = crops.find(
    (item) => item.id === cropId
  );

  if (!crop) {
    return (
      <main className="page">

        <div className="not-found-inline">

          <h1>
            Crop Not Found
          </h1>

          <p>
            The crop you are looking for does not exist.
          </p>

          <Link to="/crops">
            ← Back to Crops
          </Link>

        </div>

      </main>
    );
  }

  return (
    <main className="page">

      <section className="crop-detail-hero">

        <div className="crop-detail-image">

          <img
            src={crop.image}
            alt={crop.name}
          />

        </div>

        <div className="crop-detail-intro">

          <span className="card-label">
            CROP INFORMATION
          </span>

          <h1>
            {crop.name}
          </h1>

          <p>
            {crop.description}
          </p>

          <div className="detail-stats">

            <div>
              <strong>
                {crop.varieties.length}
              </strong>

              <span>
                Varieties
              </span>
            </div>

            <div>
              <strong>
                {crop.diseases.length}
              </strong>

              <span>
                Diseases
              </span>
            </div>

            <div>
              <strong>
                {crop.suitableSoils.length}
              </strong>

              <span>
                Soil Types
              </span>
            </div>

          </div>

        </div>

      </section>

      <section className="crop-section">

        <div className="section-heading">

          <span>
            SOIL REQUIREMENTS
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
            GROWING CONDITIONS
          </span>

          <h2>
            Favorable Weather
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
            VARIETIES
          </span>

          <h2>
            Explore Varieties
          </h2>

        </div>

        <div className="variety-grid">

          {crop.varieties.map((variety) => (

            <VarietyCard
              key={variety.id}
              cropId={crop.id}
              id={variety.id}
              name={variety.name}
              duration={variety.duration}
              yield={variety.yield}
              sowingMonths={variety.sowingMonths}
              harvestMonths={variety.harvestMonths}
            />

          ))}

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

          <p>
            Learn about symptoms, prevention and
            management of common diseases.
          </p>

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
        to="/crops"
        className="back-link"
      >
        ← Back to Crops
      </Link>

    </main>
  );
}

export default CropDetails;