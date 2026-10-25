import { useEffect, useState } from "react";
import { Sprout } from "lucide-react";

interface SplashScreenProps {
  onDone: () => void;
}

const messages = [
  "Planting the seeds...",
  "Watering the crops...",
  "Ready to grow!",
];

function SplashScreen({ onDone }: SplashScreenProps) {
  const [step, setStep] = useState(0);
  const [leaving, setLeaving] = useState(false);

  useEffect(() => {
    const timers = [
      setTimeout(() => setStep(1), 800),
      setTimeout(() => setStep(2), 1600),
      setTimeout(() => setLeaving(true), 2400),
      setTimeout(onDone, 3000),
    ];

    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <div className={leaving ? "splash splash-leave" : "splash"}>
      <div className="splash-content">
        <div className="splash-ring">
          <div className="splash-icon">
            <Sprout size={54} />
          </div>
        </div>

        <h1 className="splash-title">Agrisure</h1>
        <p className="splash-tagline">Smart farming guide</p>

        <div className="splash-bar">
          <div className="splash-bar-fill" />
        </div>

        <p className="splash-message" key={step}>
          {messages[step]}
        </p>
      </div>

      <button type="button" className="splash-skip" onClick={onDone}>
        Skip
      </button>
    </div>
  );
}

export default SplashScreen;