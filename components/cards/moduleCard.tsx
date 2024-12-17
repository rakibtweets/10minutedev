'use client';

import React, { useState } from 'react';
import { Video, Plus, Trash2, Edit } from 'lucide-react';
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter
} from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import ModuleModal from '@/components/modals/module-modal';
import { useParams } from 'next/navigation';
import { ParamsProps } from '@/types';
import VideoModal from '@/components/modals/video-modal';

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

interface ModuleCardProps {
  modules: IModule[];
  onVideoClick: (videoId: string) => void;
  onDeleteModule: (moduleId: string) => void;
  onAddVideo: (
    moduleId: string,
    video: Omit<IVideo, '_id' | 'watchedBy'>
  ) => void;
  onEditModule: (moduleId: string, updatedModule: Partial<IModule>) => void;
}

export function ModuleCard({
  modules,
  onVideoClick,
  onDeleteModule,
  onAddVideo,
  onEditModule
}: ModuleCardProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const params = useParams<ParamsProps>();
  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value === openAccordion ? null : value);
  };

  return (
    <div className="space-y-6">
      {modules.map((module) => (
        <Card key={module._id} className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <CardTitle>
                Module {module.order} - {module.title}
              </CardTitle>
              <Badge variant="secondary">{module.duration} min</Badge>
            </div>
            <CardDescription>{module.description}</CardDescription>
          </CardHeader>
          <CardContent>
            <Accordion
              type="single"
              collapsible
              value={openAccordion ?? ''}
              onValueChange={handleAccordionChange}
            >
              <AccordionItem value={module._id}>
                <AccordionTrigger>
                  Videos ({module.videos.length})
                </AccordionTrigger>
                <AccordionContent>
                  {module.videos.length > 0 ? (
                    <div className="space-y-2">
                      {module.videos.map((video) => {
                        return (
                          <div
                            key={video._id}
                            className="flex items-center justify-between"
                          >
                            <Button
                              key={video._id}
                              variant="ghost"
                              className="flex w-full items-center justify-start gap-1"
                              onClick={() => onVideoClick(video._id)}
                            >
                              <Video className="mr-2 size-4" />
                              <span>{video.title}</span>
                              <span>({video.duration})</span>
                            </Button>
                            <div className="flex items-center">
                              <Dialog>
                                <DialogTrigger asChild>
                                  <Button
                                    title="Edit"
                                    variant="outline"
                                    className="mr-2"
                                  >
                                    <Edit className="size-4" />
                                  </Button>
                                </DialogTrigger>

                                <VideoModal
                                  type="Edit"
                                  module={module._id}
                                  videoId={video.videoId}
                                />
                              </Dialog>
                              <Button
                                variant="destructive"
                                title="delete"
                                onClick={() => onDeleteModule(module._id)}
                              >
                                <Trash2 className="size-4" />
                              </Button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <p className="text-sm text-muted-foreground">
                      No videos available
                    </p>
                  )}
                  <div className="mt-4">
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="outline" className="w-full">
                          <Plus className="mr-2 size-4" /> Add Video
                        </Button>
                      </DialogTrigger>

                      <VideoModal type="Add" />
                    </Dialog>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
          <CardFooter className="justify-between">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">
                  <Edit className="mr-2 size-4" /> Edit Module
                </Button>
              </DialogTrigger>
              <ModuleModal type="Edit" course={params?.courseId} />
            </Dialog>
            <Button
              variant="destructive"
              onClick={() => onDeleteModule(module._id)}
            >
              <Trash2 className="mr-2 size-4" /> Delete Module
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
