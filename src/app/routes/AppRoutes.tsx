import { Route, Routes } from "react-router-dom";

import LoginPage from "../../features/auth/views/LoginPage";
import Dashboard from "../../features/dashboard/views/Dashboard";
import ZonasPage from "../../features/miscelaneas/views/zonas";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/miscelaneas/zonas" element={<ZonasPage />} />
    </Routes>
  );
}
