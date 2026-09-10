import { useState } from "react";
import { Link } from "react-router-dom";
import { crops } from "../data/crops";

function SoilCrops() {
  const [selectedSoil, setSelectedSoil] = useState("All");

  // Get all different soil types
  const soils = [
    "All",
    ...Array.from(
      new Set(crops.flatMap((crop) => crop.suitableSoils))
    )
  ];

  // Find crops suitable for selected soil
  const filteredCrops =
    selectedSoil === "All"
      ? crops
      : crops.filter((crop) =>
          crop.suitableSoils.includes(selectedSoil)
        );

  return (
    <main className="page">

      <section className="page-header">
        <h1>Soil & Crops</h1>

        <p>
          Select your soil type to discover suitable crops
          and their varieties.
        </p>
      </section>


      {/* Soil Selection */}

      <section className="soil-selection">

        <h2>Select Soil Type</h2>

        <select
          value={selectedSoil}
          onChange={(e) => setSelectedSoil(e.target.value)}
        >
          {soils.map((soil) => (
            <option key={soil} value={soil}>
              {soil}
            </option>
          ))}
        </select>

      </section>


      {/* Suitable Crops */}

      <section className="crop-section">

        <h2>
          Suitable Crops
          {selectedSoil !== "All" && ` for ${selectedSoil}`}
        </h2>

        <div className="crop-grid">

          {filteredCrops.length > 0 ? (

            filteredCrops.map((crop) => (

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

                <Link to={`/crops/${crop.id}`}>
                  View Crop & Varieties →
                </Link>

              </article>

            ))

          ) : (

            <p>
              No crops found for this soil type.
            </p>

          )}

        </div>

      </section>

    </main>
  );
}

export default SoilCrops;