import { useEffect, useState } from "react";

import AppLayout from "../../../../shared/layouts/AppLayout";
import PageHeader from "../../../../shared/components/ui/PageHeader/PageHeader";
import Card from "../../../../shared/components/ui/Card/card";
import Button from "../../../../shared/components/ui/Button";
import Modal from "../../../../shared/components/ui/Modal";

import ZonaForm from "../components/ZonaForm";
import ZonaTable from "../components/ZonaTable";

import { crearZona, obtenerZonas } from "../services/zonas.services";
import type { Zona } from "../types/zonas.types";

export default function ZonasPage() {
  const [zonas, setZonas] = useState<Zona[]>([]);
  const [modalAbierto, setModalAbierto] = useState(false);

  const cargarZonas = async () => {
    const data = await obtenerZonas();
    setZonas(data);
  };

  const guardarZona = async (zona: Omit<Zona, "id">) => {
    await crearZona(zona);
    await cargarZonas();
    setModalAbierto(false);
  };

  useEffect(() => {
    cargarZonas();
  }, []);

  return (
    <AppLayout>
      <PageHeader
        title="Gestión de Zonas"
        description="Administrá las zonas geográficas del sistema."
        actions={<Button onClick={() => setModalAbierto(true)}>Nuevo</Button>}
      />

      <Card>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-[#111844]">Zonas cargadas</h2>
          <p className="text-sm text-slate-500">
            Listado de zonas registradas.
          </p>
        </div>

        <ZonaTable zonas={zonas} />
      </Card>

      <Modal
        open={modalAbierto}
        title="Nueva zona"
        onClose={() => setModalAbierto(false)}
      >
        <ZonaForm
          onGuardar={guardarZona}
          onCancelar={() => setModalAbierto(false)}
        />
      </Modal>
    </AppLayout>
  );
}
