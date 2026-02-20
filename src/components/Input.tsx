import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export default function Input({
  label,
  error,
  className = "",
  id,
  ...props
}: InputProps) {

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-bold text-black dark:text-white mb-2 uppercase tracking-wide"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          {label}
        </label>
      )}
      <input
        id={id}
        className={`w-full px-4 py-3 border-3 border-black dark:border-white bg-white dark:bg-[#1a1a1a] text-black dark:text-white placeholder-[#6b6b6b] dark:placeholder-[#a0a0a0] focus:outline-none focus:ring-2 focus:ring-[#ff4444] focus:ring-offset-2 focus:ring-offset-[#f9f6f1] dark:focus:ring-offset-[#0a0a0a] transition-all ${className}`}
        style={{ fontFamily: "var(--font-inter)" }}
        {...props}
      />
      {error && (
        <p
          className="text-sm text-[#ff4444] mt-2 font-bold"
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          {error}
        </p>
      )}
    </div>
  );
}
