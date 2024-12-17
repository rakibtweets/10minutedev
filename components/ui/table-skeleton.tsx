import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Skeleton } from '@/components/ui/skeleton';

interface TableSkeletonProps {
  columnCount: number;
  rowCount?: number;
  showPagination?: boolean;
}

export function TableSkeleton({
  columnCount,
  rowCount = 5,
  showPagination = true
}: TableSkeletonProps) {
  return (
    <div>
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              {[...Array(columnCount)].map((_, index) => (
                <TableHead key={index}>
                  <Skeleton className="h-4 w-full" />
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {[...Array(rowCount)].map((_, rowIndex) => (
              <TableRow key={rowIndex}>
                {[...Array(columnCount)].map((_, cellIndex) => (
                  <TableCell key={cellIndex}>
                    <Skeleton className="h-4 w-full" />
                  </TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {showPagination && (
        <div className="flex items-center justify-end space-x-2 py-4">
          <Skeleton className="h-8 w-20" />
          <Skeleton className="h-8 w-20" />
        </div>
      )}
    </div>
  );
}
