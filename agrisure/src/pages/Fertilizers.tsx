import { Link } from "react-router-dom";

function Fertilizers() {
  const fertilizers = [
    {
      id: "urea",
      name: "Urea",
      type: "Nitrogen Fertilizer",
      description:
        "Urea is a commonly used nitrogen fertilizer that helps promote plant growth and healthy leaves."
    },
    {
      id: "dap",
      name: "DAP",
      type: "Phosphorus Fertilizer",
      description:
        "DAP provides nitrogen and phosphorus and is commonly used to support root and plant development."
    },
    {
      id: "mop",
      name: "MOP",
      type: "Potassium Fertilizer",
      description:
        "MOP is a potassium fertilizer that supports plant growth and overall crop development."
    }
  ];

  return (
    <main className="page">

      <section className="page-header">
        <h1>Fertilizers</h1>

        <p>
          Explore commonly used fertilizers and learn about
          their basic uses in crop cultivation.
        </p>
      </section>

      <section className="crop-grid">

        {fertilizers.map((fertilizer) => (
          <article
            className="crop-card"
            key={fertilizer.id}
          >
            <h2>{fertilizer.name}</h2>

            <p>
              <strong>Type:</strong>{" "}
              {fertilizer.type}
            </p>

            <p>
              {fertilizer.description}
            </p>

            <Link
              to={`/fertilizers/${fertilizer.id}`}
            >
              View Fertilizer →
            </Link>
          </article>
        ))}

      </section>

    </main>
  );
}

export default Fertilizers;