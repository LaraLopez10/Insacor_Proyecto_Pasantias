import { useState } from "react";

import Button from "../../../../shared/components/ui/Button";
import Input from "../../../../shared/components/ui/Input";
import Select from "../../../../shared/components/ui/Select";

import ZonaComercialMap from "./ComercialMap";

import type {
  EstadoZonaComercial,
  GeometriaZonaComercial,
  ZonaComercial,
} from "../types/zonaComercial.types";

interface Props {
  onGuardar: (zona: Omit<ZonaComercial, "id">) => void;
  onCancelar: () => void;
}

export default function ZonaComercialForm({ onGuardar, onCancelar }: Props) {
  const [descripcion, setDescripcion] = useState("");
  const [geolatitud, setGeolatitud] = useState("");
  const [geolongitud, setGeolongitud] = useState("");
  const [estado, setEstado] = useState<EstadoZonaComercial>("ACTIVA");
  const [geometria, setGeometria] = useState<GeometriaZonaComercial | null>(
    null,
  );

  const setUbicacion = (lat: number, lng: number) => {
    setGeolatitud(String(lat));
    setGeolongitud(String(lng));
  };

  const guardar = () => {
    if (!descripcion || !geolatitud || !geolongitud || !geometria) return;

    onGuardar({
      descripcion,
      geolatitud: Number(geolatitud),
      geolongitud: Number(geolongitud),
      estado,
      geometria,
    });
  };

  return (
    <div className="space-y-5">
      <div className="grid gap-4 md:grid-cols-4">
        <Input
          label="Descripción"
          placeholder="Ej: Centro comercial"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <Input label="Geolatitud" value={geolatitud} readOnly />

        <Input label="Geolongitud" value={geolongitud} readOnly />

        <Select
          label="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value as EstadoZonaComercial)}
          options={[
            { label: "Activa", value: "ACTIVA" },
            { label: "Inactiva", value: "INACTIVA" },
          ]}
        />
      </div>

      <ZonaComercialMap
        geometria={geometria}
        setGeometria={setGeometria}
        setUbicacion={setUbicacion}
      />

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancelar}>
          Cancelar
        </Button>

        <Button onClick={guardar}>Guardar zona comercial</Button>
      </div>
    </div>
  );
}
