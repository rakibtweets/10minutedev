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

export const updateCourseSchema = z.object({
  title: z.string().min(1, 'Title is required').optional(),
  instructor: z.string().min(1, 'Instructor is required').optional(),
  description: z.string().min(1, 'Description is required').optional(),
  duration: z
    .union([
      z
        .number()
        .positive({ message: 'Duration must be positive' })
        .int({ message: 'Duration must be an integer' })
        .optional(),
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
        .optional()
    ])
    .refine(
      (value) =>
        typeof value === 'number' && value > 0 && Number.isInteger(value),
      {
        message: 'Duration must be a positive integer'
      }
    )
    .optional(),
  level: z.string().min(1, 'level is required').optional(),
  tags: z.array(z.string()).nonempty('Please at least one item').optional(),
  thumbnail: z
    .object({
      url: z.string().min(1, 'thumbnail is required').optional(),
      publicId: z.string().optional()
    })
    .optional(),
  isPublished: z.boolean().optional()
});

export type CourseFormValues = z.infer<typeof courseFormSchema>;
export type UpdateCourseFormValues = z.infer<typeof updateCourseSchema>;

export const UserSchema = z.object({
  _id: z.string().optional(), // MongoDB ObjectId
  email: z.string().email('Invalid email address'), // Assuming possible auth types
  isAdmin: z.boolean(),
  isDeactivated: z.boolean(),
  displayName: z.string().min(1, 'Display name is required'),
  avatarUrl: z.string().url('Invalid URL format')
});

export type UserFormValues = z.infer<typeof UserSchema>;

export const moduleSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  course: z.string().min(1, 'Course ID is required'),
  duration: z
    .union([
      z
        .number()
        .positive({ message: 'Duration must be positive' })
        .int({ message: 'Duration must be an integer' })
        .optional(),
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
        .optional()
    ])
    .refine(
      (value) =>
        typeof value === 'number' && value > 0 && Number.isInteger(value),
      {
        message: 'Duration must be a positive integer'
      }
    )
    .optional()
});

export type ModuleFormValues = z.infer<typeof moduleSchema>;

export const videoSchema = z.object({
  title: z.string().min(1, 'Title is required'),
  description: z.string().optional(),
  module: z.string().min(1, 'Module ID is required'),
  videoId: z.string().min(1, 'Video ID is required'),
  duration: z
    .union([
      z
        .number()
        .positive({ message: 'Duration must be positive' })
        .int({ message: 'Duration must be an integer' })
        .optional(),
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
        .optional()
    ])
    .refine(
      (value) =>
        typeof value === 'number' && value > 0 && Number.isInteger(value),
      {
        message: 'Duration must be a positive integer'
      }
    ),
  order: z
    .union([
      z
        .number()
        .positive({ message: 'Duration must be positive' })
        .int({ message: 'Duration must be an integer' })
        .optional(),
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
        .optional()
    ])
    .refine(
      (value) =>
        typeof value === 'number' && value > 0 && Number.isInteger(value),
      {
        message: 'Duration must be a positive integer'
      }
    )
    .optional()
});

export type VideoFormValues = z.infer<typeof videoSchema>;
