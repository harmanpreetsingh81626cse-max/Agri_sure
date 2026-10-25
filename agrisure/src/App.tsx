import { useCallback, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SplashScreen from "./components/SplashScreen";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Profile from "./pages/Profile";

import Crops from "./pages/Crops";
import CropDetails from "./pages/CropDetails";
import VarietyDetails from "./pages/VarietyDetails";

import SoilCrops from "./pages/SoilCrops";
import CropCalendar from "./pages/CropCalendar";

import Fertilizers from "./pages/Fertilizers";
import FertilizerDetails from "./pages/FertilizerDetails";

import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { AuthProvider } from "./contexts/AuthContext";

const SPLASH_KEY = "agrisure-splash-seen";

function App() {
  // show the splash only once per browser session
  const [showSplash, setShowSplash] = useState(() => {
    try {
      return sessionStorage.getItem(SPLASH_KEY) !== "yes";
    } catch {
      return true;
    }
  });

  const finishSplash = useCallback(() => {
    try {
      sessionStorage.setItem(SPLASH_KEY, "yes");
    } catch {
      // ignore if storage is blocked
    }
    setShowSplash(false);
  }, []);

  if (showSplash) {
    return <SplashScreen onDone={finishSplash} />;
  }

  return (
    <BrowserRouter>
      <AuthProvider>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />

          <Route path="/crops" element={<Crops />} />
          <Route path="/crops/:cropId" element={<CropDetails />} />
          <Route
            path="/crops/:cropId/:varietyId"
            element={<VarietyDetails />}
          />

          <Route path="/soil-crops" element={<SoilCrops />} />
          <Route path="/crop-calendar" element={<CropCalendar />} />

          <Route path="/fertilizers" element={<Fertilizers />} />
          <Route
            path="/fertilizers/:fertilizerId"
            element={<FertilizerDetails />}
          />

          <Route path="/about" element={<About />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Footer />
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;