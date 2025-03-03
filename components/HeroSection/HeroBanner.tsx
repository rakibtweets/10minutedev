import { cn } from '@/lib/utils';
import { StarIcon } from 'lucide-react';
import { buttonVariants } from '../ui/button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

import {
  PageHeader,
  PageHeaderHeading,
  PageHeaderDescription,
  PageActions
} from './HeroSection';
import { getGithubStars } from '@/lib/api/github';

const HeroBanner = async () => {
  const github = await getGithubStars();
  return (
    <PageHeader
      as="section"
      className="mx-auto items-center gap-2 text-center"
      withPadding
    >
      <Link
        href={github?.repoUrl || 'https://github.com/rakibtweets/10minutedev'}
        target="_blank"
        rel="noreferrer"
        className="animate-fade-up"
        style={{ animationDelay: '0.10s', animationFillMode: 'both' }}
      >
        <Badge
          aria-hidden="true"
          variant="secondary"
          className="rounded-full px-3.5 py-1.5"
        >
          <StarIcon className="mr-2 size-4" aria-hidden="true" />
          {github?.starCount} stars on GitHub
        </Badge>
      </Link>
      <PageHeaderHeading
        className="animate-fade-up"
        style={{ animationDelay: '0.20s', animationFillMode: 'both' }}
      >
        Free Learing Source for Developers
      </PageHeaderHeading>
      <PageHeaderDescription
        className="max-w-[46.875rem] animate-fade-up"
        style={{ animationDelay: '0.30s', animationFillMode: 'both' }}
      >
        An open-source platform to make your development journey easy. Master
        the skills to become a developer with{' '}
        <span className="inline-block font-bold ">
          10minute<span className="text-orange-500">Dev</span>
        </span>
      </PageHeaderDescription>
      <PageActions
        className="animate-fade-up"
        style={{ animationDelay: '0.40s', animationFillMode: 'both' }}
      >
        <Link href="/courses" className={cn(buttonVariants())}>
          Start learning
        </Link>
        {/* <Link
          href="/dashboard/stores"
          className={cn(buttonVariants({ variant: 'outline' }))}
        >
          Sell now
        </Link> */}
      </PageActions>
    </PageHeader>
  );
};
export default HeroBanner;
