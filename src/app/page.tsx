export default function Home() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1
          className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          ROUGH DRAFT
        </h1>
        <p
          className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0] max-w-2xl"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          For projects that value <span className="hand-underline font-bold text-black dark:text-white">character over perfection</span>.
          Organized chaos. Intentionally imperfect. Still human.
        </p>
      </div>

      <div className="prose dark:prose-invert max-w-none">
        <section className="mb-12 p-6 border-3 border-black dark:border-white bg-white dark:bg-[#1a1a1a]">
          <h2
            className="text-2xl font-bold text-black dark:text-white mb-4 uppercase"
            style={{ fontFamily: "var(--font-marker)" }}
          >
            What is this?
          </h2>
          <p
            className="text-black dark:text-white leading-relaxed text-base mb-4"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            A design system inspired by record stores, independent zines,
            and the DIY aesthetic. Black and white base. Warm backgrounds. Handwritten accents.
            Square buttons. Bold borders. Pop of red when it matters.
          </p>
          <p
            className="text-[#6b6b6b] dark:text-[#a0a0a0] leading-relaxed text-base"
            style={{ fontFamily: "var(--font-inter)" }}
          >
            Built for interfaces that don&apos;t apologize for having rough edges—because the rough
            edges are the point.
          </p>
        </section>

        <section className="mb-12">
          <h2
            className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
            style={{ fontFamily: "var(--font-marker)" }}
          >
            Design Principles
          </h2>
          <div className="space-y-6">
            <div className="border-l-4 border-[#ff4444] pl-6">
              <h3
                className="text-lg font-bold text-black dark:text-white mb-2 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                HIGH CONTRAST
              </h3>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                Black and white. No gray area. Decisions are clear. Structure is intentional.
              </p>
            </div>
            <div className="border-l-4 border-black dark:border-white pl-6">
              <h3
                className="text-lg font-bold text-black dark:text-white mb-2 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                HANDMADE TOUCHES
              </h3>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                Scribbled underlines. Handwritten buttons. Imperfection signals authenticity.
              </p>
            </div>
            <div className="border-l-4 border-[#ff4444] pl-6">
              <h3
                className="text-lg font-bold text-black dark:text-white mb-2 uppercase tracking-wide"
                style={{ fontFamily: "var(--font-space-mono)" }}
              >
                ORGANIZED CHAOS
              </h3>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                Structured but not sterile. The right idea with rough edges. Human, not corporate.
              </p>
            </div>
          </div>
        </section>

        <section className="border-t-2 border-black/10 dark:border-white/10 pt-8">
          <p
            className="text-base text-[#6b6b6b] dark:text-[#a0a0a0]"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            → Check the sidebar for components<br/>
            → Visit the Playground to see iterations<br/>
            → Build something that doesn&apos;t look like everyone else
          </p>
        </section>
      </div>
    </div>
  );
}
