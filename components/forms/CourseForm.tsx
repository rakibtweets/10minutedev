'use client';
import { Button } from '@/components/ui/button';
import React, { useRef, useState } from 'react';
import { Input } from '@/components/ui/input';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useTheme } from 'next-themes';
import { Editor } from '@tinymce/tinymce-react';
import { courseFormSchema, CourseFormValues } from '@/lib/validation';
import { useToast } from '../ui/use-toast';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '../ui/form';
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem
} from '@/components/ui/select';
import {
  MultiSelector,
  MultiSelectorContent,
  MultiSelectorInput,
  MultiSelectorItem,
  MultiSelectorList,
  MultiSelectorTrigger
} from '@/components/ui/multi-select';
import { Tag, tags } from '@/constants';
import { ImageDropzone } from './image-dropzone';
import { useCreateCourse } from '@/hooks/use-create-course';

const CourseForm = () => {
  const editorRef = useRef(null);
  const { theme } = useTheme();
  const { toast } = useToast();
  const [preview, setPreview] = useState<string | null>(null);

  const form = useForm<CourseFormValues>({
    resolver: zodResolver(courseFormSchema),
    defaultValues: {
      title: '',
      instructor: '',
      description: '',
      thumbnail: {
        url: undefined,
        publicId: ''
      },
      duration: 0,
      tags: []
    }
  });

  const onDrop = async (acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file.size >= 4 * 1024 * 1024) {
      toast({
        title: 'Error',
        description: 'File size must be less than 4MB',
        variant: 'destructive'
      });
      return;
    }

    console.log('file', file);

    setPreview(URL.createObjectURL(file));
    form.setValue('thumbnail.url', file);
  };

  const clearImage = () => {
    setPreview(null);
    form.setValue('thumbnail.url', undefined as any);
  };

  const { mutate } = useCreateCourse();

  const onSubmit = async (values: CourseFormValues) => {
    console.log('form value', values);

    console.log(JSON.stringify(values));

    mutate(values, {
      onSuccess: () => {
        form.reset();
        clearImage();
      },
      onError: (error: unknown) => {
        // @ts-ignore
        console.error('Form submission error', error?.message);

        toast({
          title: 'Error',
          // @ts-ignore
          description: error?.message,
          variant: 'destructive'
        });
      }
    });
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Course name" type="text" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="instructor"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Instructor</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter Instructor name"
                  type="text"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          name="description"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>Course Description</FormLabel>
              <FormControl>
                <Editor
                  apiKey={process.env.NEXT_PUBLIC_TINY_EDITOR_API_KEY}
                  onInit={(evt, editor) => {
                    // @ts-ignore
                    editorRef.current = editor;
                  }}
                  onBlur={field.onBlur}
                  onEditorChange={(content) => field.onChange(content)}
                  initialValue={''}
                  init={{
                    height: 350,
                    menubar: false,
                    plugins: [
                      'advlist',
                      'autolink',
                      'lists',
                      'link',
                      'image',
                      'charmap',
                      'preview',
                      'anchor',
                      'searchreplace',
                      'visualblocks',
                      'codesample',
                      'fullscreen',
                      'insertdatetime',
                      'media',
                      'table'
                    ],
                    toolbar:
                      'undo redo | ' +
                      ' bold italic forecolor | alignleft aligncenter |' +
                      'alignright alignjustify | bullist numlist',
                    content_style: 'body { font-family:Inter; font-size:16px }',
                    skin: theme === 'dark' ? 'oxide-dark' : 'oxide',
                    content_css: theme === 'dark' ? 'dark' : 'light'
                  }}
                />
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
              <FormLabel>Duration (hours)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter course duration"
                  type="number"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:gap-4">
          <div className="w-full">
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select course level" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="beginner">Begineer</SelectItem>
                      <SelectItem value="intermediate">Intermediate</SelectItem>
                      <SelectItem value="advanced">Advanced</SelectItem>
                    </SelectContent>
                  </Select>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="w-full">
            <FormField
              control={form.control}
              name="tags"
              render={({ field }) => (
                <FormItem className="space-y-0">
                  <FormLabel>Tags</FormLabel>
                  <FormControl>
                    <MultiSelector
                      values={field.value}
                      onValuesChange={field.onChange}
                      loop
                      className="w-full"
                    >
                      <MultiSelectorTrigger>
                        <MultiSelectorInput placeholder="Select Course Tags" />
                      </MultiSelectorTrigger>
                      <MultiSelectorContent>
                        <MultiSelectorList>
                          {
                            // @ts-ignore
                            tags.map((tag: Tag) => (
                              <MultiSelectorItem
                                key={tag.value}
                                value={tag.value}
                              >
                                {tag.label}
                              </MultiSelectorItem>
                            ))
                          }
                        </MultiSelectorList>
                      </MultiSelectorContent>
                    </MultiSelector>
                  </FormControl>

                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

        <FormField
          control={form.control}
          name="thumbnail.url"
          render={({ field: { onChange, ...field }, fieldState }) => (
            <FormItem>
              <FormLabel>Thmumbail</FormLabel>
              <FormControl>
                <ImageDropzone
                  preview={preview}
                  onDrop={onDrop}
                  onClear={clearImage}
                  error={fieldState.error?.message}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" disabled={form.formState.isLoading}>
          {form.formState.isLoading ? 'Creating Course...' : 'Create Course'}
        </Button>
      </form>
    </Form>
  );
};
export default CourseForm;
