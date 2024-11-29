'use client';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm, Controller } from 'react-hook-form';
import * as z from 'zod';
import { Textarea } from '@/components/ui/textarea';
import { ImageUpload } from './ImageUpload';

// const tags = [
//   'React',
//   'JavaScript',
//   'TypeScript',
//   'Node.js',
//   'Next.js',
//   'CSS',
//   'HTML'
// ];

const courseSchema = z.object({
  name: z.string().min(1, 'Course name is required'),
  description: z.string().min(1, 'Course description is required'),
  tags: z.array(z.string()).min(1, 'At least one tag is required'),
  coverImage: z.string().url('Invalid URL for cover image')
});

type CourseFormData = z.infer<typeof courseSchema>;

const CourseForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<CourseFormData>({
    resolver: zodResolver(courseSchema),
    defaultValues: {
      name: '',
      description: '',
      tags: [],
      coverImage: ''
    }
  });

  const onSubmit = async (data: z.infer<typeof courseSchema>) => {
    setIsSubmitting(true);

    const formData = new FormData();
    formData.append('name', data.name);
    formData.append('description', data.description);
    formData.append('tags', data.tags.join(','));
    formData.append('coverImage', data.coverImage);

    setIsSubmitting(false);
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div>
        <Label htmlFor="name">Course Name</Label>
        <Input id="name" name="name" required />
      </div>
      <div>
        <Label htmlFor="description">Course Description</Label>
        <Textarea id="description" name="description" required />
      </div>

      <div>
        <Label className="pb-4" htmlFor="coverImage">
          Cover Image
        </Label>
        <Controller
          name="coverImage"
          control={control}
          render={({ field }) => (
            <ImageUpload
              onChange={(file) => field.onChange(file)}
              value={field?.value}
            />
          )}
        />
        {errors.coverImage && (
          <p className="mt-1 text-sm text-red-500">
            {errors.coverImage.message}
          </p>
        )}
      </div>
      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? 'Creating Course...' : 'Create Course'}
      </Button>
    </form>
  );
};
export default CourseForm;
