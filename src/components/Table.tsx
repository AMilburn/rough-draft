import { HTMLAttributes, ReactNode } from "react";

interface TableProps extends HTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
  isHeader?: boolean;
}

export default function Table({ children, className = "", ...props }: TableProps) {
  return (
    <div className="overflow-x-auto border-3 border-black dark:border-white">
      <table className={`min-w-full ${className}`} {...props}>
        {children}
      </table>
    </div>
  );
}

export function TableHead({ children, className = "", ...props }: TableHeadProps) {
  return (
    <thead className={`bg-black dark:bg-white ${className}`} {...props}>
      {children}
    </thead>
  );
}

export function TableBody({ children, className = "", ...props }: TableBodyProps) {
  return (
    <tbody className={`bg-white dark:bg-[#1a1a1a] ${className}`} {...props}>
      {children}
    </tbody>
  );
}

export function TableRow({ children, className = "", ...props }: TableRowProps) {
  return (
    <tr className={`border-b-2 border-black/10 dark:border-white/10 ${className}`} {...props}>
      {children}
    </tr>
  );
}

export function TableCell({
  children,
  isHeader = false,
  className = "",
  ...props
}: TableCellProps) {
  if (isHeader) {
    return (
      <th
        className={`px-4 py-4 text-left text-xs font-bold text-white dark:text-black uppercase tracking-wider ${className}`}
        style={{ fontFamily: "var(--font-space-mono)" }}
        {...props}
      >
        {children}
      </th>
    );
  }

  return (
    <td
      className={`px-4 py-4 text-sm text-black dark:text-white ${className}`}
      style={{ fontFamily: "var(--font-inter)" }}
      {...props}
    >
      {children}
    </td>
  );
}
