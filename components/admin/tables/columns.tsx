'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import { MoreHorizontal, ArrowUpDown } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import { Badge } from '@/components/ui/badge';
import { ICourse } from '@/constants';

export const columns: ColumnDef<ICourse>[] = [
  {
    accessorKey: 'name',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Course Name
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'creationDate',
    header: 'Creation Date',
    cell: ({ row }) => {
      return new Date(row.getValue('creationDate')).toLocaleDateString();
    }
  },
  {
    accessorKey: 'accessible',
    header: 'Accessible',
    cell: ({ row }) => {
      const status = row.getValue('accessible') as string;
      return (
        <Badge
          variant={
            status === 'published'
              ? 'default'
              : status === 'hidden'
                ? 'secondary'
                : 'destructive'
          }
        >
          {status}
        </Badge>
      );
    }
  },
  {
    accessorKey: 'lastUpdated',
    header: 'Last Updated',
    cell: ({ row }) => {
      return new Date(row.getValue('lastUpdated')).toLocaleDateString();
    }
  },
  {
    accessorKey: 'totalEnrolled',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Total Enrolled
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    }
  },
  {
    id: 'actions',
    cell: ({ row }) => {
      const course = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="size-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(course.id)}
            >
              Copy course ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Edit course</DropdownMenuItem>
            <DropdownMenuItem>Delete course</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
