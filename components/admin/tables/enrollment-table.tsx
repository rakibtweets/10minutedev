'use client';

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Download } from 'lucide-react';
import { useGetUserEnrolledCourses } from '@/hooks/user';
import NotFound from '@/components/ui/not-found';
import { TableSkeleton } from '@/components/ui/table-skeleton';

const EnrollmentTable = () => {
  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };
  const {
    data: courses,
    isLoading,
    isError,
    error
  } = useGetUserEnrolledCourses();
  if (isLoading) {
    return (
      <TableSkeleton columnCount={5} rowCount={5} showPagination={false} />
    );
  }

  if (isError) {
    return (
      <div className="flex w-full justify-center">
        <NotFound message={error.message} title="Fail to fetch courses" />
      </div>
    );
  }
  return (
    <Table>
      <TableCaption>A list of your enrolled courses</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Enrollment ID</TableHead>
          <TableHead>Course Name</TableHead>
          <TableHead className="hidden md:block">Enrollment Time</TableHead>
          <TableHead>Certificate</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses?.map((course: any) => (
          <TableRow key={course.courseId}>
            <TableCell>{course.courseId}</TableCell>
            <TableCell className="font-medium">{course?.title}</TableCell>
            <TableCell className="hidden md:block">
              {formatDate(course.enrolledAt)}
            </TableCell>
            <TableCell>
              {course.certificateAvailable ? (
                <Button variant="outline" size="sm">
                  <Download className="mr-2 size-4" />
                  Download
                </Button>
              ) : (
                <Badge variant="secondary">Not Available</Badge>
              )}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
export default EnrollmentTable;
