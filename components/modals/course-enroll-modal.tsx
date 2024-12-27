'use client';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger
} from '@/components/ui/dialog';
import CourseEnrollForm from '@/components/forms/CourseEnrollForm';
import { Button } from '@/components/ui/button';
import { useState } from 'react';

const CourseEnrollModal = () => {
  const [open, setOpen] = useState<boolean>(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="w-full text-lg" size="lg">
          Enroll Course
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Course Enrollment</DialogTitle>
          <DialogDescription>
            Enter your logged in account email address to enroll in the course.
          </DialogDescription>
        </DialogHeader>
        <CourseEnrollForm setOpen={setOpen} />
      </DialogContent>
    </Dialog>
  );
};
export default CourseEnrollModal;
