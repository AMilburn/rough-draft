import { ButtonHTMLAttributes } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "destructive";
  size?: "sm" | "md" | "lg";
}

export default function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const baseStyles = "font-bold transition-all focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-[#f9f6f1] dark:focus:ring-offset-[#0a0a0a] border-3 uppercase tracking-wide";

  const variants = {
    primary: "bg-black text-white border-black hover:bg-white hover:text-black hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_#ff4444] focus:ring-black dark:bg-white dark:text-black dark:border-white dark:hover:bg-black dark:hover:text-white",
    secondary: "bg-[#ff4444] text-white border-[#ff4444] hover:bg-white hover:text-[#ff4444] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_black] focus:ring-[#ff4444]",
    outline: "bg-transparent border-black text-black hover:bg-black hover:text-white hover:translate-x-0.5 hover:translate-y-0.5 focus:ring-black dark:border-white dark:text-white dark:hover:bg-white dark:hover:text-black",
    // destructive: "bg-[#ff4444] text-white border-black hover:bg-white hover:text-[#ff4444] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[6px_6px_0px_0px_black] focus:ring-[#ff4444] dark:border-white dark:hover:shadow-[6px_6px_0px_0px_white]",
    destructive: "bg-[#ff4444] text-white border-[#ff4444] hover:bg-white hover:text-[#ff4444] hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[4px_4px_0px_0px_[#ff4444]] focus:ring-[#ff4444] dark:bg-[#ff4444] dark:hover:bg-[#1a1a1a] dark:hover:text-[#ff4444]"
  };

  const sizes = {
    sm: "px-4 py-2 text-xs",
    md: "px-6 py-3 text-sm",
    lg: "px-8 py-4 text-base",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      style={{ fontFamily: "var(--font-marker)" }}
      {...props}
    >
      {children}
    </button>
  );
}
