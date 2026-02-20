"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Button", href: "/components/button" },
  { name: "Card", href: "/components/card" },
];

export default function SideNav() {
  const pathname = usePathname();

  return (
    <nav className="w-72 border-r-3 border-black dark:border-white min-h-screen p-8 bg-white dark:bg-[#1a1a1a]">
      <Link href="/" className="block mb-12">
        <h2 className="text-3xl font-bold text-black dark:text-white mb-1" style={{ fontFamily: "var(--font-marker)" }}>
          ROUGH DRAFT
        </h2>
        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] uppercase tracking-wider" style={{ fontFamily: "var(--font-space-mono)" }}>
          organized chaos
        </p>
      </Link>

      <div className="space-y-2">
        {navigation.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`block px-3 py-2 text-sm font-bold uppercase tracking-wide transition-all border-l-4 ${
                isActive
                  ? "border-[#ff4444] bg-black/5 dark:bg-white/10 text-black dark:text-white translate-x-1"
                  : "border-transparent text-[#6b6b6b] dark:text-[#a0a0a0] hover:border-black/20 dark:hover:border-white/20 hover:translate-x-1 hover:text-black dark:hover:text-white"
              }`}
              style={{ fontFamily: "var(--font-space-mono)" }}
            >
              {item.name}
            </Link>
          );
        })}
      </div>

      <div className="mt-12 pt-12 border-t-2 border-black/10 dark:border-white/10">
        <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0] leading-relaxed" style={{ fontFamily: "var(--font-inter)" }}>
          A design system inspired by record stores, zines, and people who have the right idea but rough edges.
        </p>
      </div>
    </nav>
  );
}
