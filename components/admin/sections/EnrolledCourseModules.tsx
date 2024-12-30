'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { useGetModules } from '@/hooks/module';
import { IVideo, ParamsProps } from '@/types';
import { useParams, useRouter, useSearchParams } from 'next/navigation';
import CourseContentSkeleton from '@/components/Skeletons/course-content-skeleton';
import NotFound from '@/components/ui/not-found';
import VideoList from '@/components/admin/sections/VideoList';
import { formUrlQuery } from '@/lib/utils';

export default function EnrolledCourseModules() {
  const params = useParams<ParamsProps>();
  const searchParams = useSearchParams();
  const router = useRouter();

  const videoId = searchParams.get('videoId');

  const handleButtonClick = (item: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'videoId',
      value: item
    });
    router.push(newUrl, { scroll: false });
  };

  const {
    data: modules,
    isError,
    error,
    isLoading
  } = useGetModules({ courseId: params.id, videoId: true });

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
              {module.videos.map((video: IVideo) => {
                const isActive = videoId === video.videoId;
                return (
                  <VideoList
                    key={video._id}
                    video={video}
                    videoId={true}
                    isActive={isActive}
                    handleButtonClick={handleButtonClick}
                  />
                );
              })}
            </ul>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
