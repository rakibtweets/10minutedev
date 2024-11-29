'use client';

import React, { useState, useRef } from 'react';
import { Input } from '@/components/ui/input';
import Image from 'next/image';

interface ImageUploadProps {
  onChange: (file: File | null) => void;
  value: string;
}

export function ImageUpload({ onChange, value }: ImageUploadProps) {
  const [preview, setPreview] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    handleButtonClick();
    const file = event.target.files?.[0] || null;
    onChange(file);

    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    } else {
      setPreview(null);
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <div className="space-y-4">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          ref={fileInputRef}
        />
      </div>

      {preview && (
        <div className="relative h-36 w-64">
          <Image
            src={preview}
            alt="Cover image preview"
            fill
            className="rounded-md object-cover"
          />
        </div>
      )}
    </div>
  );
}
