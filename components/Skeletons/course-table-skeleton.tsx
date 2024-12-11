import { TableSkeleton } from '@/components/ui/table-skeleton';

export function CourseTableSkeleton() {
  return <TableSkeleton columnCount={5} rowCount={5} showPagination={true} />;
}
