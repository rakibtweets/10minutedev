'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useGetModules } from '@/hooks/module';
import { IVideo, ParamsProps } from '@/types';
import { Video } from 'lucide-react';
import { useParams } from 'next/navigation';
import CourseContentSkeleton from '../Skeletons/course-content-skeleton';
import NotFound from '../ui/not-found';

export default function CourseModules() {
  const params = useParams<ParamsProps>();
  const { data: modules, isError, error, isLoading } = useGetModules(params.id);

  if (isLoading) {
    return <CourseContentSkeleton />;
  }
  if (isError) {
    return (
      <div className="flex w-full items-center justify-center">
        <NotFound message={error.message} title="Fail to fetch courses" />
      </div>
    );
  }
  return (
    <Accordion type="single" collapsible className="w-full">
      {modules?.map((module) => (
        <AccordionItem key={module._id} value={module._id}>
          <AccordionTrigger>
            <div className="flex w-full items-center justify-between">
              <h4 className="font-semibold">{module.title}</h4>
              <p className="text-sm text-muted-foreground">
                ({module.videos.length} videos)
              </p>
            </div>
          </AccordionTrigger>
          <AccordionContent>
            <ul className="space-y-2">
              {module.videos.map((video: IVideo) => (
                <li
                  key={video._id}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center">
                    <Video className="mr-2 size-4 text-primary" />
                    <span>{video.title}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {video.duration}
                  </span>
                </li>
              ))}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
