import Badge from "../../../shared/components/ui/Badge/badge";
import DataTable, {
  type DataTableColumn,
} from "../../../shared/components/ui/DataTable/dataTable";

import type { Zona } from "../types/zonas.types";

interface ZonaTableProps {
  zonas: Zona[];
}

export default function ZonaTable({ zonas }: ZonaTableProps) {
  const columns: DataTableColumn<Zona>[] = [
    { header: "ID", accessor: "id" },
    { header: "Descripción", accessor: "descripcion" },
    { header: "Geolatitud", accessor: "geolatitud" },
    { header: "Geolongitud", accessor: "geolongitud" },
    {
      header: "Estado",
      render: (zona) => (
        <Badge variant={zona.estado === "ACTIVA" ? "success" : "danger"}>
          {zona.estado === "ACTIVA" ? "ZONAS ACTIVAS" : "ZONAS INACTIVAS"}
        </Badge>
      ),
    },
  ];

  return (
    <DataTable
      data={zonas}
      columns={columns}
      emptyTitle="No hay zonas cargadas"
      emptyDescription="Cuando agregues una zona, aparecerá en esta tabla."
    />
  );
}
