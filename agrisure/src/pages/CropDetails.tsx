import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, ArrowRight, CloudRain, Droplets, Thermometer } from "lucide-react";
import BookmarkButton from "../components/BookmarkButton";
import Loading from "../components/Loading";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCrops } from "../store/cropsSlice";

interface Variety {
  id: string;
  name: string;
  duration: string;
  yield: string;
  sowingMonths: string[];
  harvestMonths: string[];
}

interface Disease {
  id: string;
  name: string;
  image: string;
  cause: string;
  symptoms: string;
  prevention: string;
  management: string;
  fertilizerIds: string[];
}

interface CropFull {
  id: string;
  name: string;
  image: string;
  description: string;
  suitableSoils: string[];
  weather: { temperature: string; rainfall: string; humidity: string };
  varieties: Variety[];
  diseases: Disease[];
}

// "zinc-sulphate" -> "Zinc Sulphate"
function formatId(id: string) {
  return id
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function CropDetails() {
  const { cropId } = useParams();
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.crops);

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrops());
    }
  }, [dispatch, status]);

  if (status === "idle" || status === "loading") {
    return (
      <main className="page">
        <Loading />
      </main>
    );
  }

  const crop = (items as unknown as CropFull[]).find((item) => item.id === cropId);

  if (!crop) {
    return (
      <main className="page">
        <div className="empty-state">
          <h2>Crop not found</h2>
          <p>We could not find that crop.</p>
          <Link to="/crops" className="btn btn-green">Back to crops</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to="/crops" className="back-link">
        <ArrowLeft size={16} /> Back to crops
      </Link>

      <section className="details-hero">
        <div className="details-bookmark">
          <BookmarkButton cropId={crop.id} cropName={crop.name} />
        </div>

        <img src={crop.image} alt={crop.name} className="details-image" />

        <div className="details-info">
          <span className="tag">Crop</span>
          <h1>{crop.name}</h1>
          <p>{crop.description}</p>

          <div className="weather-row">
            <div className="weather-item">
              <Thermometer size={20} />
              <div>
                <small>Temperature</small>
                <strong>{crop.weather.temperature}</strong>
              </div>
            </div>
            <div className="weather-item">
              <CloudRain size={20} />
              <div>
                <small>Rainfall</small>
                <strong>{crop.weather.rainfall}</strong>
              </div>
            </div>
            <div className="weather-item">
              <Droplets size={20} />
              <div>
                <small>Humidity</small>
                <strong>{crop.weather.humidity}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="details-section">
        <h2 className="section-title">Suitable soils</h2>
        <div className="chip-row left">
          {crop.suitableSoils.map((soil) => (
            <span className="chip static" key={soil}>{soil}</span>
          ))}
        </div>
      </section>

      <section className="details-section">
        <h2 className="section-title">Varieties ({crop.varieties.length})</h2>
        <div className="variety-grid">
          {crop.varieties.map((variety) => (
            <Link
              to={`/crops/${crop.id}/${variety.id}`}
              className="variety-card"
              key={variety.id}
            >
              <h3>{variety.name}</h3>
              <div className="info-row">
                <small>Duration</small>
                <span>{variety.duration}</span>
              </div>
              <div className="info-row">
                <small>Yield</small>
                <span>{variety.yield}</span>
              </div>
              <span className="card-link">
                View variety <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="details-section">
        <h2 className="section-title">Common diseases ({crop.diseases.length})</h2>
        <div className="disease-grid">
          {crop.diseases.map((disease) => (
            <article className="disease-card" key={disease.id}>
              <div className="disease-image-box">
                <img src={disease.image} alt={disease.name} className="disease-image" />
              </div>

              <div className="disease-body">
                <span className="month-pill">{disease.cause}</span>
                <h3>{disease.name}</h3>

                <div className="info-row">
                  <small>Symptoms</small>
                  <span>{disease.symptoms}</span>
                </div>
                <div className="info-row">
                  <small>Prevention</small>
                  <span>{disease.prevention}</span>
                </div>
                <div className="info-row">
                  <small>Management</small>
                  <span>{disease.management}</span>
                </div>

                {disease.fertilizerIds.length > 0 && (
                  <div className="info-row">
                    <small>Related fertilizers</small>
                    <div className="card-stats">
                      {disease.fertilizerIds.map((id) => (
                        <Link to={`/fertilizers/${id}`} className="stat-link" key={id}>
                          {formatId(id)}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}

export default CropDetails;