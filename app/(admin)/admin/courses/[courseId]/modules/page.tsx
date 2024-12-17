'use client';

import React, { useState } from 'react';

import { toast } from '@/components/ui/use-toast';
import { ModuleCard } from '@/components/cards/moduleCard';
import { Button } from '@/components/ui/button';
import ModuleModal from '@/components/modals/module-modal';
import { Dialog, DialogTrigger } from '@radix-ui/react-dialog';
import { useParams } from 'next/navigation';
import { ParamsProps } from '@/types';

interface IVideo {
  _id: string;
  title: string;
  description?: string;
  videoId: string;
  module: string;
  duration: number;
  order: number;
  watchedBy: string[];
}

interface IModule {
  _id: string;
  title: string;
  description: string;
  course: string;
  videos: IVideo[];
  order: number;
  duration: number;
}

// Dummy data matching the provided schema
const initialModules: IModule[] = [
  {
    _id: '1',
    title: 'Introduction to React',
    description: 'Learn the basics of React and its core concepts',
    course: '101',
    videos: [
      {
        _id: 'v1',
        title: 'What is React?',
        description: 'An overview of React',
        videoId: 'abc123',
        module: '1',
        duration: 10,
        order: 1,
        watchedBy: []
      },
      {
        _id: 'v2',
        title: 'Setting up a React project',
        description: 'Step-by-step guide to set up a React project',
        videoId: 'def456',
        module: '1',
        duration: 15,
        order: 2,
        watchedBy: []
      },
      {
        _id: 'v3',
        title: 'Components and Props',
        description: 'Understanding React components and props',
        videoId: 'ghi789',
        module: '1',
        duration: 20,
        order: 3,
        watchedBy: []
      }
    ],
    order: 1,
    duration: 45
  },
  {
    _id: '2',
    title: 'State and Lifecycle',
    description: 'Understand how to manage state and component lifecycle',
    course: '101',
    videos: [
      {
        _id: 'v4',
        title: 'Introduction to State',
        description: 'Understanding state in React',
        videoId: 'jkl012',
        module: '2',
        duration: 12,
        order: 1,
        watchedBy: []
      },
      {
        _id: 'v5',
        title: 'useState Hook',
        description: 'Using the useState hook',
        videoId: 'mno345',
        module: '2',
        duration: 18,
        order: 2,
        watchedBy: []
      },
      {
        _id: 'v6',
        title: 'useEffect Hook',
        description: 'Understanding and using the useEffect hook',
        videoId: 'pqr678',
        module: '2',
        duration: 22,
        order: 3,
        watchedBy: []
      }
    ],
    order: 2,
    duration: 52
  },
  {
    _id: '3',
    title: 'Advanced React Patterns',
    description: 'Explore advanced React patterns and techniques',
    course: '101',
    videos: [
      {
        _id: 'v7',
        title: 'Render Props',
        description: 'Understanding and implementing render props',
        videoId: 'stu901',
        module: '3',
        duration: 25,
        order: 1,
        watchedBy: []
      },
      {
        _id: 'v8',
        title: 'Higher-Order Components',
        description: 'Creating and using Higher-Order Components',
        videoId: 'vwx234',
        module: '3',
        duration: 30,
        order: 2,
        watchedBy: []
      },
      {
        _id: 'v9',
        title: 'Custom Hooks',
        description: 'Creating and using custom hooks',
        videoId: 'yz567',
        module: '3',
        duration: 28,
        order: 3,
        watchedBy: []
      }
    ],
    order: 3,
    duration: 83
  }
];

const CourseModulesPage = () => {
  const [modules, setModules] = useState(initialModules);
  const params = useParams<ParamsProps>();

  const handleVideoClick = (videoId: string) => {
    toast({
      title: 'Video Clicked',
      description: `You clicked on video with ID: ${videoId}`
    });
  };

  const handleDeleteModule = (moduleId: string) => {
    setModules(modules.filter((module) => module._id !== moduleId));
    toast({
      title: 'Module Deleted',
      description: `You deleted module with ID: ${moduleId}`,
      variant: 'destructive'
    });
  };

  const handleAddVideo = (
    moduleId: string,
    video: Omit<IVideo, '_id' | 'watchedBy'>
  ) => {
    setModules(
      modules.map((module) => {
        if (module._id === moduleId) {
          const newVideo: IVideo = {
            ...video,
            _id: `v${Date.now()}`,
            watchedBy: []
          };
          return {
            ...module,
            videos: [...module.videos, newVideo],
            duration: module.duration + video.duration
          };
        }
        return module;
      })
    );
    toast({
      title: 'Video Added',
      description: `You added a new video "${video.title}" to module ${moduleId}`
    });
  };

  const handleEditModule = (
    moduleId: string,
    updatedModule: Partial<IModule>
  ) => {
    setModules(
      modules.map((module) =>
        module._id === moduleId ? { ...module, ...updatedModule } : module
      )
    );
    toast({
      title: 'Module Updated',
      description: `You updated module with ID: ${moduleId}`
    });
  };

  return (
    <div className="container mx-auto p-4">
      <div className="mb-4 flex flex-col gap-2 md:flex-row md:items-center md:justify-between md:gap-0">
        <h1 className="mb-5 text-2xl font-bold">Course Modules</h1>
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="default">Add Module</Button>
          </DialogTrigger>
          <ModuleModal type="Add" course={params?.courseId} />
        </Dialog>
      </div>
      <ModuleCard
        modules={modules}
        onVideoClick={handleVideoClick}
        onDeleteModule={handleDeleteModule}
        onAddVideo={handleAddVideo}
        onEditModule={handleEditModule}
      />
    </div>
  );
};
export default CourseModulesPage;
