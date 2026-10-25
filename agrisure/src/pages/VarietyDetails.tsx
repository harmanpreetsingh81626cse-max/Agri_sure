import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock, Wheat } from "lucide-react";
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

interface CropFull {
  id: string;
  name: string;
  image: string;
  varieties: Variety[];
}

function VarietyDetails() {
  const { cropId, varietyId } = useParams();
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
  const variety = crop?.varieties.find((item) => item.id === varietyId);

  if (!crop || !variety) {
    return (
      <main className="page">
        <div className="empty-state">
          <h2>Variety not found</h2>
          <p>We could not find that variety.</p>
          <Link to="/crops" className="btn btn-green">Back to crops</Link>
        </div>
      </main>
    );
  }

  return (
    <main className="page">
      <Link to={`/crops/${crop.id}`} className="back-link">
        <ArrowLeft size={16} /> Back to {crop.name}
      </Link>

      <section className="details-hero">
        <img src={crop.image} alt={crop.name} className="details-image" />

        <div className="details-info">
          <span className="tag">{crop.name} variety</span>
          <h1>{variety.name}</h1>

          <div className="weather-row">
            <div className="weather-item">
              <Clock size={20} />
              <div>
                <small>Duration</small>
                <strong>{variety.duration}</strong>
              </div>
            </div>
            <div className="weather-item">
              <Wheat size={20} />
              <div>
                <small>Yield</small>
                <strong>{variety.yield}</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="two-col">
        <div className="panel">
          <h2 className="section-title">
            <CalendarDays size={20} /> Sowing months
          </h2>
          <div className="chip-row left">
            {variety.sowingMonths.map((month) => (
              <span className="chip static" key={month}>{month}</span>
            ))}
          </div>
        </div>

        <div className="panel">
          <h2 className="section-title">
            <CalendarDays size={20} /> Harvest months
          </h2>
          <div className="chip-row left">
            {variety.harvestMonths.map((month) => (
              <span className="chip static" key={month}>{month}</span>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

export default VarietyDetails;