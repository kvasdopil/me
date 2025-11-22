import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import InstabeeFleetDashboard from "./projects/InstabeeFleetDashboard.tsx";
import InstabeeGeospatialRanking from "./projects/InstabeeGeospatialRanking.tsx";
import RobotArm from "./projects/RobotArm.tsx";
import TgAgent from "./projects/TgAgent.tsx";
import UiGen from "./projects/UiGen.tsx";

// Handle GitHub Pages SPA redirect (sessionStorage variant)
const restorePathFromSessionStorage = () => {
  try {
    const stored = sessionStorage.getItem("ghp-spa-redirect");
    if (stored && typeof stored === "string") {
      sessionStorage.removeItem("ghp-spa-redirect");
      // Replace current URL with the originally requested path
      window.history.replaceState(null, "", stored);
    }
  } catch {
    // no-op if storage is unavailable
  }
};

restorePathFromSessionStorage();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/cv" element={<Navigate to="/cv-guskov-2025.pdf" replace />} />
        <Route path="/project/instabee-fleet-dashboard" element={<InstabeeFleetDashboard />} />
        <Route
          path="/project/instabee-geospatial-ranking"
          element={<InstabeeGeospatialRanking />}
        />
        <Route path="/project/robot-arm" element={<RobotArm />} />
        <Route path="/project/tg-agent" element={<TgAgent />} />
        <Route path="/project/ui-gen" element={<UiGen />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
