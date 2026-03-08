"use client";

import { ReactNode } from "react";
import Button from "../Button/Button";
import styles from "./Modal.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({ isOpen, onClose, title, children, footer }: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      <div className={styles.backdrop} onClick={onClose} aria-label="Close modal" />
      <div className={styles.positioner}>
        <div className={styles.dialog} role="dialog" aria-modal="true" aria-labelledby="rd-modal-title">
          <div className={styles.header}>
            <h2 id="rd-modal-title" className={styles.title}>{title}</h2>
            <button onClick={onClose} className={styles.close} aria-label="Close modal">×</button>
          </div>
          <div className={styles.body}>{children}</div>
          {footer && <div className={styles.footer}>{footer}</div>}
        </div>
      </div>
    </>
  );
}
