import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCrops } from "../store/cropsSlice";

interface Fertilizer {
  id: string;
  name: string;
  image: string;
  nutrient: string;
  description: string;
  usedFor: string[];
}

interface CropFull {
  id: string;
  name: string;
  diseases: { id: string; name: string; fertilizerIds: string[] }[];
}

function FertilizerDetails() {
  const { fertilizerId } = useParams();
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.crops);

  const [fertilizer, setFertilizer] = useState<Fertilizer | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrops());
    }
  }, [dispatch, status]);

  useEffect(() => {
    async function load() {
      try {
        const response = await fetch(
          `http://localhost:3001/fertilizers/${fertilizerId}`
        );
        setFertilizer(response.ok ? ((await response.json()) as Fertilizer) : null);
      } catch {
        setFertilizer(null);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, [fertilizerId]);

  if (loading) {
    return (
      <main className="page">
        <Loading />
      </main>
    );
  }

  if (!fertilizer) {
    return (
      <main className="page">
        <div className="empty-state">
          <h2>Fertilizer not found</h2>
          <p>We could not find that fertilizer.</p>
          <Link to="/fertilizers" className="btn btn-green">Back to fertilizers</Link>
        </div>
      </main>
    );
  }

  // diseases where this fertilizer is listed
  const related = (items as unknown as CropFull[]).flatMap((crop) =>
    crop.diseases
      .filter((disease) => disease.fertilizerIds.includes(fertilizer.id))
      .map((disease) => ({ ...disease, cropId: crop.id, cropName: crop.name }))
  );

  return (
    <main className="page">
      <Link to="/fertilizers" className="back-link">
        <ArrowLeft size={16} /> Back to fertilizers
      </Link>

      <section className="details-hero fert-hero">
        <div className="fert-detail-image">
          <img src={fertilizer.image} alt={fertilizer.name} />
        </div>

        <div className="details-info">
          <span className="tag">{fertilizer.nutrient}</span>
          <h1>{fertilizer.name}</h1>
          <p>{fertilizer.description}</p>

          <h3 className="mini-title">Commonly used for</h3>
          <div className="chip-row left">
            {fertilizer.usedFor.map((crop) => (
              <span className="chip static" key={crop}>{crop}</span>
            ))}
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="details-section">
          <h2 className="section-title">Related crop diseases ({related.length})</h2>
          <div className="list-grid">
            {related.map((disease) => (
              <Link
                to={`/crops/${disease.cropId}`}
                className="list-item link"
                key={disease.id}
              >
                {disease.name}
                <small className="muted"> · {disease.cropName}</small>
              </Link>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}

export default FertilizerDetails;