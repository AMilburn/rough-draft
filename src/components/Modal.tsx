"use client";

import { ReactNode } from "react";
import Button from "./Button";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: ReactNode;
  footer?: ReactNode;
}

export default function Modal({
  isOpen,
  onClose,
  title,
  children,
  footer,
}: ModalProps) {
  if (!isOpen) return null;

  return (
    <>
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/50 z-40"
        onClick={onClose}
        aria-label="Close modal"
      />

      {/* Modal */}
      <div className="fixed inset-0 flex items-center justify-center z-50 p-4">
        <div className="bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white max-w-2xl w-full shadow-[8px_8px_0px_0px_#ff4444]">
          {/* Header */}
          <div className="border-b-3 border-black dark:border-white p-6 flex items-center justify-between">
            <h2
              className="text-2xl font-bold text-black dark:text-white uppercase"
              style={{ fontFamily: "var(--font-marker)" }}
            >
              {title}
            </h2>
            <button
              onClick={onClose}
              className="text-black dark:text-white hover:text-[#ff4444] dark:hover:text-[#ff4444] text-2xl font-bold"
              aria-label="Close modal"
            >
              ×
            </button>
          </div>

          {/* Body */}
          <div className="p-6">{children}</div>

          {/* Footer */}
          {footer && (
            <div className="border-t-3 border-black dark:border-white p-6 flex gap-3 justify-end">
              {footer}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
