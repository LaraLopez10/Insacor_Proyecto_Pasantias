import type { ReactNode } from "react";
import Button from "../Button";

interface ModalProps {
  open: boolean;
  title: string;
  children: ReactNode;
  onClose: () => void;
}

export default function Modal({ open, title, children, onClose }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <section className="flex max-h-[90vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl">
        <header className="flex items-center justify-between border-b border-slate-200 bg-[#111844] px-6 py-4">
          <h2 className="text-xl font-bold text-white">{title}</h2>

          <Button variant="outline" onClick={onClose}>
            Cerrar
          </Button>
        </header>

        <div className="flex-1 overflow-y-auto p-6">{children}</div>
      </section>
    </div>
  );
}
