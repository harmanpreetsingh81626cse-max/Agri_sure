import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

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

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        {/* Home */}
        <Route
          path="/"
          element={<Home />}
        />

        {/* Authentication */}
        <Route
          path="/login"
          element={<Login />}
        />

        <Route
          path="/signup"
          element={<Signup />}
        />

        <Route
          path="/profile"
          element={<Profile />}
        />

        {/* Crops */}
        <Route
          path="/crops"
          element={<Crops />}
        />

        <Route
          path="/crops/:cropId"
          element={<CropDetails />}
        />

        <Route
          path="/crops/:cropId/:varietyId"
          element={<VarietyDetails />}
        />

        {/* Soil */}
        <Route
          path="/soil-crops"
          element={<SoilCrops />}
        />

        {/* Calendar */}
        <Route
          path="/crop-calendar"
          element={<CropCalendar />}
        />

        {/* Fertilizers */}
        <Route
          path="/fertilizers"
          element={<Fertilizers />}
        />

        <Route
          path="/fertilizers/:fertilizerId"
          element={<FertilizerDetails />}
        />

        {/* About */}
        <Route
          path="/about"
          element={<About />}
        />

        {/* 404 */}
        <Route
          path="*"
          element={<NotFound />}
        />

      </Routes>

      <Footer />

    </BrowserRouter>
  );
}

export default App;