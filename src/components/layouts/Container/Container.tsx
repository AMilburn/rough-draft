import { HTMLAttributes, ReactNode } from "react";
import styles from "./Container.module.css";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
  size?: "sm" | "md" | "lg";
}

export default function Container({ children, size = "lg", className = "", ...props }: ContainerProps) {
  return (
    <div className={[styles.container, styles[size], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  );
}
