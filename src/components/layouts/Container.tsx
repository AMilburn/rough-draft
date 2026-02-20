import { HTMLAttributes, ReactNode } from "react";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function Container({
  children,
  size = "lg",
  className = "",
  ...props
}: ContainerProps) {
  const sizes = {
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
  };

  return (
    <div className={`w-full mx-auto px-6 ${sizes[size]} ${className}`} {...props}>
      {children}
    </div>
  );
}
