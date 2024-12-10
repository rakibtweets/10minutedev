import { z } from 'zod';

export const courseFormSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  instructor: z.string().min(1, 'Instructor is required'),
  description: z.string().min(1, 'Description is required'),
  duration: z
    .union([
      z
        .number()
        .positive({ message: 'Duration must be positive' })
        .int({ message: 'Duration must be an integer' }),
      z
        .string()
        .refine((value) => value.trim() !== '', {
          message: 'Duration is required'
        })
        .transform((value) => {
          const num = parseFloat(value);
          if (isNaN(num)) throw new Error('Duration must be a valid number');
          return num;
        })
    ])
    .refine(
      (value) =>
        typeof value === 'number' && value > 0 && Number.isInteger(value),
      {
        message: 'Duration must be a positive integer'
      }
    ),
  level: z.string().min(1, 'level is required'),
  tags: z.array(z.string()).nonempty('Please at least one item'),
  thumbnail: z.object({
    url: z.string().min(1, 'thumbnail is required'),
    publicId: z.string().optional()
  })
});
export type CourseFormValues = z.infer<typeof courseFormSchema>;
