"use client";

import { useState } from "react";
import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";
import Button from "@/components/Button";

export default function FormsPage() {
  const [formData, setFormData] = useState({ name: "", email: "", agree: false });

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1
          className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          FORMS
        </h1>
        <p
          className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Input fields and checkboxes with bold borders. Built for clarity.
        </p>
      </div>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Input
        </h2>
        <div className="space-y-6 p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
          <Input
            label="Name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Input
            label="Email"
            type="email"
            placeholder="you@example.com"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          />
          <Input label="Error State" error="This field is required" />
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Checkbox
        </h2>
        <div className="space-y-4 p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
          <Checkbox
            label="I agree to the terms"
            checked={formData.agree}
            onChange={(e) => setFormData({ ...formData, agree: e.target.checked })}
          />
          <Checkbox label="Subscribe to updates" />
          <Checkbox label="Receive notifications" defaultChecked />
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Form Example
        </h2>
        <div className="p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white max-w-2xl">
          <form className="space-y-6">
            <Input label="Full Name" placeholder="John Doe" />
            <Input label="Email" type="email" placeholder="john@example.com" />
            <Checkbox label="Subscribe to newsletter" />
            <div className="flex gap-3 pt-4">
              <Button variant="primary" type="submit">
                Submit
              </Button>
              <Button variant="outline" type="reset">
                Clear
              </Button>
            </div>
          </form>
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
            <code>{`import Input from "@/components/Input";
import Checkbox from "@/components/Checkbox";

<Input
  label="Email"
  type="email"
  placeholder="you@example.com"
  error="Invalid email"
/>

<Checkbox label="I agree" />`}</code>
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
                  Component
                </th>
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
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1a1a1a]">
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  Input
                </td>
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  label
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  string
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  Input
                </td>
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  error
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  string
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  Checkbox
                </td>
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  label
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  string
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
