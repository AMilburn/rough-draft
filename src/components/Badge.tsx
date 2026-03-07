import { HTMLAttributes } from "react";

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
    const variants = {
        default:
            "bg-black text-white border-black dark:bg-white dark:text-black dark:border-white",
        success:
            "bg-white text-black border-black dark:bg-[#1a1a1a] dark:text-white dark:border-white [box-shadow:2px_2px_0px_0px_#22c55e] border-[#22c55e]",
        warning:
            "bg-white text-black border-black dark:bg-[#1a1a1a] dark:text-white dark:border-white [box-shadow:2px_2px_0px_0px_#f59e0b] border-[#f59e0b]",
        error:
            "bg-[#ff4444] text-white border-[#ff4444]",
        info:
            "bg-white text-black border-black dark:bg-[#1a1a1a] dark:text-white dark:border-white [box-shadow:2px_2px_0px_0px_#3b82f6] border-[#3b82f6]",
        outline:
            "bg-transparent text-black border-black dark:text-white dark:border-white",
    };

    const sizes = {
        sm: "px-2 py-0.5 text-[10px]",
        md: "px-3 py-1 text-xs",
    };

    return (
        <span
            className={`inline-flex items-center font-bold uppercase tracking-wider border-2 ${variants[variant]} ${sizes[size]} ${className}`}
            style={{ fontFamily: "var(--font-space-mono)" }}
            {...props}
        >
            {children}
        </span>
    );
}
