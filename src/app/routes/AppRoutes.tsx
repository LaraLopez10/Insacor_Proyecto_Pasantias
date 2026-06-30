import { Route, Routes } from "react-router-dom";

import LoginPage from "../../features/auth/views/LoginPage";
import Dashboard from "../../features/dashboard/views/Dashboard";
import ZonasPage from "../../features/miscelaneas/Zonas/views/zonas";
import ZonaComercialPage from "../../features/miscelaneas/Comercial/views/zonaComercial";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/miscelaneas/zonas" element={<ZonasPage />} />
      <Route
        path="/miscelaneas/zonacomercial"
        element={<ZonaComercialPage />}
      />
    </Routes>
  );
}
