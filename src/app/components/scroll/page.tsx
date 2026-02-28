export default function ScrollPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1
          className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          SCROLLING
        </h1>
        <p
          className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          When to use infinite scroll vs. pagination for modern interfaces.
        </p>
      </div>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Infinite Scroll
        </h2>
        <ul className="list-disc pl-6 mb-4 text-[#6b6b6b] dark:text-[#a0a0a0]">
          <li>
            Best for content feeds where users are expected to browse
            continuously (e.g., social media, image galleries).
          </li>
          <li>
            Ideal when users rarely need to access a specific item or reach the
            end of the list.
          </li>
          <li>
            Encourages exploration and increases time-on-site for
            discovery-driven experiences.
          </li>
          <li>
            Can be problematic for accessibility, deep linking, and reaching the
            footer or important page elements.
          </li>
        </ul>
        <div className="bg-black dark:bg-white p-6 border-3 border-black dark:border-white overflow-x-auto">
          <pre
            className="text-white dark:text-black text-sm"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            <code>{`// Infinite scroll is best for:\n// - Social feeds\n// - Image galleries\n// - Discovery-driven content\n// Avoid for: search, reference, or when users need control.`}</code>
          </pre>
        </div>
        <p
          className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0] mt-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <strong>Use infinite scroll</strong> for immersive, discovery-oriented
          content where users benefit from a seamless, uninterrupted flow.
        </p>
      </section>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Pagination
        </h2>
        <ul className="list-disc pl-6 mb-4 text-[#6b6b6b] dark:text-[#a0a0a0]">
          <li>
            Best for data tables, search results, or content where users may
            want to jump to a specific page or item.
          </li>
          <li>
            Improves performance by loading only a subset of data at a time.
          </li>
          <li>
            Enhances accessibility and allows for bookmarking, sharing, and deep
            linking to specific pages.
          </li>
          <li>Gives users a sense of progress and control over navigation.</li>
        </ul>
        <div className="bg-black dark:bg-white p-6 border-3 border-black dark:border-white overflow-x-auto">
          <pre
            className="text-white dark:text-black text-sm"
            style={{ fontFamily: "var(--font-space-mono)" }}
          >
            <code>{`// Pagination is best for:\n// - Search results\n// - Data tables\n// - Reference content\n// Use when users need to find, compare, or reference specific items.`}</code>
          </pre>
        </div>
        <p
          className="text-sm text-[#6b6b6b] dark:text-[#a0a0a0] mt-2"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <strong>Use pagination</strong> for structured content, search, or
          when users need to find, compare, or reference specific items.
        </p>
      </section>

      <section>
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Comparison
        </h2>
        <div className="overflow-x-auto border-3 border-black dark:border-white mb-4">
          <table className="min-w-full">
            <thead className="bg-black dark:bg-white">
              <tr>
                <th
                  className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Criteria
                </th>
                <th
                  className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Infinite Scroll
                </th>
                <th
                  className="px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Pagination
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1a1a1a]">
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td
                  className="px-4 py-4 text-sm text-black dark:text-white font-bold"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Best for
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Continuous feeds, discovery
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Search, data tables, reference
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td
                  className="px-4 py-4 text-sm text-black dark:text-white font-bold"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Accessibility
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Challenging
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Strong
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td
                  className="px-4 py-4 text-sm text-black dark:text-white font-bold"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Deep linking
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Difficult
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Easy
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td
                  className="px-4 py-4 text-sm text-black dark:text-white font-bold"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  Performance
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Can be heavy
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Efficient
                </td>
              </tr>
              <tr>
                <td
                  className="px-4 py-4 text-sm text-black dark:text-white font-bold"
                  style={{ fontFamily: "var(--font-space-mono)" }}
                >
                  User control
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  Low
                </td>
                <td
                  className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]"
                  style={{ fontFamily: "var(--font-inter)" }}
                >
                  High
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p
          className="text-xs text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          <strong>Tip:</strong> Some modern interfaces combine both: infinite
          scroll for initial browsing, then switch to pagination or a "Load
          More" button for better control.
        </p>
      </section>
    </div>
  );
}
