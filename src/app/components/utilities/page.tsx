import Spinner from "@/components/Spinner";
import {
  IconCheck,
  IconX,
  IconArrowRight,
  IconSearch,
  IconTrash,
  IconEdit,
  IconPlus,
  IconMinus,
  IconAlertCircle,
  IconInfo,
} from "@/components/Icons";
import Container from "@/components/layouts/Container";
import TwoColumn from "@/components/layouts/TwoColumn";

export default function UtilitiesPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1
          className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          UTILITIES
        </h1>
        <p
          className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Spinners, icons, and layout helpers. Building blocks for interfaces.
        </p>
      </div>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Spinner
        </h2>
        <div className="space-y-8 p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
          <div className="flex justify-center">
            <Spinner size="sm" />
          </div>
          <div className="flex justify-center">
            <Spinner size="md" text="Loading" />
          </div>
          <div className="flex justify-center">
            <Spinner size="lg" text="Please wait..." />
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Icons
        </h2>
        <div className="p-8 bg-white dark:bg-[#1a1a1a] border-3 border-black dark:border-white">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="flex flex-col items-center gap-2">
              <IconCheck size={32} className="text-black dark:text-white" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Check
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconX size={32} className="text-black dark:text-white" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Close
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconArrowRight size={32} className="text-black dark:text-white" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Arrow
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconSearch size={32} className="text-black dark:text-white" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Search
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconTrash size={32} className="text-[#ff4444]" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Delete
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconEdit size={32} className="text-black dark:text-white" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Edit
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconPlus size={32} className="text-black dark:text-white" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Add
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconMinus size={32} className="text-black dark:text-white" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Remove
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconAlertCircle size={32} className="text-[#ff4444]" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Alert
              </p>
            </div>
            <div className="flex flex-col items-center gap-2">
              <IconInfo size={32} className="text-black dark:text-white" />
              <p className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                Info
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Layouts
        </h2>
        <p
          className="text-base text-[#6b6b6b] dark:text-[#a0a0a0] mb-6"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Container and Two Column layout helpers for organizing content.
        </p>
        <div className="space-y-6">
          <div className="border-3 border-black dark:border-white p-6 bg-white dark:bg-[#1a1a1a]">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4 uppercase" style={{ fontFamily: "var(--font-space-mono)" }}>
              Container
            </h3>
            <Container size="md" className="border-2 border-dashed border-[#6b6b6b] dark:border-[#a0a0a0] p-4">
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                Responsive container with max-width constraints
              </p>
            </Container>
          </div>

          <div className="border-3 border-black dark:border-white p-6 bg-white dark:bg-[#1a1a1a]">
            <h3 className="text-lg font-bold text-black dark:text-white mb-4 uppercase" style={{ fontFamily: "var(--font-space-mono)" }}>
              Two Column
            </h3>
            <TwoColumn
              asideWidth="md"
              aside={
                <div className="border-2 border-dashed border-[#6b6b6b] dark:border-[#a0a0a0] p-4">
                  <p className="text-[#6b6b6b] dark:text-[#a0a0a0] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                    Aside column
                  </p>
                </div>
              }
            >
              <div className="border-2 border-dashed border-[#6b6b6b] dark:border-[#a0a0a0] p-4">
                <p className="text-[#6b6b6b] dark:text-[#a0a0a0] text-sm" style={{ fontFamily: "var(--font-inter)" }}>
                  Main content area
                </p>
              </div>
            </TwoColumn>
          </div>
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
            <code>{`import Spinner from "@/components/Spinner";
import { IconTrash, IconPlus } from "@/components/Icons";
import Container from "@/components/layouts/Container";
import TwoColumn from "@/components/layouts/TwoColumn";

// Spinner
<Spinner size="md" text="Loading..." />

// Icons
<IconTrash size={24} className="text-[#ff4444]" />
<IconPlus size={24} />

// Container
<Container size="lg">
  Content here
</Container>

// TwoColumn
<TwoColumn aside={<nav>...</nav>}>
  <main>Content</main>
</TwoColumn>`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
