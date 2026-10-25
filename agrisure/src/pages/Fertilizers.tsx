import { useEffect, useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Button from "../components/Button";

interface Fertilizer {
  id: string;
  name: string;
  image: string;
  nutrient: string;
  description: string;
  usedFor: string[];
}

function Fertilizers() {
  const [fertilizers, setFertilizers] = useState<Fertilizer[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  async function loadFertilizers() {
    try {
      setLoading(true);
      setError("");
      const response = await fetch("http://localhost:3001/fertilizers");
      if (!response.ok) throw new Error("bad response");
      setFertilizers((await response.json()) as Fertilizer[]);
    } catch {
      setError("Could not load fertilizers. Check that JSON Server is running.");
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadFertilizers();
  }, []);

  return (
    <main className="page">
      <section className="page-header">
        <span className="tag">Nutrient guide</span>
        <h1>Fertilizers</h1>
        <p>Explore fertilizers and nutrients commonly used in crop cultivation.</p>
      </section>

      <div className="notice">
        <Info size={22} />
        <div>
          <strong>Balanced nutrition matters</strong>
          <p>
            Fertilizer needs depend on the crop, soil and nutrient status. Follow
            local agricultural advice and soil testing where available.
          </p>
        </div>
      </div>

      {loading && <Loading />}

      {error && (
        <div className="empty-state" role="alert">
          <h2>Couldn't load fertilizers</h2>
          <p>{error}</p>
          <Button onClick={loadFertilizers}>Try again</Button>
        </div>
      )}

      {!loading && !error && (
        <section className="crop-grid">
          {fertilizers.map((item) => (
            <article className="crop-card" key={item.id}>
              <div className="fert-image-box">
                <img src={item.image} alt={item.name} className="fert-image" />
              </div>

              <div className="card-body">
                <span className="month-pill">{item.nutrient}</span>
                <h3>{item.name}</h3>
                <p className="card-text">{item.description}</p>

                <div className="card-stats">
                  {item.usedFor.map((use) => (
                    <span key={use}>{use}</span>
                  ))}
                </div>

                <Link to={`/fertilizers/${item.id}`} className="card-link">
                  View details <ArrowRight size={16} />
                </Link>
              </div>
            </article>
          ))}
        </section>
      )}
    </main>
  );
}

export default Fertilizers;