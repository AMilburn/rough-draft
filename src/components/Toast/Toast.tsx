"use client";

import {
    createContext, useContext, useState, useCallback, useEffect, ReactNode,
} from "react";
import styles from "./Toast.module.css";

export type ToastVariant = "success" | "error" | "warning" | "info";

interface ToastItem {
    id: string;
    message: string;
    variant: ToastVariant;
    duration?: number;
}

interface ToastContextValue {
    toast: (message: string, variant?: ToastVariant, duration?: number) => void;
}

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToast must be used within a ToastProvider");
    return ctx;
}

const variantLabels: Record<ToastVariant, string> = {
    success: "✓", error: "✕", warning: "!", info: "i",
};

function ToastItemComponent({ item, onDismiss }: { item: ToastItem; onDismiss: (id: string) => void }) {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(t);
    }, []);

    useEffect(() => {
        if (!item.duration) return;
        const t = setTimeout(() => onDismiss(item.id), item.duration);
        return () => clearTimeout(t);
    }, [item.duration, item.id, onDismiss]);

    return (
        <div
            role="alert"
            aria-live="assertive"
            className={[styles.item, styles[item.variant], visible ? styles.visible : styles.hidden].join(" ")}
        >
            <span className={[styles.icon, styles[`icon-${item.variant}`]].join(" ")} aria-hidden="true">
                {variantLabels[item.variant]}
            </span>
            <p className={styles.message}>{item.message}</p>
            <button onClick={() => onDismiss(item.id)} aria-label="Dismiss notification" className={styles.dismiss}>
                ×
            </button>
        </div>
    );
}

function ToastContainer({ toasts, onDismiss }: { toasts: ToastItem[]; onDismiss: (id: string) => void }) {
    return (
        <div aria-label="Notifications" className={styles.container}>
            {toasts.map((t) => (
                <ToastItemComponent key={t.id} item={t} onDismiss={onDismiss} />
            ))}
        </div>
    );
}

export function ToastProvider({ children }: { children: ReactNode }) {
    const [toasts, setToasts] = useState<ToastItem[]>([]);

    const dismiss = useCallback((id: string) => {
        setToasts((prev) => prev.filter((t) => t.id !== id));
    }, []);

    const toast = useCallback(
        (message: string, variant: ToastVariant = "info", duration = 4000) => {
            const id = `toast-${Date.now()}-${Math.random()}`;
            setToasts((prev) => [...prev, { id, message, variant, duration }]);
        },
        []
    );

    return (
        <ToastContext.Provider value={{ toast }}>
            {children}
            <ToastContainer toasts={toasts} onDismiss={dismiss} />
        </ToastContext.Provider>
    );
}
