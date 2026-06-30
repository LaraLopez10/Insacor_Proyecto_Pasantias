import type { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className = "" }: CardProps) {
  return (
    <section
      className={`rounded-2xl border border-[#D8D0C2] bg-white p-6 shadow-sm ${className}`}
    >
      {children}
    </section>
  );
}
