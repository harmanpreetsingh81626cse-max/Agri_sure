import { Link } from "react-router-dom";

interface SoilCardProps {
  id: string;
  name: string;
  description: string;
}

function SoilCard({
  id,
  name,
  description
}: SoilCardProps) {
  return (
    <article className="soil-card">

      <h2>{name}</h2>

      <p>{description}</p>

      <Link to={`/soil-crops/${id}`}>
        View Suitable Crops
      </Link>

    </article>
  );
}

export default SoilCard;