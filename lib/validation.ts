import { z } from 'zod';

export const courseFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  instructor: z.string().min(1, 'Instructor is required'),
  description: z.string().min(1, 'Description is required'),
  // thumbnail: z.string().url('Must be a valid URL'),
  duration: z
    .number()
    .positive({ message: 'Duration must be positive' })
    .int({ message: 'Duration must be integer' })
    .or(z.string())
    .pipe(
      z.coerce
        .number()
        .positive({ message: 'Duration must be positive' })
        .int({ message: 'Duration must be integer' })
    ),
  level: z.enum(['beginner', 'intermediate', 'advanced']),
  tags: z.array(z.string()).nonempty('Please at least one item'),
  thumbnail: z.instanceof(File).refine((file) => file.size < 4 * 1024 * 1024, {
    message: 'File size must be less than 4MB'
  })
});
