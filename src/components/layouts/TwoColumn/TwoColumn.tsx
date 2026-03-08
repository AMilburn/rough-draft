import { HTMLAttributes, ReactNode } from "react";
import styles from "./TwoColumn.module.css";

interface TwoColumnProps extends HTMLAttributes<HTMLDivElement> {
  aside: ReactNode;
  children: ReactNode;
  asideWidth?: "sm" | "md" | "lg";
}

export default function TwoColumn({ aside, children, asideWidth = "md", className = "", ...props }: TwoColumnProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")} {...props}>
      <aside className={[styles.aside, styles[`aside-${asideWidth}`]].join(" ")}>{aside}</aside>
      <main className={styles.main}>{children}</main>
    </div>
  );
}
