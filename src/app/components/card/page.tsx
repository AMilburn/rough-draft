import Card, { CardHeader, CardContent, CardFooter } from "@/components/Card";
import Button from "@/components/Button";

export default function CardPage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1
          className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          CARD
        </h1>
        <p
          className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Square containers with bold borders. Structure that&apos;s intentional, not accidental.
        </p>
      </div>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Variants
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card variant="default">
            <CardHeader>
              <h3 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide" style={{ fontFamily: "var(--font-space-mono)" }}>
                Default
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                Light borders, clean structure.
              </p>
            </CardContent>
          </Card>

          <Card variant="bordered">
            <CardHeader>
              <h3 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide" style={{ fontFamily: "var(--font-space-mono)" }}>
                Bordered
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                Bold borders for emphasis.
              </p>
            </CardContent>
          </Card>

          <Card variant="elevated">
            <CardHeader>
              <h3 className="text-lg font-bold text-black dark:text-white uppercase tracking-wide" style={{ fontFamily: "var(--font-space-mono)" }}>
                Elevated
              </h3>
            </CardHeader>
            <CardContent>
              <p className="text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                Red shadow for depth.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          With Footer
        </h2>
        <Card variant="bordered" className="max-w-2xl">
          <CardHeader>
            <h3 className="text-xl font-bold text-black dark:text-white uppercase" style={{ fontFamily: "var(--font-space-mono)" }}>
              Complete Card
            </h3>
          </CardHeader>
          <CardContent>
            <p className="text-[#6b6b6b] dark:text-[#a0a0a0] mb-4" style={{ fontFamily: "var(--font-inter)" }}>
              Cards can have headers, content, and footers. Perfect for organizing information
              with clear hierarchy and actions.
            </p>
          </CardContent>
          <CardFooter>
            <div className="flex gap-3">
              <Button size="sm" variant="primary">
                Action
              </Button>
              <Button size="sm" variant="outline">
                Cancel
              </Button>
            </div>
          </CardFooter>
        </Card>
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
            <code>{`import Card, {
  CardHeader,
  CardContent,
  CardFooter
} from "@/components/Card";

<Card variant="bordered">
  <CardHeader>
    <h3>Title</h3>
  </CardHeader>
  <CardContent>
    <p>Content</p>
  </CardContent>
  <CardFooter>
    <button>Action</button>
  </CardFooter>
</Card>`}</code>
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
                  Card
                </td>
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  variant
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  &quot;default&quot; | &quot;bordered&quot; | &quot;elevated&quot;
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-space-mono)" }}>
                  &quot;default&quot;
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  CardHeader
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" colSpan={3} style={{ fontFamily: "var(--font-inter)" }}>
                  Standard div attributes
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  CardContent
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" colSpan={3} style={{ fontFamily: "var(--font-inter)" }}>
                  Standard div attributes
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  CardFooter
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" colSpan={3} style={{ fontFamily: "var(--font-inter)" }}>
                  Standard div attributes
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
