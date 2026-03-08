import { InputHTMLAttributes, useId } from "react";
import styles from "./Checkbox.module.css";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Checkbox({ label, className = "", id, ...props }: CheckboxProps) {
  const fallbackId = useId();
  const newId = id || fallbackId;

  return (
    <div className={styles.wrapper}>
      <input
        id={newId}
        type="checkbox"
        className={[styles.input, className].filter(Boolean).join(" ")}
        {...props}
      />
      {label && (
        <label htmlFor={newId} className={styles.label}>
          {label}
        </label>
      )}
    </div>
  );
}
