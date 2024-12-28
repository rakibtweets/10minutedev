'use client';
import { tags } from '@/constants';
import { Button } from '../ui/button';
import { useRouter, useSearchParams } from 'next/navigation';
import { useState } from 'react';
import { formUrlQuery } from '@/lib/utils';

const FilterCourseButton = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [active, setActive] = useState('');

  const handleTypeClick = (item: string) => {
    if (active === item) {
      setActive('');

      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'tag',
        value: null
      });
      router.push(newUrl, { scroll: false });
    } else {
      setActive(item);
      const newUrl = formUrlQuery({
        params: searchParams.toString(),
        key: 'tag',
        value: item.toLowerCase()
      });
      router.push(newUrl, { scroll: false });
    }
  };
  return (
    <div className="flex flex-wrap items-center gap-2 pb-2">
      {tags.map((tag) => (
        <Button
          key={tag.value}
          onClick={() => {}}
          size={'sm'}
          variant="secondary"
          className={`${active === tag.value ? 'bg-green-500/60 hover:bg-green-500/80' : 'hover:bg-secondary-foreground/10'} text-sm`}
          onClickCapture={() => handleTypeClick(tag.value)}
        >
          {tag.label}
        </Button>
      ))}
    </div>
  );
};
export default FilterCourseButton;
