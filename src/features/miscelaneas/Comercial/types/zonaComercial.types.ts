export type EstadoZonaComercial = "ACTIVA" | "INACTIVA";

export interface GeometriaZonaComercial {
  tipo: "marker";
  coordenadas: [number, number][];
}

export interface ZonaComercial {
  id: number;
  descripcion: string;
  geolatitud: number;
  geolongitud: number;
  estado: EstadoZonaComercial;
  geometria: GeometriaZonaComercial | null;
}
