import AppLayout from "../../../shared/layouts/AppLayout";

export default function DashboardPage() {
  return (
    <AppLayout>
      <h2 className="text-2xl font-bold text-slate-900">Dashboard</h2>
      <p className="mt-2 text-slate-600">
        Bienvenida al sistema de gestión de INSACOR.
      </p>
    </AppLayout>
  );
}
