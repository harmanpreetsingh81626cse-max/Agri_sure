import { useEffect } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Bookmark,
  Bug,
  CalendarDays,
  FlaskConical,
  Layers,
  Leaf,
  Search,
  Sprout,
} from "lucide-react";
import CropCard from "../components/CropCard";
import { useAuth } from "../contexts/AuthContext";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { fetchCrops } from "../store/cropsSlice";

// change these paths to use your old home page images
const HERO_IMAGES = {
  main: "/images/crops/wheat.jpg",
  top: "/images/crops/tomato.jpg",
  bottom: "/images/crops/cotton.jpg",
  banner: "/images/crops/sugarcane.jpg",
};

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const features = [
  { icon: Sprout, title: "Crops", text: "Browse crops with their varieties, weather needs and diseases.", to: "/crops" },
  { icon: Layers, title: "Soil & Crops", text: "Pick a soil type and see which crops grow best in it.", to: "/soil-crops" },
  { icon: CalendarDays, title: "Crop Calendar", text: "Know when to sow and harvest through the year.", to: "/crop-calendar" },
  { icon: FlaskConical, title: "Fertilizers", text: "Learn which fertilizers suit which crops.", to: "/fertilizers" },
];

const steps = [
  { icon: Search, title: "Find a crop", text: "Search by name or filter crops by soil type." },
  { icon: Leaf, title: "Learn about it", text: "See varieties, weather needs, sowing months and diseases." },
  { icon: Bookmark, title: "Save your favourites", text: "Log in and bookmark crops to keep them in your profile." },
];

interface HomeCrop {
  id: string;
  name: string;
  description: string;
  image: string;
  varieties: { id: string; name: string; sowingMonths: string[] }[];
  diseases: unknown[];
}

function Home() {
  const dispatch = useAppDispatch();
  const { items, status } = useAppSelector((state) => state.crops);
  const { user } = useAuth();

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchCrops());
    }
  }, [dispatch, status]);

  const crops = items as unknown as HomeCrop[];
  const ready = status === "succeeded";

  const totalVarieties = crops.reduce((sum, crop) => sum + crop.varieties.length, 0);
  const totalDiseases = crops.reduce((sum, crop) => sum + crop.diseases.length, 0);

  const currentMonth = months[new Date().getMonth()];
  const sowNow = crops.filter((crop) =>
    crop.varieties.some((variety) => variety.sowingMonths.includes(currentMonth))
  );

  const stats = [
    { icon: Sprout, value: ready ? crops.length : "-", label: "Crops" },
    { icon: Leaf, value: ready ? totalVarieties : "-", label: "Varieties" },
    { icon: Bug, value: ready ? totalDiseases : "-", label: "Diseases" },
    { icon: FlaskConical, value: 8, label: "Fertilizers" },
  ];

  return (
    <main>
      {/* ---------- Hero ---------- */}
      <section className="home-hero">
        <div className="home-hero-inner">
          <div className="home-hero-text">
            <span className="tag">Smart farming guide</span>
            <h1>
              Grow better crops with <span className="highlight">Agrisure</span>
            </h1>
            <p>
              Explore crops, soils, seasons and fertilizers in one simple place,
              and save your favourite crops to your own profile.
            </p>

            <div className="hero-buttons">
              <Link to="/crops" className="btn btn-green">
                Explore crops <ArrowRight size={16} />
              </Link>
              {user ? (
                <Link to="/profile" className="btn btn-light">
                  <Bookmark size={16} /> My bookmarks
                </Link>
              ) : (
                <Link to="/signup" className="btn btn-light">
                  Create account
                </Link>
              )}
            </div>
          </div>

          <div className="hero-collage">
            <img src={HERO_IMAGES.main} alt="Wheat field" className="collage-main" />
            <img src={HERO_IMAGES.top} alt="Tomato plants" className="collage-small collage-top" />
            <img src={HERO_IMAGES.bottom} alt="Cotton field" className="collage-small collage-bottom" />

            <div className="collage-badge">
              <Sprout size={20} />
              <div>
                <strong>{ready ? crops.length : "15"}+ crops</strong>
                <small>with full details</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- Stats ---------- */}
      <section className="stats-strip">
        {stats.map((item) => (
          <div className="stat-box" key={item.label}>
            <div className="stat-icon">
              <item.icon size={22} />
            </div>
            <div>
              <strong>{item.value}</strong>
              <span>{item.label}</span>
            </div>
          </div>
        ))}
      </section>

      {/* ---------- Features ---------- */}
      <section className="page home-section">
        <div className="page-header">
          <span className="tag">What you can do</span>
          <h2 className="big-title">Everything in one place</h2>
          <p>Pick a section to start learning.</p>
        </div>

        <div className="feature-grid">
          {features.map((item) => (
            <Link to={item.to} className="feature-card" key={item.title}>
              <div className="feature-icon">
                <item.icon size={24} />
              </div>
              <h3>{item.title}</h3>
              <p>{item.text}</p>
              <span className="card-link">
                Open <ArrowRight size={16} />
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* ---------- Featured crops ---------- */}
      {ready && crops.length > 0 && (
        <section className="page home-section">
          <div className="section-row">
            <div>
              <span className="tag">Featured</span>
              <h2 className="big-title">Popular crops</h2>
            </div>
            <Link to="/crops" className="card-link">
              View all crops <ArrowRight size={16} />
            </Link>
          </div>

          <div className="crop-grid">
            {crops.slice(0, 4).map((crop) => (
              <CropCard
                key={crop.id}
                id={crop.id}
                name={crop.name}
                description={crop.description}
                image={crop.image}
                varietyCount={crop.varieties.length}
                diseaseCount={crop.diseases.length}
              />
            ))}
          </div>
        </section>
      )}

      {/* ---------- Sow this month ---------- */}
      {ready && sowNow.length > 0 && (
        <section className="page home-section">
          <div className="sow-panel">
            <div className="sow-text">
              <span className="tag">This month</span>
              <h2>What to sow in {currentMonth}</h2>
              <p>
                These crops have varieties that can be sown right now. Open the
                calendar to check other months.
              </p>
              <Link to="/crop-calendar" className="btn btn-green">
                Open crop calendar <ArrowRight size={16} />
              </Link>
            </div>

            <div className="sow-list">
              {sowNow.map((crop) => (
                <Link to={`/crops/${crop.id}`} className="sow-item" key={crop.id}>
                  <img src={crop.image} alt={crop.name} />
                  <span>{crop.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* ---------- How it works ---------- */}
      <section className="page home-section">
        <div className="page-header">
          <span className="tag">How it works</span>
          <h2 className="big-title">Three simple steps</h2>
        </div>

        <div className="steps-grid">
          {steps.map((step, index) => (
            <div className="step-card" key={step.title}>
              <span className="step-number">{index + 1}</span>
              <div className="feature-icon">
                <step.icon size={24} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ---------- Banner ---------- */}
      <section className="page home-section">
        <div
          className="cta-banner"
          style={{ backgroundImage: `url(${HERO_IMAGES.banner})` }}
        >
          <div className="cta-overlay">
            <h2>Save the crops you care about</h2>
            <p>
              Create a free profile and bookmark crops. They will be here every
              time you log back in.
            </p>
            {user ? (
              <Link to="/profile" className="btn btn-light">
                Go to my profile <ArrowRight size={16} />
              </Link>
            ) : (
              <div className="hero-buttons center">
                <Link to="/signup" className="btn btn-green">Create account</Link>
                <Link to="/login" className="btn btn-light">Login</Link>
              </div>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;