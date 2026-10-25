import { ArrowRight, CheckCircle2, Lightbulb, Sprout, Target } from "lucide-react";
import { Link } from "react-router-dom";

const cards = [
  {
    icon: Target,
    title: "Our Purpose",
    text: "Agriculture involves many decisions. Agrisure makes basic agricultural information easier to explore and understand.",
  },
  {
    icon: Sprout,
    title: "What We Provide",
    text: "Explore crops, varieties, suitable soil, weather conditions, sowing periods, diseases and fertilizers.",
  },
  {
    icon: Lightbulb,
    title: "Built for Learning",
    text: "Agrisure is also a practical demonstration of modern frontend development using React, TypeScript, CSS and responsive design.",
  },
];

const points = [
  "Explore crops and varieties",
  "Match crops with soil",
  "Check the sowing calendar",
  "Learn about crop diseases",
  "Understand nutrient support",
];

function About() {
  return (
    <main className="page">
      <section className="page-header">
        <span className="tag">About Agrisure</span>
        <h1>Making agricultural information simpler</h1>
        <p>
          Agrisure brings useful crop, soil, variety, calendar, disease and
          nutrient information together in one platform.
        </p>
      </section>

      <section className="feature-grid">
        {cards.map((item) => (
          <div className="feature-card about-card" key={item.title}>
            <div className="feature-icon">
              <item.icon size={24} />
            </div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </section>

      <section className="about-panel">
        <div>
          <span className="tag">Agrisure</span>
          <h2>Simple information. Smarter exploration.</h2>
          <Link to="/crops" className="btn btn-green">
            Start exploring <ArrowRight size={16} />
          </Link>
        </div>

        <ul className="check-list">
          {points.map((point) => (
            <li key={point}>
              <CheckCircle2 size={20} />
              {point}
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default About;