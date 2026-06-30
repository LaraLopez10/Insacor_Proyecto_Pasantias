import { useState } from "react";

import Button from "../../../../shared/components/ui/Button";
import Input from "../../../../shared/components/ui/Input";
import Select from "../../../../shared/components/ui/Select";

import ZonaMap from "./ZonaMap";

import type { EstadoZona, GeometriaZona, Zona } from "../types/zonas.types";

interface ZonaFormProps {
  onGuardar: (zona: Omit<Zona, "id">) => void;
  onCancelar: () => void;
}

export default function ZonaForm({ onGuardar, onCancelar }: ZonaFormProps) {
  const [descripcion, setDescripcion] = useState("");
  const [geolatitud, setGeolatitud] = useState("");
  const [geolongitud, setGeolongitud] = useState("");
  const [estado, setEstado] = useState<EstadoZona>("ACTIVA");
  const [geometria, setGeometria] = useState<GeometriaZona | null>(null);

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
          placeholder="Ej: Sierras Chicas"
          value={descripcion}
          onChange={(e) => setDescripcion(e.target.value)}
        />

        <Input label="Geolatitud" value={geolatitud} readOnly />

        <Input label="Geolongitud" value={geolongitud} readOnly />

        <Select
          label="Estado"
          value={estado}
          onChange={(e) => setEstado(e.target.value as EstadoZona)}
          options={[
            { label: "Activa", value: "ACTIVA" },
            { label: "Inactiva", value: "INACTIVA" },
          ]}
        />
      </div>

      <ZonaMap
        geometria={geometria}
        setGeometria={setGeometria}
        setUbicacion={setUbicacion}
      />

      <div className="flex justify-end gap-3">
        <Button variant="outline" onClick={onCancelar}>
          Cancelar
        </Button>

        <Button onClick={guardar}>Guardar zona</Button>
      </div>
    </div>
  );
}
