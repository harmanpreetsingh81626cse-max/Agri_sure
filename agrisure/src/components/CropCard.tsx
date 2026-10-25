import { ArrowRight, Bug, Leaf } from "lucide-react";
import { Link } from "react-router-dom";
import BookmarkButton from "./BookmarkButton";

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
  diseaseCount,
}: CropCardProps) {
  return (
    <article className="crop-card">
      <div className="card-image-box">
        <img src={image} alt={name} className="card-image" />
        <BookmarkButton cropId={id} cropName={name} />
      </div>

      <div className="card-body">
        <h3>{name}</h3>
        <p className="card-text">{description}</p>

        <div className="card-stats">
          {varietyCount !== undefined && (
            <span><Leaf size={15} /> {varietyCount} Varieties</span>
          )}
          {diseaseCount !== undefined && (
            <span><Bug size={15} /> {diseaseCount} Diseases</span>
          )}
        </div>

        <Link to={`/crops/${id}`} className="card-link">
          Explore crop <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
}

export default CropCard;