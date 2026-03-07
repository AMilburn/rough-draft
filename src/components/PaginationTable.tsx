import Button from "./Button";
import Spinner from "./Spinner";
import Table, { TableHead, TableBody, TableRow, TableCell } from "./Table";

type PaginationProps = {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
};

function Pagination({ page, totalPages, onChange }: PaginationProps) {
  return (
    <div>
      <Button disabled={page === 1} onClick={() => onChange(page - 1)}>
        Prev
      </Button>

      <span>
        Page {page} of {totalPages}
      </span>

      <Button disabled={page === totalPages} onClick={() => onChange(page + 1)}>
        Next
      </Button>
    </div>
  );
}

export interface PaginationTableColumn {
  key: string;
  label: string;
  className?: string;
}

export interface PaginationTableProps {
  columns: PaginationTableColumn[];
  data: Record<string, React.ReactNode>[];
  page: number;
  pageSize: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  loading?: boolean;
  className?: string;
}

export function PaginationTable({
  columns,
  data,
  page,
  totalPages,
  onPageChange,
  loading = false,
  className = "",
}: PaginationTableProps) {
  return (
    <div className={className}>
      <Table>
        <TableHead>
          <TableRow>
            {columns.map((col) => (
              <TableCell key={col.key} isHeader className={col.className}>
                {col.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {loading ? (
            <TableRow>
              <TableCell className="text-center py-4">
                <Spinner />
              </TableCell>
            </TableRow>
          ) : (
            data.map((row, id) => (
              <TableRow key={id}>
                {columns.map((col) => (
                  <TableCell key={col.key} className={col.className}>
                    {row[col.key]}
                  </TableCell>
                ))}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>
      <Pagination page={page} totalPages={totalPages} onChange={onPageChange} />
    </div>
  );
}
