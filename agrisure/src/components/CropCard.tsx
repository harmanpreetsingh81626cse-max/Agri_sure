import { Link } from "react-router-dom";

interface CropCardProps {
  id: string;
  name: string;
  description: string;
  image: string;
  varietyCount?: number;
  diseaseCount?: number;
}

function CropCard({
  id,
  name,
  description,
  image,
  varietyCount,
  diseaseCount
}: CropCardProps) {
  return (
    <article className="crop-card">

      <div className="card-image-container">

        <img
          src={image}
          alt={`${name} crop`}
          className="card-image"
        />

      </div>

      <div className="crop-card-content">

        <span className="card-label">
          CROP
        </span>

        <h2>{name}</h2>

        <p>
          {description}
        </p>

        <div className="card-stats">

          {varietyCount !== undefined && (
            <span>
              🌱 {varietyCount} Varieties
            </span>
          )}

          {diseaseCount !== undefined && (
            <span>
              🦠 {diseaseCount} Diseases
            </span>
          )}

        </div>

        <Link
          to={`/crops/${id}`}
          className="card-button"
        >
          Explore Crop →
        </Link>

      </div>

    </article>
  );
}

export default CropCard;