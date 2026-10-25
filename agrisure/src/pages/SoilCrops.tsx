import { useEffect, useState } from "react";
import CropCard from "../components/CropCard";
import Loading from "../components/Loading";
import Button from "../components/Button";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCrops } from "../store/cropsSlice";

function SoilCrops() {
  const dispatch = useAppDispatch();
  const { items: crops, status, error } = useAppSelector((state) => state.crops);
  const [selectedSoil, setSelectedSoil] = useState("");

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrops());
    }
  }, [dispatch, status]);

  const soils = [...new Set(crops.flatMap((crop) => crop.suitableSoils))];
  const activeSoil = selectedSoil || soils[0] || "";

  const matchingCrops = crops.filter((crop) =>
    crop.suitableSoils.includes(activeSoil)
  );

  return (
    <main className="page">
      <section className="page-header">
        <span className="tag">Soil guide</span>
        <h1>Soil &amp; Crops</h1>
        <p>Choose a soil type to see which crops grow well in it.</p>
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
          <div className="chip-row">
            {soils.map((soil) => (
              <button
                type="button"
                key={soil}
                className={soil === activeSoil ? "chip active" : "chip"}
                onClick={() => setSelectedSoil(soil)}
              >
                {soil}
              </button>
            ))}
          </div>

          <p className="result-count">
            <strong>{matchingCrops.length}</strong> crops grow well in{" "}
            <strong>{activeSoil}</strong>
          </p>

          <section className="crop-grid">
            {matchingCrops.map((crop) => (
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
        </>
      )}
    </main>
  );
}

export default SoilCrops;