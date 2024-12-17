'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
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
import { Textarea } from '@/components/ui/textarea';
import { ModuleFormValues, moduleSchema } from '@/lib/validation';

interface ModuleFormProps {
  type: 'Add' | 'Edit';
  course?: string | undefined;
}

export default function ModuleForm({ type, course }: ModuleFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const form = useForm<ModuleFormValues>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      title: '',
      description: '',
      course: '',
      duration: undefined
    }
  });

  async function onSubmit(data: ModuleFormValues) {
    setIsLoading(true);
    try {
      const response = await fetch('/api/modules', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        throw new Error('Failed to create module');
      }
      form.reset();
      // You can add a success message or redirect here
    } catch (error) {
      console.error('Error creating module:', error);
      // You can add an error message here
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8  py-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Module title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <Textarea placeholder="Module description" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="course"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course ID</FormLabel>
              <FormControl>
                <Input placeholder="Course ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="duration"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Duraion (minutes)</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  placeholder="Enter duration in minutes"
                  {...field}
                  onChange={(e) => field.onChange(parseInt(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Creating...' : 'Create Module'}
        </Button>
      </form>
    </Form>
  );
}
