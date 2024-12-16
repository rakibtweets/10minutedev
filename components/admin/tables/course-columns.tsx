'use client';

import { ColumnDef } from '@tanstack/react-table';
import { Button } from '@/components/ui/button';
import {
  MoreHorizontal,
  ArrowUpDown,
  CheckCircle,
  XCircle
} from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import Image from 'next/image';
import { ICourse } from '@/types';
import Link from 'next/link';
import PublishCourseButton from '@/components/buttons/PublishCourseButton';
import DeleteCourseButton from '@/components/buttons/DeleteCourseButton';

export const columns: ColumnDef<ICourse>[] = [
  {
    accessorKey: 'index',
    header: 'No.',
    cell: ({ row }) => <div>{row.index + 1}</div>
  },
  {
    accessorKey: 'thumbnail',
    header: 'Thumbnail',
    cell: ({ row }) => (
      <div className="relative size-16">
        <Image
          src={row.original.thumbnail.url}
          alt={row.original.title}
          fill
          className="rounded-md object-cover"
        />
      </div>
    )
  },
  {
    accessorKey: 'title',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Title
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'instructor',
    header: 'Instructor'
  },
  {
    accessorKey: 'enrolledStudents',
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === 'asc')}
        >
          Enrolled Students
          <ArrowUpDown className="ml-2 size-4" />
        </Button>
      );
    }
  },
  {
    accessorKey: 'level',
    header: 'Level'
  },
  {
    accessorKey: 'isPublished',
    header: 'Published',
    cell: ({ row }) => (
      <div className="flex justify-center">
        {row.original.isPublished ? (
          <CheckCircle className="text-green-500" />
        ) : (
          <XCircle className="text-red-500" />
        )}
      </div>
    )
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
              className="cursor-pointer"
              onClick={() => navigator.clipboard.writeText(course._id)}
            >
              Copy course ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="cursor-pointer">
              <Link href={`/admin/courses/edit/${course._id}`}>
                Edit course
              </Link>
            </DropdownMenuItem>
            <PublishCourseButton course={course} />
            <DeleteCourseButton courseId={course._id} />
          </DropdownMenuContent>
        </DropdownMenu>
      );
    }
  }
];
