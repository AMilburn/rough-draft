import { HTMLAttributes } from "react";
import styles from "./Badge.module.css";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
    variant?: "default" | "success" | "warning" | "error" | "info" | "outline";
    size?: "sm" | "md";
}

export default function Badge({
    variant = "default",
    size = "md",
    className = "",
    children,
    ...props
}: BadgeProps) {
    return (
        <span
            className={[styles.badge, styles[variant], styles[size], className].filter(Boolean).join(" ")}
            {...props}
        >
            {children}
        </span>
    );
}
