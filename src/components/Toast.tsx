"use client";

import {
    createContext,
    useContext,
    useState,
    useCallback,
    useEffect,
    ReactNode,
} from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

export type ToastVariant = "success" | "error" | "warning" | "info";

interface ToastItem {
    id: string;
    message: string;
    variant: ToastVariant;
    duration?: number; // ms, 0 = persistent
}

interface ToastContextValue {
    toast: (message: string, variant?: ToastVariant, duration?: number) => void;
}

// ─── Context ──────────────────────────────────────────────────────────────────

const ToastContext = createContext<ToastContextValue | null>(null);

export function useToast() {
    const ctx = useContext(ToastContext);
    if (!ctx) throw new Error("useToast must be used within a ToastProvider");
    return ctx;
}

// ─── Individual Toast ─────────────────────────────────────────────────────────

const variantStyles: Record<ToastVariant, string> = {
    success: "border-[#22c55e] shadow-[4px_4px_0px_0px_#22c55e]",
    error: "border-[#ff4444] shadow-[4px_4px_0px_0px_#ff4444]",
    warning: "border-[#f59e0b] shadow-[4px_4px_0px_0px_#f59e0b]",
    info: "border-[#3b82f6] shadow-[4px_4px_0px_0px_#3b82f6]",
};

const variantLabels: Record<ToastVariant, string> = {
    success: "✓",
    error: "✕",
    warning: "!",
    info: "i",
};

const variantIconColors: Record<ToastVariant, string> = {
    success: "text-[#22c55e]",
    error: "text-[#ff4444]",
    warning: "text-[#f59e0b]",
    info: "text-[#3b82f6]",
};

function ToastItem({
    item,
    onDismiss,
}: {
    item: ToastItem;
    onDismiss: (id: string) => void;
}) {
    const [visible, setVisible] = useState(false);

    // mount animation
    useEffect(() => {
        const t = setTimeout(() => setVisible(true), 10);
        return () => clearTimeout(t);
    }, []);

    // auto-dismiss
    useEffect(() => {
        if (!item.duration) return;
        const t = setTimeout(() => onDismiss(item.id), item.duration);
        return () => clearTimeout(t);
    }, [item.duration, item.id, onDismiss]);

    return (
        <div
            role="alert"
            aria-live="assertive"
            className={`
        flex items-start gap-3 px-5 py-4 min-w-[280px] max-w-sm
        bg-white dark:bg-[#1a1a1a] border-3
        ${variantStyles[item.variant]}
        transition-all duration-300
        ${visible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}
      `}
        >
            {/* Icon */}
            <span
                className={`text-base font-black shrink-0 ${variantIconColors[item.variant]}`}
                style={{ fontFamily: "var(--font-space-mono)" }}
                aria-hidden="true"
            >
                {variantLabels[item.variant]}
            </span>

            {/* Message */}
            <p
                className="text-sm text-black dark:text-white flex-1 font-bold"
                style={{ fontFamily: "var(--font-inter)" }}
            >
                {item.message}
            </p>

            {/* Dismiss */}
            <button
                onClick={() => onDismiss(item.id)}
                aria-label="Dismiss notification"
                className="text-[#6b6b6b] hover:text-black dark:hover:text-white transition-colors text-lg font-bold leading-none shrink-0 ml-1"
            >
                ×
            </button>
        </div>
    );
}

// ─── Container (render inside ToastProvider) ──────────────────────────────────

function ToastContainer({
    toasts,
    onDismiss,
}: {
    toasts: ToastItem[];
    onDismiss: (id: string) => void;
}) {
    return (
        <div
            aria-label="Notifications"
            className="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 items-end pointer-events-none"
        >
            {toasts.map((t) => (
                <div key={t.id} className="pointer-events-auto">
                    <ToastItem item={t} onDismiss={onDismiss} />
                </div>
            ))}
        </div>
    );
}

// ─── Provider ─────────────────────────────────────────────────────────────────

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
