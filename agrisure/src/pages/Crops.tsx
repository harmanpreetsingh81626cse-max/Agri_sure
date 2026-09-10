import { useState } from "react";
import { crops } from "../data/crops";
import CropCard from "../components/CropCard";
import SearchBar from "../components/SearchBar";

function Crops() {
  const [search, setSearch] = useState("");

  const filteredCrops = crops.filter((crop) =>
    crop.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="page">

      <section className="page-header">
        <h1>Explore Crops</h1>

        <p>
          Explore crops, varieties, soil requirements, weather,
          diseases and cultivation information.
        </p>
      </section>

      <section className="search-section">
        <SearchBar
          value={search}
          onChange={setSearch}
          placeholder="Search for a crop..."
        />
      </section>

      <section className="crop-grid">

        {filteredCrops.length > 0 ? (
          filteredCrops.map((crop) => (
            <CropCard
              key={crop.id}
              id={crop.id}
              name={crop.name}
              description={crop.description}
            />
          ))
        ) : (
          <p>No crops found.</p>
        )}

      </section>

    </main>
  );
}

export default Crops;