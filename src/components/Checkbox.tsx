import { InputHTMLAttributes, useId } from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Checkbox({
  label,
  className = "",
  id,
  ...props
}: CheckboxProps) {
  const fallbackId = useId();
  const newId = id || fallbackId;

  return (
    <div className="flex items-center gap-3">
      <input
        id={newId}
        type="checkbox"
        className={`w-6 h-6 border-3 border-black dark:border-white bg-white dark:bg-[#1a1a1a] cursor-pointer appearance-none checked:bg-black dark:checked:bg-white checked:shadow-[0_0_0_3px_#f9f6f1] dark:checked:shadow-[0_0_0_3px_#0a0a0a] focus:outline-none focus:ring-2 focus:ring-[#ff4444] focus:ring-offset-2 focus:ring-offset-[#f9f6f1] dark:focus:ring-offset-[#0a0a0a] transition-all ${className}`}
        {...props}
      />
      {label && (
        <label
          htmlFor={newId}
          className="text-sm font-bold text-black dark:text-white cursor-pointer"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          {label}
        </label>
      )}
    </div>
  );
}
