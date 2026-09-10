import { Link, useParams } from "react-router-dom";
import { crops } from "../data/crops";
import DiseaseCard from "../components/DiseaseCard";

function VarietyDetails() {
  const { cropId, varietyId } = useParams();

  const crop = crops.find((item) => item.id === cropId);

  if (!crop) {
    return (
      <main className="page">
        <h1>Crop Not Found</h1>

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
        <h1>Variety Not Found</h1>

        <Link to={`/crops/${crop.id}`}>
          ← Back to {crop.name}
        </Link>
      </main>
    );
  }

  return (
    <main className="page">

      <section className="page-header">
        <h1>{variety.name}</h1>

        <p>
          {variety.name} is a variety of {crop.name}.
        </p>
      </section>

      <section className="crop-section">
        <h2>Variety Information</h2>

        <p>
          <strong>Crop:</strong> {crop.name}
        </p>

        <p>
          <strong>Duration:</strong> {variety.duration}
        </p>

        <p>
          <strong>Expected Yield:</strong> {variety.yield}
        </p>

        <p>
          <strong>Sowing Months:</strong>{" "}
          {variety.sowingMonths.join(", ")}
        </p>

        <p>
          <strong>Harvest Months:</strong>{" "}
          {variety.harvestMonths.join(", ")}
        </p>
      </section>

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

      <Link to={`/crops/${crop.id}`}>
        ← Back to {crop.name}
      </Link>

    </main>
  );
}

export default VarietyDetails;