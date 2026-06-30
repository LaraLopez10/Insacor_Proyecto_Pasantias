export type EstadoZona = "ACTIVA" | "INACTIVA";

export type TipoGeometriaZona = "marker" | "poligono";

export interface GeometriaZona {
  tipo: TipoGeometriaZona;
  coordenadas: [number, number][];
}

export interface Zona {
  id: number;
  descripcion: string;
  geolatitud: number;
  geolongitud: number;
  estado: EstadoZona;
  geometria: GeometriaZona | null;
}
