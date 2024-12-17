'use client';

import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Image from 'next/image';

interface ImageDropzoneProps {
  preview: string | null;
  onDrop: (files: File[]) => void;
  onClear: () => void;
  error?: string;
}

export function ImageDropzone({
  preview,
  onDrop,
  onClear,
  error
}: ImageDropzoneProps) {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.gif']
    },
    maxFiles: 1
  });

  return (
    <div
      {...getRootProps()}
      className={cn(
        'border-2 border-dashed rounded-lg p-8 text-center cursor-pointer transition-colors',
        isDragActive ? 'border-primary bg-primary/5' : 'border-border',
        preview ? 'border-success' : '',
        error && 'border-destructive'
      )}
    >
      <input {...getInputProps()} />
      {preview ? (
        <div className="relative">
          <Image
            src={preview}
            alt="Preview"
            width={300}
            height={200}
            className="mx-auto max-h-64 rounded-lg"
          />
          <Button
            type="button"
            variant="destructive"
            size="icon"
            className="absolute right-2 top-2"
            onClick={(e) => {
              e.stopPropagation();
              onClear();
            }}
          >
            <X className="size-4" />
          </Button>
        </div>
      ) : (
        <div className="space-y-2">
          <Upload className="mx-auto size-10 text-muted-foreground" />
          <p className="text-sm text-muted-foreground">
            Drag & drop an image here, or click to select
          </p>
        </div>
      )}
      {error && <p className="mt-2 text-sm text-destructive">{error}</p>}
    </div>
  );
}
