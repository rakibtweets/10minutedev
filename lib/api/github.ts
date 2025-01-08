import 'server-only';

import { unstable_cache as cache } from 'next/cache';

export async function getGithubStars() {
  return await cache(
    async () => {
      const response = await fetch(
        'https://api.github.com/repos/rakibtweets/10minutedev',
        {
          headers: {
            Accept: 'application/vnd.github+json'
          },
          next: {
            revalidate: 60
          }
        }
      );

      if (!response.ok) {
        return null;
      }

      const data = (await response.json()) as {
        stargazers_count: number;
        html_url: string;
      };

      return {
        starCount: data.stargazers_count,
        repoUrl: data.html_url
      };
    },
    ['github-stars'],
    {
      revalidate: 900,
      tags: ['github-stars']
    }
  )();
}
