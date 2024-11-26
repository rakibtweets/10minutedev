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

// Mock data for enrolled courses
const enrolledCourses = [
  {
    id: 'ENR001',
    name: 'Introduction to React',
    enrollmentTime: '2023-05-15T10:30:00Z',
    certificateAvailable: true
  },
  {
    id: 'ENR002',
    name: 'Advanced JavaScript Concepts',
    enrollmentTime: '2023-06-01T14:45:00Z',
    certificateAvailable: false
  },
  {
    id: 'ENR003',
    name: 'CSS Mastery',
    enrollmentTime: '2023-06-10T09:15:00Z',
    certificateAvailable: true
  },
  {
    id: 'ENR004',
    name: 'Node.js Fundamentals',
    enrollmentTime: '2023-07-01T11:00:00Z',
    certificateAvailable: false
  }
];

const EmrollmentPage = () => {
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
  return (
    <div className="w-full space-y-4">
      <h2 className="text-2xl font-semibold">Enrolled Courses</h2>
      <Table>
        <TableCaption>A list of your enrolled courses</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Course Name</TableHead>
            <TableHead>Enrollment Time</TableHead>
            <TableHead>Enrollment ID</TableHead>
            <TableHead>Certificate</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {enrolledCourses.map((course) => (
            <TableRow key={course.id}>
              <TableCell className="font-medium">{course.name}</TableCell>
              <TableCell>{formatDate(course.enrollmentTime)}</TableCell>
              <TableCell>{course.id}</TableCell>
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
    </div>
  );
};
export default EmrollmentPage;
