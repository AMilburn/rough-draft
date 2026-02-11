import { HTMLAttributes } from "react";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export default function Spinner({
  size = "md",
  text,
  className = "",
  ...props
}: SpinnerProps) {
  const sizes = {
    sm: "w-6 h-6",
    md: "w-10 h-10",
    lg: "w-16 h-16",
  };

  const textSizes = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  return (
    <div className={`flex flex-col items-center gap-4 ${className}`} {...props}>
      <div
        className={`${sizes[size]} border-3 border-black dark:border-white border-b-[#ff4444] dark:border-b-[#ff4444] rounded-full animate-spin`}
      />
      {text && (
        <p
          className={`font-bold text-black dark:text-white uppercase ${textSizes[size]}`}
          style={{ fontFamily: "var(--font-space-mono)" }}
        >
          {text}
        </p>
      )}
    </div>
  );
}
