'use client';

import React, { useState } from 'react';
import { Video, Plus, Edit } from 'lucide-react';
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
import { IModule } from '@/types';
import VideoModal from '@/components/modals/video-modal';
import DeleteModuleButton from '../buttons/DeleteModuleButton';
import DeleteVideoButton from '../buttons/DeleteVideoButton';

interface ModuleCardProps {
  modules: IModule[] | undefined;
  courseId?: string | string;
}

export function ModuleCard({ modules, courseId }: ModuleCardProps) {
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const handleAccordionChange = (value: string) => {
    setOpenAccordion(value === openAccordion ? null : value);
  };

  return (
    <div className="space-y-6">
      {modules && modules?.length > 0 ? (
        modules.map((module: IModule) => (
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
                <AccordionItem value={module?._id}>
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
                                // onClick={() => onVideoClick(video._id)}
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
                                    course={module.course}
                                    video={video}
                                  />
                                </Dialog>
                                <DeleteVideoButton videoId={video._id} />
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

                        <VideoModal
                          type="Add"
                          module={module._id}
                          course={module.course}
                        />
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
                <ModuleModal type="Edit" module={module} />
              </Dialog>
              <DeleteModuleButton moduleId={module._id} />
            </CardFooter>
          </Card>
        ))
      ) : (
        <p className="flex h-[30vh] items-center justify-center text-center text-3xl text-muted-foreground">
          No modules available
        </p>
      )}
    </div>
  );
}
