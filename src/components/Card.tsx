import { HTMLAttributes, ReactNode } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}

interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardContentProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export default function Card({
  variant = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  const variants = {
    default: "bg-white dark:bg-[#1a1a1a] border-2 border-[#d4d4d4] dark:border-[#3a3a3a]",
    bordered: "bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white",
    elevated: "bg-white dark:bg-[#1a1a1a] border-2 border-black dark:border-white shadow-[6px_6px_0px_0px_#ff4444]",
  };

  return (
    <div
      className={`p-6 ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }: CardHeaderProps) {
  return (
    <div className={`mb-4 pb-4 border-b-2 border-black/10 dark:border-white/10 ${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardContent({ className = "", children, ...props }: CardContentProps) {
  return (
    <div className={`${className}`} {...props}>
      {children}
    </div>
  );
}

export function CardFooter({ className = "", children, ...props }: CardFooterProps) {
  return (
    <div className={`mt-4 pt-4 border-t-2 border-black/10 dark:border-white/10 ${className}`} {...props}>
      {children}
    </div>
  );
}
