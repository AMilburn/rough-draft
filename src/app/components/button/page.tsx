"use client";

import Button from "@/components/Button";

export default function ButtonPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1
          className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          BUTTON
        </h1>
        <p
          className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Bold, square, handwritten. Buttons that look like they were stamped with intention.
        </p>
      </div>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Variants
        </h2>
        <div className="flex flex-wrap gap-4 p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
          <Button variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="outline">Outline</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Sizes
        </h2>
        <div className="flex flex-wrap items-center gap-4 p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Usage
        </h2>
        <div className="bg-black dark:bg-white p-6 border-3 border-black dark:border-white overflow-x-auto">
          <pre className="text-white dark:text-black text-sm" style={{ fontFamily: "var(--font-space-mono)" }}>
            <code>{`import Button from "@/components/Button";

<Button variant="primary" size="md">
  Click me
</Button>`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Props
        </h2>
        <div className="overflow-x-auto border-3 border-black dark:border-white">
          <table className="min-w-full">
            <thead className="bg-black dark:bg-white">
              <tr>
                <th
                  className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Prop
                </th>
                <th
                  className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Type
                </th>
                <th
                  className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Default
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1a1a1a]">
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  variant
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  &quot;primary&quot; | &quot;secondary&quot; | &quot;outline&quot;
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  &quot;primary&quot;
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  size
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  &quot;sm&quot; | &quot;md&quot; | &quot;lg&quot;
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  &quot;md&quot;
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
