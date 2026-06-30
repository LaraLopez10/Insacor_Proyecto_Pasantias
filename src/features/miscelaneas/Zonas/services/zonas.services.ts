import type { Zona } from "../types/zonas.types";

let zonas: Zona[] = [
  {
    id: 1,
    descripcion: "SIERRAS CHICAS 2",
    geolatitud: -31.398012022884927,
    geolongitud: -64.31837900141004,
    estado: "ACTIVA",
    geometria: {
      tipo: "poligono",
      coordenadas: [
        [-31.29, -64.25],
        [-31.36, -64.16],
        [-31.46, -64.28],
        [-31.38, -64.42],
      ],
    },
  },
];

export const obtenerZonas = async (): Promise<Zona[]> => {
  return zonas;
};

export const crearZona = async (zona: Omit<Zona, "id">): Promise<Zona> => {
  const nuevaZona: Zona = {
    ...zona,
    id: Date.now(),
  };

  zonas = [...zonas, nuevaZona];

  return nuevaZona;
};
