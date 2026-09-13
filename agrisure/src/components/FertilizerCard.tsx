import { Link } from "react-router-dom";

interface FertilizerCardProps {
  id: string;
  name: string;
  image: string;
  type: string;
  nutrients: string;
  description: string;
}

function FertilizerCard({
  id,
  name,
  image,
  type,
  nutrients,
  description
}: FertilizerCardProps) {
  return (
    <article className="fertilizer-card">

      <div className="fertilizer-card-image">
        <img src={image} alt={name} />
      </div>

      <div className="fertilizer-card-content">

        <span className="card-label">{type}</span>

        <h3>{name}</h3>

        <p>
          <strong>Nutrients:</strong> {nutrients}
        </p>

        <p>{description}</p>

        <Link to={`/fertilizers/${id}`}>
          View Fertilizer →
        </Link>

      </div>

    </article>
  );
}

export default FertilizerCard;