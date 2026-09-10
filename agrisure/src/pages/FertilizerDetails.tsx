import { Link, useParams } from "react-router-dom";

function FertilizerDetails() {
  const { fertilizerId } = useParams();

  const fertilizers = [
    {
      id: "urea",
      name: "Urea",
      type: "Nitrogen Fertilizer",
      nutrient: "Nitrogen",
      use: "Helps promote vegetative growth and healthy leaves.",
      crops: "Wheat, Rice, Maize and other crops"
    },
    {
      id: "dap",
      name: "DAP",
      type: "Phosphorus Fertilizer",
      nutrient: "Nitrogen and Phosphorus",
      use: "Supports root development and early plant growth.",
      crops: "Wheat, Rice, Maize and other crops"
    },
    {
      id: "mop",
      name: "MOP",
      type: "Potassium Fertilizer",
      nutrient: "Potassium",
      use: "Supports overall plant development and crop quality.",
      crops: "Various field and horticultural crops"
    }
  ];

  const fertilizer = fertilizers.find(
    (item) => item.id === fertilizerId
  );

  if (!fertilizer) {
    return (
      <main className="page">

        <h1>Fertilizer Not Found</h1>

        <p>
          The fertilizer you are looking for does not exist.
        </p>

        <Link to="/fertilizers">
          ← Back to Fertilizers
        </Link>

      </main>
    );
  }

  return (
    <main className="page">

      <section className="page-header">
        <h1>{fertilizer.name}</h1>

        <p>
          Information about {fertilizer.name}.
        </p>
      </section>

      <section className="crop-section">

        <h2>Fertilizer Information</h2>

        <p>
          <strong>Type:</strong>{" "}
          {fertilizer.type}
        </p>

        <p>
          <strong>Main Nutrient:</strong>{" "}
          {fertilizer.nutrient}
        </p>

        <p>
          <strong>Use:</strong>{" "}
          {fertilizer.use}
        </p>

        <p>
          <strong>Suitable Crops:</strong>{" "}
          {fertilizer.crops}
        </p>

      </section>

      <Link to="/fertilizers">
        ← Back to Fertilizers
      </Link>

    </main>
  );
}

export default FertilizerDetails;