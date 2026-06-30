import type { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  ...props
}: InputProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1 block text-sm font-semibold text-[#111844]">
          {label}
        </span>
      )}

      <input
        className={`w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#4B5694] focus:ring-2 focus:ring-[#7288AE]/30 ${className}`}
        {...props}
      />

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </label>
  );
}
