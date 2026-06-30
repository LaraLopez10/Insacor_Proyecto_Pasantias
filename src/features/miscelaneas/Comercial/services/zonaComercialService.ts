import type { ZonaComercial } from "../types/zonaComercial.types";

let zonasComerciales: ZonaComercial[] = [
  {
    id: 1,
    descripcion: "ZONA COMERCIAL CENTRO",
    geolatitud: -31.4201,
    geolongitud: -64.1888,
    estado: "ACTIVA",
    geometria: {
      tipo: "marker",
      coordenadas: [[-31.4201, -64.1888]],
    },
  },
];

export const obtenerZonasComerciales = async (): Promise<ZonaComercial[]> => {
  return zonasComerciales;
};

export const crearZonaComercial = async (
  zona: Omit<ZonaComercial, "id">,
): Promise<ZonaComercial> => {
  const nuevaZona: ZonaComercial = {
    ...zona,
    id: Date.now(),
  };

  zonasComerciales = [...zonasComerciales, nuevaZona];

  return nuevaZona;
};
