"use client";

import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [isConfirmOpen, setIsConfirmOpen] = useState(false);

  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1
          className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          MODAL
        </h1>
        <p
          className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Dialogs with bold borders and red shadows. Built for focus.
        </p>
      </div>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Examples
        </h2>
        <div className="space-y-4 p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
          <Button onClick={() => setIsOpen(true)} variant="primary">
            Open Modal
          </Button>
          <Button onClick={() => setIsConfirmOpen(true)} variant="destructive">
            Confirm Action
          </Button>
        </div>
      </section>

      <Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Example Modal">
        <p
          className="text-[#6b6b6b] dark:text-[#a0a0a0] mb-4"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          This is a modal dialog with a title, content, and optional footer actions.
          Click the X button or backdrop to close.
        </p>
        <footer>
          <>
            <Button variant="outline" onClick={() => setIsOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={() => setIsOpen(false)}>
              Confirm
            </Button>
          </>
        </footer>
      </Modal>

      <Modal
        isOpen={isConfirmOpen}
        onClose={() => setIsConfirmOpen(false)}
        title="Confirm Delete?"
        footer={
          <>
            <Button variant="outline" onClick={() => setIsConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="destructive" onClick={() => setIsConfirmOpen(false)}>
              Delete
            </Button>
          </>
        }
      >
        <p
          className="text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          This action cannot be undone. Please confirm you want to proceed.
        </p>
      </Modal>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Usage
        </h2>
        <div className="bg-black dark:bg-white p-6 border-3 border-black dark:border-white overflow-x-auto">
          <pre className="text-white dark:text-black text-sm" style={{ fontFamily: "var(--font-space-mono)" }}>
            <code>{`import { useState } from "react";
import Modal from "@/components/Modal";
import Button from "@/components/Button";

export default function MyComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setIsOpen(true)}>
        Open
      </Button>
      <Modal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        title="My Modal"
        footer={
          <>
            <Button variant="outline">Cancel</Button>
            <Button variant="primary">Confirm</Button>
          </>
        }
      >
        <p>Modal content goes here</p>
      </Modal>
    </>
  );
}`}</code>
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
                  Required
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1a1a1a]">
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  isOpen
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  boolean
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">Yes</td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  onClose
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  () =&gt; void
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">Yes</td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  title
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  string
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">Yes</td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  children
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  ReactNode
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">Yes</td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  footer
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  ReactNode
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]">No</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
