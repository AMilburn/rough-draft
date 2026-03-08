import { HTMLAttributes } from "react";
import styles from "./Spinner.module.css";

interface SpinnerProps extends HTMLAttributes<HTMLDivElement> {
  size?: "sm" | "md" | "lg";
  text?: string;
}

export default function Spinner({ size = "md", text, className = "", ...props }: SpinnerProps) {
  return (
    <div className={[styles.wrapper, className].filter(Boolean).join(" ")} {...props}>
      <div className={[styles.ring, styles[size]].join(" ")} />
      {text && <p className={[styles.text, styles[`text-${size}`]].join(" ")}>{text}</p>}
    </div>
  );
}
