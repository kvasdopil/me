import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import InstabeeFleetDashboard from "./projects/InstabeeFleetDashboard.tsx";
import InstabeeGeospatialRanking from "./projects/InstabeeGeospatialRanking.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/project/instabee-fleet-dashboard" element={<InstabeeFleetDashboard />} />
        <Route
          path="/project/instabee-geospatial-ranking"
          element={<InstabeeGeospatialRanking />}
        />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
