import { useEffect, useState } from "react";
import { ChevronDown, Search } from "lucide-react";
import CropCard from "../components/CropCard";
import Loading from "../components/Loading";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCrops } from "../store/cropsSlice";

function Crops() {
  const dispatch = useAppDispatch();
  const { items: crops, status, error } = useAppSelector((state) => state.crops);

  const [search, setSearch] = useState("");
  const [selectedSoil, setSelectedSoil] = useState("All");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrops());
    }
  }, [dispatch, status]);

  const soils = ["All", ...new Set(crops.flatMap((crop) => crop.suitableSoils))];

  const filteredCrops = crops.filter((crop) => {
    const matchesSearch = crop.name
      .toLowerCase()
      .includes(search.trim().toLowerCase());
    const matchesSoil =
      selectedSoil === "All" || crop.suitableSoils.includes(selectedSoil);

    return matchesSearch && matchesSoil;
  });

  return (
    <main className="page">
      <section className="page-header">
        <span className="tag">Agricultural Database</span>
        <h1>Explore Crops</h1>
        <p>
          Find crops, their varieties, soil needs, weather conditions and
          common diseases.
        </p>
      </section>

      <section className="filters">
        <div className="search-box">
          <Search size={18} />
          <input
            type="text"
            placeholder="Search for a crop..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            aria-label="Search crops"
          />
        </div>

        <div className="select-wrap">
          <select
            value={selectedSoil}
            onChange={(e) => setSelectedSoil(e.target.value)}
            aria-label="Filter by soil"
          >
            {soils.map((soil) => (
              <option key={soil} value={soil}>
                {soil === "All" ? "All soils" : soil}
              </option>
            ))}
          </select>
          <ChevronDown size={18} />
        </div>
      </section>

      {status === "loading" && <Loading />}

      {status === "failed" && (
        <div className="empty-state" role="alert">
          <h2>Couldn't load crops</h2>
          <p>{error}</p>
          <Button onClick={() => dispatch(fetchCrops())}>Try again</Button>
        </div>
      )}

      {status === "succeeded" && (
        <>
          <p className="result-count">
            Showing <strong>{filteredCrops.length}</strong> crops
          </p>

          {filteredCrops.length > 0 ? (
            <section className="crop-grid">
              {filteredCrops.map((crop) => (
                <CropCard
                  key={crop.id}
                  id={crop.id}
                  name={crop.name}
                  description={crop.description}
                  image={crop.image}
                  varietyCount={crop.varieties.length}
                  diseaseCount={crop.diseases.length}
                />
              ))}
            </section>
          ) : (
            <div className="empty-state">
              <h2>No crops found</h2>
              <p>Try another search or soil type.</p>
            </div>
          )}
        </>
      )}
    </main>
  );
}

export default Crops;