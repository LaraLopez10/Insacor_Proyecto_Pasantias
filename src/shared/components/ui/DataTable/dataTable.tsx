import type { ReactNode } from "react";

export interface DataTableColumn<T> {
  header: string;
  accessor?: keyof T;
  render?: (item: T) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  emptyTitle?: string;
  emptyDescription?: string;
}

export default function DataTable<T>({
  data,
  columns,
  emptyTitle = "No hay registros",
  emptyDescription = "Todavía no se cargaron datos.",
}: DataTableProps<T>) {
  if (data.length === 0) {
    return (
      <div className="rounded-2xl border border-dashed border-[#7288AE] bg-[#F8F5EF] p-10 text-center">
        <h3 className="text-base font-bold text-[#111844]">{emptyTitle}</h3>
        <p className="mt-1 text-sm text-slate-500">{emptyDescription}</p>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-[#D8D0C2] bg-white">
      <table className="w-full border-collapse text-sm">
        <thead className="bg-[#111844] text-white">
          <tr>
            {columns.map((column) => (
              <th
                key={column.header}
                className="px-5 py-4 text-left text-xs font-bold uppercase tracking-wide"
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((item, rowIndex) => (
            <tr
              key={rowIndex}
              className="border-t border-[#EAE0CF] hover:bg-[#F8F5EF]"
            >
              {columns.map((column) => (
                <td
                  key={column.header}
                  className="px-5 py-4 font-medium text-slate-700"
                >
                  {column.render
                    ? column.render(item)
                    : String(item[column.accessor!] ?? "")}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
