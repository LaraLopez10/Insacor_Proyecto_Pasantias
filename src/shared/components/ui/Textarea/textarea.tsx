import type { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
}

export default function Textarea({
  label,
  error,
  className = "",
  ...props
}: TextareaProps) {
  return (
    <label className="block">
      {label && (
        <span className="mb-1 block text-sm font-semibold text-[#111844]">
          {label}
        </span>
      )}

      <textarea
        className={`min-h-24 w-full rounded-lg border border-slate-300 bg-white px-3 py-2 text-sm text-slate-800 outline-none focus:border-[#4B5694] focus:ring-2 focus:ring-[#7288AE]/30 ${className}`}
        {...props}
      />

      {error && <p className="mt-1 text-xs text-red-600">{error}</p>}
    </label>
  );
}
