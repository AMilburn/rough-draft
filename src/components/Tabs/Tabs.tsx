"use client";

import { useState, ReactNode } from "react";
import styles from "./Tabs.module.css";

interface Tab {
    id: string;
    label: string;
    content: ReactNode;
    disabled?: boolean;
}

interface TabsProps {
    tabs: Tab[];
    defaultTab?: string;
    className?: string;
}

export default function Tabs({ tabs, defaultTab, className = "" }: TabsProps) {
    const [active, setActive] = useState<string>(defaultTab ?? tabs[0]?.id ?? "");
    const activeTab = tabs.find((t) => t.id === active);

    return (
        <div className={[styles.root, className].filter(Boolean).join(" ")}>
            <div className={styles.strip} role="tablist" aria-label="Tabs">
                {tabs.map((tab) => {
                    const isActive = tab.id === active;
                    return (
                        <button
                            key={tab.id}
                            id={`tab-${tab.id}`}
                            role="tab"
                            aria-selected={isActive}
                            aria-controls={`tabpanel-${tab.id}`}
                            disabled={tab.disabled}
                            onClick={() => !tab.disabled && setActive(tab.id)}
                            className={[styles.tab, isActive ? styles.active : ""].filter(Boolean).join(" ")}
                        >
                            <span className={isActive ? styles["label-active"] : ""}>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {activeTab && (
                <div
                    id={`tabpanel-${activeTab.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${activeTab.id}`}
                    className={styles.panel}
                >
                    {activeTab.content}
                </div>
            )}
        </div>
    );
}
