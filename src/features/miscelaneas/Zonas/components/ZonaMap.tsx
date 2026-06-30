import {
  MapContainer,
  TileLayer,
  FeatureGroup,
  Polygon,
  Marker,
} from "react-leaflet";

import { EditControl } from "react-leaflet-draw";

import "leaflet-draw/dist/leaflet.draw.css";

import type { LeafletEvent } from "leaflet";
import type { GeometriaZona } from "../types/zonas.types";

interface Props {
  geometria: GeometriaZona | null;
  setGeometria: (geometria: GeometriaZona) => void;
  setUbicacion: (lat: number, lng: number) => void;
}

export default function ZonaMap({
  geometria,
  setGeometria,
  setUbicacion,
}: Props) {
  const obtenerCoordenadas = (layer: any): [number, number][] => {
    const puntos = layer.getLatLngs()[0];

    return puntos.map((p: any) => [p.lat, p.lng]);
  };

  const calcularCentro = (coordenadas: [number, number][]) => {
    const lat =
      coordenadas.reduce((acc, punto) => acc + punto[0], 0) /
      coordenadas.length;

    const lng =
      coordenadas.reduce((acc, punto) => acc + punto[1], 0) /
      coordenadas.length;

    return { lat, lng };
  };

  const manejarCreacion = (e: LeafletEvent) => {
    const layer: any = (e as any).layer;

    if (layer.getLatLng && !layer.getLatLngs) {
      const lat = layer.getLatLng().lat;
      const lng = layer.getLatLng().lng;

      setUbicacion(lat, lng);

      setGeometria({
        tipo: "marker",
        coordenadas: [[lat, lng]],
      });

      return;
    }

    const coordenadas = obtenerCoordenadas(layer);
    const centro = calcularCentro(coordenadas);

    setUbicacion(centro.lat, centro.lng);

    setGeometria({
      tipo: "poligono",
      coordenadas,
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
              marker: false,
              polygon: true,
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

        {geometria?.tipo === "poligono" && (
          <Polygon positions={geometria.coordenadas} />
        )}

        {geometria?.tipo === "marker" && (
          <Marker position={geometria.coordenadas[0]} />
        )}
      </MapContainer>
    </div>
  );
}
