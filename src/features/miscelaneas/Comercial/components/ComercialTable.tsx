import Badge from "../../../../shared/components/ui/Badge/badge";
import DataTable, {
  type DataTableColumn,
} from "../../../../shared/components/ui/DataTable";

import type { ZonaComercial } from "../types/zonaComercial.types";

interface Props {
  zonas: ZonaComercial[];
}

export default function ZonaComercialTable({ zonas }: Props) {
  const columns: DataTableColumn<ZonaComercial>[] = [
    { header: "ID", accessor: "id" },
    { header: "Descripción", accessor: "descripcion" },
    { header: "Geolatitud", accessor: "geolatitud" },
    { header: "Geolongitud", accessor: "geolongitud" },
    {
      header: "Estado",
      render: (zona) => (
        <Badge variant={zona.estado === "ACTIVA" ? "success" : "danger"}>
          {zona.estado === "ACTIVA" ? "ACTIVA" : "INACTIVA"}
        </Badge>
      ),
    },
  ];

  return (
    <DataTable
      data={zonas}
      columns={columns}
      emptyTitle="No hay zonas comerciales"
      emptyDescription="Cuando agregues una zona comercial, aparecerá en esta tabla."
    />
  );
}
