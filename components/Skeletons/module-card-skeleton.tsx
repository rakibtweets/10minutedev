'use client';

import React from 'react';
import {
  Card,
  CardHeader,
  CardContent,
  CardFooter
} from '@/components/ui/card';

import { Skeleton } from '@/components/ui/skeleton';

export function ModuleCardSkeleton() {
  return (
    <div className="space-y-6">
      {[1, 2, 3].map((index) => (
        <Card key={index} className="w-full">
          <CardHeader>
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-3/4" />
              <Skeleton className="h-5 w-16" />
            </div>
            <Skeleton className="mt-2 h-4 w-full" />
          </CardHeader>
          <CardContent></CardContent>
          <CardFooter className="justify-between">
            <Skeleton className="h-9 w-32" />
            <Skeleton className="h-9 w-32" />
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
