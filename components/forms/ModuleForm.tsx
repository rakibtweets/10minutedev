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
import { useCreateModule, useUpdateModule } from '@/hooks/module';
import { IModule, ParamsProps } from '@/types';
import { useToast } from '../ui/use-toast';
import { useParams } from 'next/navigation';

interface ModuleFormProps {
  type: 'Add' | 'Edit';
  module?: IModule | undefined;
}

export default function ModuleForm({ type, module }: ModuleFormProps) {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const params = useParams<ParamsProps>();
  const { toast } = useToast();

  const form = useForm<ModuleFormValues>({
    resolver: zodResolver(moduleSchema),
    defaultValues: {
      title: module?.title || '',
      description: module?.description || '',
      course: params?.courseId || ''
    }
  });

  const { mutate: createModule } = useCreateModule();
  const { mutate: updateModule } = useUpdateModule(module?._id || '');

  async function onSubmit(values: ModuleFormValues) {
    setIsLoading(true);
    console.log('module form data', values);
    try {
      // Call API to create module
      if (type === 'Add') {
        createModule(values, {
          onSuccess: () => {
            form.reset();
            setIsLoading(false);
          },
          onError: (error) => {
            console.error('Failed to create module', error);
            setIsLoading(false);
          }
        });
      } else {
        updateModule(values, {
          onSuccess: () => {
            setIsLoading(false);
            toast({
              title: 'Updated',
              // @ts-ignore
              description: 'Module updated successfully',
              variant: 'default'
            });
          },
          onError: (error: unknown) => {
            // @ts-ignore
            // console.error('Form submission error', error?.message);
            toast({
              title: 'Error',
              // @ts-ignore
              description: error?.message,
              variant: 'destructive'
            });
            form.reset();
            setIsLoading(false);
          }
        });
      }
    } catch (error) {
      console.error('Failed to create module', error);
    }
    setIsLoading(false);
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
                <Input disabled readOnly placeholder="Course ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={isLoading}>
          {isLoading ? (
            <>{type === 'Add' ? 'Creating Module...' : 'Updating Module...'}</>
          ) : (
            <>{type === 'Add' ? 'Create Module' : 'Update Module'}</>
          )}
        </Button>
      </form>
    </Form>
  );
}
