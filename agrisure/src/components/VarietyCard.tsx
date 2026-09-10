import { Link } from "react-router-dom";

interface VarietyCardProps {
  cropId: string;
  id: string;
  name: string;
  duration: string;
  yield: string;
}

function VarietyCard({
  cropId,
  id,
  name,
  duration,
  yield: cropYield
}: VarietyCardProps) {
  return (
    <article className="variety-card">

      <h3>{name}</h3>

      <p>
        <strong>Duration:</strong> {duration}
      </p>

      <p>
        <strong>Yield:</strong> {cropYield}
      </p>

      <Link to={`/crops/${cropId}/${id}`}>
        View Variety
      </Link>

    </article>
  );
}

export default VarietyCard;