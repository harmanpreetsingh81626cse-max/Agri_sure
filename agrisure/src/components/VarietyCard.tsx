import { Link } from "react-router-dom";

interface VarietyCardProps {
  cropId: string;
  id: string;
  name: string;
  duration: string;
  yield: string;
  sowingMonths?: string[];
  harvestMonths?: string[];
}

function VarietyCard({
  cropId,
  id,
  name,
  duration,
  yield: cropYield,
  sowingMonths,
  harvestMonths
}: VarietyCardProps) {
  return (
    <article className="variety-card">

      <div className="variety-header">

        <span className="variety-icon">
          🌱
        </span>

        <h3>{name}</h3>

      </div>

      <div className="variety-information">

        <div className="info-row">

          <span>Duration</span>

          <strong>
            {duration}
          </strong>

        </div>

        <div className="info-row">

          <span>Expected Yield</span>

          <strong>
            {cropYield}
          </strong>

        </div>

        {sowingMonths && (
          <div className="info-row">

            <span>Sowing</span>

            <strong>
              {sowingMonths.join(", ")}
            </strong>

          </div>
        )}

        {harvestMonths && (
          <div className="info-row">

            <span>Harvest</span>

            <strong>
              {harvestMonths.join(", ")}
            </strong>

          </div>
        )}

      </div>

      <Link
        to={`/crops/${cropId}/${id}`}
        className="card-button secondary-button"
      >
        View Variety →
      </Link>

    </article>
  );
}

export default VarietyCard;