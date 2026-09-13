import { Link, useParams } from "react-router-dom";
import fertilizers from "../data/fertilizers";

function FertilizerDetails() {
  const { fertilizerId } = useParams();

  const fertilizer = fertilizers.find(
    (item) => item.id === fertilizerId
  );

  if (!fertilizer) {
    return (
      <main className="page">

        <h1>
          Fertilizer Not Found
        </h1>

        <Link to="/fertilizers">
          ← Back to Fertilizers
        </Link>

      </main>
    );
  }

  return (
    <main className="page">

      <section className="fertilizer-detail-hero">

        <div className="fertilizer-detail-image">

          <img
            src={fertilizer.image}
            alt={fertilizer.name}
          />

        </div>

        <div>

          <span className="card-label">
            FERTILIZER INFORMATION
          </span>

          <h1>
            {fertilizer.name}
          </h1>

          <p>
            {fertilizer.description}
          </p>

          <div className="fertilizer-meta">

            <div>
              <span>
                Type
              </span>

              <strong>
                {fertilizer.type}
              </strong>
            </div>

            <div>
              <span>
                Nutrients
              </span>

              <strong>
                {fertilizer.nutrients}
              </strong>
            </div>

          </div>

        </div>

      </section>

      <section className="crop-section">

        <div className="section-heading">

          <span>
            SUITABLE CROPS
          </span>

          <h2>
            Where it may be used
          </h2>

        </div>

        <div className="soil-list">

          {fertilizer.suitableCrops.map(
            (crop) => (
              <span key={crop}>
                🌱 {crop}
              </span>
            )
          )}

        </div>

      </section>

      <section className="nutrient-note">

        <span>
          🌿
        </span>

        <div>

          <h3>
            Remember
          </h3>

          <p>
            Fertilizer selection and application should
            be based on crop requirements, soil conditions
            and appropriate agricultural recommendations.
          </p>

        </div>

      </section>

      <Link
        to="/fertilizers"
        className="back-link"
      >
        ← Back to Fertilizers
      </Link>

    </main>
  );
}

export default FertilizerDetails;