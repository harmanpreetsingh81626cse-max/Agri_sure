import { Link } from "react-router-dom";

interface CropCardProps {
  id: string;
  name: string;
  description: string;
}

function CropCard({ id, name, description }: CropCardProps) {
  return (
    <article className="crop-card">

      <div className="crop-card-content">
        <h2>{name}</h2>

        <p>{description}</p>

        <Link to={`/crops/${id}`}>
          View Crop
        </Link>
      </div>

    </article>
  );
}

export default CropCard;