import { Link, useParams } from "react-router-dom";
import { crops } from "../data/crops";
import VarietyCard from "../components/VarietyCard";
import DiseaseCard from "../components/DiseaseCard";

function CropDetails() {
  const { cropId } = useParams();

  const crop = crops.find((item) => item.id === cropId);

  if (!crop) {
    return (
      <main className="page">

        <h1>Crop Not Found</h1>

        <p>
          The crop you are looking for does not exist.
        </p>

        <Link to="/crops">
          ← Back to Crops
        </Link>

      </main>
    );
  }

  return (
    <main className="page">

      {/* Crop Information */}

      <section className="crop-details">

        <h1>{crop.name}</h1>

        <p>{crop.description}</p>

      </section>


      {/* Soil */}

      <section className="crop-section">

        <h2>Suitable Soil</h2>

        <div className="soil-list">

          {crop.suitableSoils.map((soil) => (
            <span key={soil}>
              {soil}
            </span>
          ))}

        </div>

      </section>


      {/* Weather */}

      <section className="crop-section">

        <h2>Favorable Weather</h2>

        <p>
          <strong>Temperature:</strong>{" "}
          {crop.weather.temperature}
        </p>

        <p>
          <strong>Rainfall:</strong>{" "}
          {crop.weather.rainfall}
        </p>

        <p>
          <strong>Humidity:</strong>{" "}
          {crop.weather.humidity}
        </p>

      </section>


      {/* Varieties */}

      <section className="crop-section">

        <h2>Varieties</h2>

        <div className="variety-grid">

          {crop.varieties.map((variety) => (
            <VarietyCard
              key={variety.id}
              cropId={crop.id}
              id={variety.id}
              name={variety.name}
              duration={variety.duration}
              yield={variety.yield}
            />
          ))}

        </div>

      </section>


      {/* Diseases */}

      <section className="crop-section">

        <h2>Common Diseases</h2>

        <div className="disease-grid">

          {crop.diseases.map((disease) => (
            <DiseaseCard
              key={disease.id}
              name={disease.name}
              cause={disease.cause}
              symptoms={disease.symptoms}
              prevention={disease.prevention}
              management={disease.management}
            />
          ))}

        </div>

      </section>


      <Link to="/crops">
        ← Back to Crops
      </Link>

    </main>
  );
}

export default CropDetails;