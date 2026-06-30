import type { ReactNode } from "react";

interface PageHeaderProps {
  title: string;
  description?: string;
  actions?: ReactNode;
}

export default function PageHeader({
  title,
  description,
  actions,
}: PageHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between rounded-2xl bg-[#111844] px-6 py-5 shadow-md">
      <div>
        <h1 className="text-2xl font-bold text-white">{title}</h1>

        {description && (
          <p className="mt-1 text-sm text-[#EAE0CF]">{description}</p>
        )}
      </div>

      {actions && <div>{actions}</div>}
    </div>
  );
}
