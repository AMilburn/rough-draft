"use client";

import { useState, ReactNode } from "react";

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
        <div className={`w-full ${className}`}>
            {/* Tab strip — items-end so tabs anchor to the panel below */}
            <div
                className="flex items-end gap-1 overflow-x-auto"
                role="tablist"
                aria-label="Tabs"
            >
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
                            className={`
                 relative shrink-0 px-5 text-xs font-bold uppercase tracking-wider whitespace-nowrap
                border-3 border-b-0 border-black dark:border-white
                rounded-t-lg
                transition-colors duration-150
                focus:outline-none
                 ${isActive
                                    ? "py-3 bg-[#f5f3f0] text-black mb-[-3px] z-10"
                                    : tab.disabled
                                        ? "py-2 bg-[#f5f3f0] text-black/30 cursor-not-allowed"
                                        : "py-2 bg-[#f5f3f0] text-black hover:brightness-95"
                                }
              `}
                            style={{ fontFamily: "var(--font-space-mono)" }}
                        >
                            <span className={isActive ? 'hand-underline' : ''}>{tab.label}</span>
                        </button>
                    );
                })}
            </div>

            {/* Panel — full border; active tab's mb-[-3px] hides the overlap */}
            {activeTab && (
                <div
                    id={`tabpanel-${activeTab.id}`}
                    role="tabpanel"
                    aria-labelledby={`tab-${activeTab.id}`}
                    className="relative border-3 border-black dark:border-white bg-white dark:bg-[#1a1a1a] p-6 z-0"
                >
                    {activeTab.content}
                </div>
            )}
        </div>
    );
}
