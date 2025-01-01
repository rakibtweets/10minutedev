'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { EnrollFormValues, enrollSchema } from '@/lib/validation';
import { useEnrollCourse } from '@/hooks/course/use-enroll-course';
import { useState } from 'react';
import { useToast } from '../ui/use-toast';
import { useParams } from 'next/navigation';
import { ParamsProps } from '@/types';

interface CourseEnrollFormProps {
  setOpen: (open: boolean) => void;
}

const CourseEnrollForm = ({ setOpen }: CourseEnrollFormProps) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams<ParamsProps>();
  const { toast } = useToast();
  const form = useForm<EnrollFormValues>({
    resolver: zodResolver(enrollSchema),
    defaultValues: {
      email: ''
    }
  });

  const { mutate: enrollCourse } = useEnrollCourse(params.id);

  const onSubmit = (values: EnrollFormValues) => {
    // Here you would typically send the email to your backend
    setIsLoading(true);

    enrollCourse(values, {
      onSuccess: () => {
        setIsLoading(false);
        form.reset();
        setOpen(false);
        toast({
          title: 'Enrolled',
          description: 'You have been enrolled to the course',
          variant: 'default'
        });
      },
      onError: (error: any) => {
        // @ts-ignore
        toast({
          title: `${error.name}: ${error?.HTTPStatus}`,
          // @ts-ignore
          description: error?.message,
          variant: 'destructive'
        });
        form.reset();
        setIsLoading(false);
      }
    });
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="your@email.com" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Enrolling...' : 'Enroll'}
        </Button>
      </form>
    </Form>
  );
};
export default CourseEnrollForm;
