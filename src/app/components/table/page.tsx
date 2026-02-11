import Table, { TableHead, TableBody, TableRow, TableCell } from "@/components/Table";

export default function TablePage() {
  return (
    <div className="max-w-4xl">
      <div className="mb-12">
        <h1
          className="text-6xl font-bold text-black dark:text-white mb-4 leading-none uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          TABLE
        </h1>
        <p
          className="text-xl text-[#6b6b6b] dark:text-[#a0a0a0]"
          style={{ fontFamily: "var(--font-inter)" }}
        >
          Structured data with bold borders. Information organized clearly.
        </p>
      </div>

      <section className="mb-12">
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Example
        </h2>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell isHeader>Name</TableCell>
              <TableCell isHeader>Role</TableCell>
              <TableCell isHeader>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Amanda</TableCell>
              <TableCell>Designer</TableCell>
              <TableCell className="font-bold text-[#ff4444]">Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Jordan</TableCell>
              <TableCell>Developer</TableCell>
              <TableCell className="font-bold text-[#ff4444]">Active</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Casey</TableCell>
              <TableCell>Manager</TableCell>
              <TableCell>Inactive</TableCell>
            </TableRow>
          </TableBody>
        </Table>
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
            <code>{`import Table, {
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@/components/Table";

<Table>
  <TableHead>
    <TableRow>
      <TableCell isHeader>Column 1</TableCell>
      <TableCell isHeader>Column 2</TableCell>
    </TableRow>
  </TableHead>
  <TableBody>
    <TableRow>
      <TableCell>Data 1</TableCell>
      <TableCell>Data 2</TableCell>
    </TableRow>
  </TableBody>
</Table>`}</code>
          </pre>
        </div>
      </section>

      <section>
        <h2
          className="text-3xl font-bold text-black dark:text-white mb-6 uppercase"
          style={{ fontFamily: "var(--font-marker)" }}
        >
          Components
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
                  Purpose
                </th>
              </tr>
            </thead>
            <tbody className="bg-white dark:bg-[#1a1a1a]">
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  Table
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                  Root table wrapper with borders
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  TableHead
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                  Header row with black background
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  TableBody
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                  Body rows with white background
                </td>
              </tr>
              <tr className="border-b-2 border-black/10 dark:border-white/10">
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  TableRow
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                  Individual row with bottom border
                </td>
              </tr>
              <tr>
                <td className="px-4 py-4 text-sm text-black dark:text-white font-bold" style={{ fontFamily: "var(--font-space-mono)" }}>
                  TableCell
                </td>
                <td className="px-4 py-4 text-sm text-[#6b6b6b] dark:text-[#a0a0a0]" style={{ fontFamily: "var(--font-inter)" }}>
                  Cell (header or data) with isHeader prop
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
