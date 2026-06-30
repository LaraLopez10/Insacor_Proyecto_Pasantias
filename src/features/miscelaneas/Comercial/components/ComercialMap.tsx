import { MapContainer, TileLayer, FeatureGroup, Marker } from "react-leaflet";
import { EditControl } from "react-leaflet-draw";

import type { LeafletEvent } from "leaflet";
import type { GeometriaZonaComercial } from "../types/zonaComercial.types";

interface Props {
  geometria: GeometriaZonaComercial | null;
  setGeometria: (geometria: GeometriaZonaComercial) => void;
  setUbicacion: (lat: number, lng: number) => void;
}

export default function ZonaComercialMap({
  geometria,
  setGeometria,
  setUbicacion,
}: Props) {
  const manejarCreacion = (e: LeafletEvent) => {
    const layer: any = (e as any).layer;

    const lat = layer.getLatLng().lat;
    const lng = layer.getLatLng().lng;

    setUbicacion(lat, lng);

    setGeometria({
      tipo: "marker",
      coordenadas: [[lat, lng]],
    });
  };

  return (
    <div className="overflow-hidden rounded-2xl border border-[#7288AE]">
      <MapContainer
        center={[-31.4201, -64.1888]}
        zoom={12}
        style={{ height: "420px", width: "100%" }}
      >
        <TileLayer url="https://tile.openstreetmap.org/{z}/{x}/{y}.png" />

        <FeatureGroup>
          <EditControl
            position="topleft"
            onCreated={manejarCreacion}
            draw={{
              marker: true,
              polygon: false,
              rectangle: false,
              circle: false,
              polyline: false,
              circlemarker: false,
            }}
            edit={{
              remove: true,
            }}
          />
        </FeatureGroup>

        {geometria?.tipo === "marker" && (
          <Marker position={geometria.coordenadas[0]} />
        )}
      </MapContainer>
    </div>
  );
}
