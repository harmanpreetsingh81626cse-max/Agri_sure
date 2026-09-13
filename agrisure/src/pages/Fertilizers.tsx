import FertilizerCard from "../components/FertilizerCard";
import fertilizers from "../data/fertilizers";

function Fertilizers() {
  return (
    <main className="page">

      <section className="page-header">

        <span>
          NUTRIENT INFORMATION
        </span>

        <h1>
          Fertilizers
        </h1>

        <p>
          Explore fertilizers and nutrients commonly
          used in crop cultivation.
        </p>

      </section>

      <section className="fertilizer-intro">

        <div>

          <span>
            IMPORTANT
          </span>

          <h2>
            Balanced nutrition matters.
          </h2>

          <p>
            Fertilizer requirements depend on the crop,
            soil and nutrient status. Actual applications
            should be based on appropriate agricultural
            recommendations and soil testing where available.
          </p>

        </div>

        <div className="fertilizer-intro-icon">
          🧪
        </div>

      </section>

      <section className="fertilizer-grid">

        {fertilizers.map((fertilizer) => (

          <FertilizerCard
            key={fertilizer.id}
            id={fertilizer.id}
            name={fertilizer.name}
            image={fertilizer.image}
            type={fertilizer.type}
            nutrients={fertilizer.nutrients}
            description={fertilizer.description}
          />

        ))}

      </section>

    </main>
  );
}

export default Fertilizers;