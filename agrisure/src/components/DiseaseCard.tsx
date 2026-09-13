import { Link } from "react-router-dom";
import fertilizers from "../data/fertilizers";

interface DiseaseCardProps {
  id?: string;
  name: string;
  image: string;
  cause: string;
  symptoms: string;
  prevention: string;
  management: string;
  fertilizerIds: string[];
}

function DiseaseCard({
  name,
  image,
  cause,
  symptoms,
  prevention,
  management,
  fertilizerIds
}: DiseaseCardProps) {

  const relatedFertilizers = fertilizers.filter(
    (fertilizer) =>
      fertilizerIds.includes(fertilizer.id)
  );

  return (
    <article className="disease-card">

      <div className="disease-image-container">

        <img
          src={image}
          alt={`${name} disease`}
          className="disease-image"
        />

      </div>

      <div className="disease-content">

        <span className="card-label disease-label">
          DISEASE
        </span>

        <h3>
          {name}
        </h3>

        <div className="disease-information">

          <div>
            <strong>Cause</strong>

            <p>
              {cause}
            </p>
          </div>

          <div>
            <strong>Symptoms</strong>

            <p>
              {symptoms}
            </p>
          </div>

          <div>
            <strong>Prevention</strong>

            <p>
              {prevention}
            </p>
          </div>

          <div>
            <strong>Management</strong>

            <p>
              {management}
            </p>
          </div>

        </div>

        {relatedFertilizers.length > 0 && (
          <div className="disease-fertilizers">

            <h4>
              Recommended Nutrient Support
            </h4>

            <p>
              These fertilizers may be relevant where
              the corresponding nutrient requirement
              has been identified.
            </p>

            <div className="fertilizer-links">

              {relatedFertilizers.map((fertilizer) => (
                <Link
                  key={fertilizer.id}
                  to={`/fertilizers/${fertilizer.id}`}
                >
                  {fertilizer.name} →
                </Link>
              ))}

            </div>

          </div>
        )}

      </div>

    </article>
  );
}

export default DiseaseCard;