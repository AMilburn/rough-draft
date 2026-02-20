import { HTMLAttributes, ReactNode } from "react";

interface TwoColumnProps extends HTMLAttributes<HTMLDivElement> {
  aside: ReactNode;
  children: ReactNode;
  asideWidth?: "sm" | "md" | "lg";
}

export default function TwoColumn({
  aside,
  children,
  asideWidth = "md",
  className = "",
  ...props
}: TwoColumnProps) {
  const widths = {
    sm: "w-60",
    md: "w-72",
    lg: "w-96",
  };

  return (
    <div className={`flex gap-6 ${className}`} {...props}>
      {/* Aside */}
      <aside
        className={`${widths[asideWidth]} flex-shrink-0 border-r-3 border-black dark:border-white pr-6`}
      >
        {aside}
      </aside>

      {/* Main */}
      <main className="flex-1 min-w-0">{children}</main>
    </div>
  );
}
