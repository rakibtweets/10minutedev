'use client';
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
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { VideoFormValues, videoSchema } from '@/lib/validation';

interface VideoFormProps {
  type: 'Add' | 'Edit';
  module?: string | undefined;
  videoId?: string | undefined;
}

const VideoForm = ({ type, module, videoId }: VideoFormProps) => {
  const form = useForm<VideoFormValues>({
    resolver: zodResolver(videoSchema),
    defaultValues: {
      title: '',
      description: '',
      videoId: '',
      module: '',
      duration: undefined,
      order: undefined
    }
  });

  const onSubmit = (values: VideoFormValues) => {
    try {
      console.log(values);
    } catch (error) {
      console.error('Form submission error', error);
    }
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 py-10">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Enter Module Title" type="" {...field} />
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
                <Textarea
                  placeholder="Write video Details"
                  className="resize-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="videoId"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Id</FormLabel>
              <FormControl>
                <Input placeholder="Enter Video Id" type="text" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="module"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Module Id</FormLabel>
              <FormControl>
                <Input placeholder="Enter Module Id" type="text" {...field} />
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
              <FormLabel>Duration (minutes)</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter duration in minutes"
                  type="number"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="order"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Video Oder</FormLabel>
              <FormControl>
                <Input
                  placeholder="Enter video order"
                  type="number"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};
export default VideoForm;
