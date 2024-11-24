import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Video } from 'lucide-react';

interface IVideo {
  id: string;
  title: string;
  duration: string;
}

interface Module {
  id: string;
  title: string;
  videos: IVideo[];
}

const courseModules: Module[] = [
  {
    id: 'module-1',
    title: 'Introduction to the Course',
    videos: [
      { id: '1-1', title: 'Welcome to the Course', duration: '5:30' },
      { id: '1-2', title: 'Course Overview', duration: '10:15' },
      { id: '1-3', title: 'Setting Up Your Environment', duration: '15:45' }
    ]
  },
  {
    id: 'module-2',
    title: 'Fundamentals of React',
    videos: [
      { id: '2-1', title: 'What is React?', duration: '8:20' },
      { id: '2-2', title: 'Creating Your First Component', duration: '12:10' },
      { id: '2-3', title: 'State and Props', duration: '18:30' },
      { id: '2-4', title: 'Handling Events', duration: '14:45' }
    ]
  },
  {
    id: 'module-3',
    title: 'Advanced React Concepts',
    videos: [
      { id: '3-1', title: 'Hooks in Depth', duration: '22:15' },
      { id: '3-2', title: 'Context API', duration: '16:40' },
      { id: '3-3', title: 'Higher-Order Components', duration: '20:05' }
    ]
  }
];

export default function CourseModules() {
  return (
    <Accordion type="single" collapsible className="w-full">
      {courseModules.map((module) => (
        <AccordionItem key={module.id} value={module.id}>
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
              {module.videos.map((video) => (
                <li
                  key={video.id}
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
