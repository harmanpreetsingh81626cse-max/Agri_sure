interface DiseaseCardProps {
  name: string;
  cause: string;
  symptoms: string;
  prevention: string;
  management: string;
}

function DiseaseCard({
  name,
  cause,
  symptoms,
  prevention,
  management
}: DiseaseCardProps) {
  return (
    <article className="disease-card">

      <h3>{name}</h3>

      <p>
        <strong>Cause:</strong> {cause}
      </p>

      <p>
        <strong>Symptoms:</strong> {symptoms}
      </p>

      <p>
        <strong>Prevention:</strong> {prevention}
      </p>

      <p>
        <strong>Management:</strong> {management}
      </p>

    </article>
  );
}

export default DiseaseCard;