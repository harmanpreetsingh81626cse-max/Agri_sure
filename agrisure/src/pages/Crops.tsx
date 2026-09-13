import { useState } from "react";
import { crops } from "../data/crops";
import CropCard from "../components/CropCard";
import SearchBar from "../components/SearchBar";

function Crops() {
  const [search, setSearch] = useState("");

  const filteredCrops = crops.filter((crop) =>
    crop.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <main className="page">

      <section className="page-header">

        <span>
          AGRICULTURAL DATABASE
        </span>

        <h1>
          Explore Crops
        </h1>

        <p>
          Discover crops, varieties, soil requirements,
          weather conditions and common diseases.
        </p>

      </section>

      <section className="search-section">

        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search for a crop..."
        />

      </section>

      <section className="results-heading">

        <p>
          Showing{" "}
          <strong>
            {filteredCrops.length}
          </strong>{" "}
          crops
        </p>

      </section>

      <section className="crop-grid">

        {filteredCrops.length > 0 ? (

          filteredCrops.map((crop) => (

            <CropCard
              key={crop.id}
              id={crop.id}
              name={crop.name}
              description={crop.description}
              image={crop.image}
              varietyCount={crop.varieties.length}
              diseaseCount={crop.diseases.length}
            />

          ))

        ) : (

          <div className="empty-state">

            <span>🌱</span>

            <h2>
              No crops found
            </h2>

            <p>
              Try searching for another crop.
            </p>

          </div>

        )}

      </section>

    </main>
  );
}

export default Crops;