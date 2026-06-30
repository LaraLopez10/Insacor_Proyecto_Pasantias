import { useEffect, useState } from "react";

import AppLayout from "../../../../shared/layouts/AppLayout";
import PageHeader from "../../../../shared/components/ui/PageHeader";
import Card from "../../../../shared/components/ui/Card";
import Button from "../../../../shared/components/ui/Button";
import Modal from "../../../../shared/components/ui/Modal";

import ZonaComercialForm from "../components/ComercialForm";
import ZonaComercialTable from "../components/ComercialTable";

import {
  crearZonaComercial,
  obtenerZonasComerciales,
} from "../services/zonaComercialService";

import type { ZonaComercial } from "../types/zonaComercial.types";

export default function ZonaComercialPage() {
  const [zonas, setZonas] = useState<ZonaComercial[]>([]);
  const [modalAbierto, setModalAbierto] = useState(false);

  const cargarZonas = async () => {
    const data = await obtenerZonasComerciales();
    setZonas(data);
  };

  const guardarZona = async (zona: Omit<ZonaComercial, "id">) => {
    await crearZonaComercial(zona);
    await cargarZonas();
    setModalAbierto(false);
  };

  useEffect(() => {
    cargarZonas();
  }, []);

  return (
    <AppLayout>
      <PageHeader
        title="Zonas Comerciales"
        description="Administración de puntos comerciales por ubicación."
        actions={<Button onClick={() => setModalAbierto(true)}>Nuevo</Button>}
      />

      <Card>
        <div className="mb-4">
          <h2 className="text-lg font-bold text-[#111844]">
            Zonas comerciales cargadas
          </h2>
          <p className="text-sm text-slate-500">
            Listado de puntos comerciales registrados.
          </p>
        </div>

        <ZonaComercialTable zonas={zonas} />
      </Card>

      <Modal
        open={modalAbierto}
        title="Nueva zona comercial"
        onClose={() => setModalAbierto(false)}
      >
        <ZonaComercialForm
          onGuardar={guardarZona}
          onCancelar={() => setModalAbierto(false)}
        />
      </Modal>
    </AppLayout>
  );
}
