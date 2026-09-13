import { useState } from "react";
import { Link } from "react-router-dom";
import { crops } from "../data/crops";

function SoilCrops() {
  const [selectedSoil, setSelectedSoil] =
    useState("All");

  const soils = [
    "All",
    ...Array.from(
      new Set(
        crops.flatMap(
          (crop) => crop.suitableSoils
        )
      )
    )
  ];

  const filteredCrops =
    selectedSoil === "All"
      ? crops
      : crops.filter((crop) =>
          crop.suitableSoils.includes(
            selectedSoil
          )
        );

  return (
    <main className="page">

      <section className="page-header">

        <span>
          SMART SOIL MATCHING
        </span>

        <h1>
          Soil & Crops
        </h1>

        <p>
          Select a soil type to discover crops
          suitable for it.
        </p>

      </section>

      <section className="soil-selector">

        <div>

          <span>
            SELECT SOIL TYPE
          </span>

          <h2>
            Find Suitable Crops
          </h2>

        </div>

        <select
          value={selectedSoil}
          onChange={(e) =>
            setSelectedSoil(e.target.value)
          }
        >

          {soils.map((soil) => (

            <option
              key={soil}
              value={soil}
            >
              {soil}
            </option>

          ))}

        </select>

      </section>

      <section className="crop-section">

        <div className="section-heading">

          <span>
            RESULTS
          </span>

          <h2>
            {selectedSoil === "All"
              ? "All Crops"
              : `Crops suitable for ${selectedSoil}`}
          </h2>

        </div>

        <div className="crop-grid">

          {filteredCrops.length > 0 ? (

            filteredCrops.map((crop) => (

              <article
                className="crop-card"
                key={crop.id}
              >

                <div className="card-image-container">

                  <img
                    src={crop.image}
                    alt={crop.name}
                    className="card-image"
                  />

                </div>

                <div className="crop-card-content">

                  <span className="card-label">
                    {crop.varieties.length} VARIETIES
                  </span>

                  <h2>
                    {crop.name}
                  </h2>

                  <p>
                    {crop.description}
                  </p>

                  <div className="soil-list small-soil-list">

                    {crop.suitableSoils
                      .slice(0, 3)
                      .map((soil) => (
                        <span key={soil}>
                          {soil}
                        </span>
                      ))}

                  </div>

                  <Link
                    to={`/crops/${crop.id}`}
                    className="card-button"
                  >
                    View Crop →
                  </Link>

                </div>

              </article>

            ))

          ) : (

            <div className="empty-state">

              <span>🌱</span>

              <h2>
                No suitable crops found
              </h2>

              <p>
                Try selecting another soil type.
              </p>

            </div>

          )}

        </div>

      </section>

    </main>
  );
}

export default SoilCrops;