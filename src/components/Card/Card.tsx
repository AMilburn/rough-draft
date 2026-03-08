import { HTMLAttributes, ReactNode } from "react";
import styles from "./Card.module.css";

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "bordered" | "elevated";
}
interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode; }
interface CardContentProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode; }
interface CardFooterProps extends HTMLAttributes<HTMLDivElement> { children: ReactNode; }

export default function Card({ variant = "default", className = "", children, ...props }: CardProps) {
  return (
    <div className={[styles.card, styles[variant], className].filter(Boolean).join(" ")} {...props}>
      {children}
    </div>
  );
}

export function CardHeader({ className = "", children, ...props }: CardHeaderProps) {
  return <div className={[styles.header, className].filter(Boolean).join(" ")} {...props}>{children}</div>;
}

export function CardContent({ className = "", children, ...props }: CardContentProps) {
  return <div className={className} {...props}>{children}</div>;
}

export function CardFooter({ className = "", children, ...props }: CardFooterProps) {
  return <div className={[styles.footer, className].filter(Boolean).join(" ")} {...props}>{children}</div>;
}
