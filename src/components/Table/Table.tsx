import { HTMLAttributes, ReactNode } from "react";
import styles from "./Table.module.css";

interface TableProps extends HTMLAttributes<HTMLTableElement> { children: ReactNode; }
interface TableHeadProps extends HTMLAttributes<HTMLTableSectionElement> { children: ReactNode; }
interface TableBodyProps extends HTMLAttributes<HTMLTableSectionElement> { children: ReactNode; }
interface TableRowProps extends HTMLAttributes<HTMLTableRowElement> { children: ReactNode; }
interface TableCellProps extends HTMLAttributes<HTMLTableCellElement> { children: ReactNode; isHeader?: boolean; }

export default function Table({ children, className = "", ...props }: TableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={[styles.table, className].filter(Boolean).join(" ")} {...props}>{children}</table>
    </div>
  );
}

export function TableHead({ children, className = "", ...props }: TableHeadProps) {
  return <thead className={[styles.thead, className].filter(Boolean).join(" ")} {...props}>{children}</thead>;
}

export function TableBody({ children, className = "", ...props }: TableBodyProps) {
  return <tbody className={[styles.tbody, className].filter(Boolean).join(" ")} {...props}>{children}</tbody>;
}

export function TableRow({ children, className = "", ...props }: TableRowProps) {
  return <tr className={[styles.tr, className].filter(Boolean).join(" ")} {...props}>{children}</tr>;
}

export function TableCell({ children, isHeader = false, className = "", ...props }: TableCellProps) {
  if (isHeader) {
    return <th className={[styles.th, className].filter(Boolean).join(" ")} {...props}>{children}</th>;
  }
  return <td className={[styles.td, className].filter(Boolean).join(" ")} {...props}>{children}</td>;
}
