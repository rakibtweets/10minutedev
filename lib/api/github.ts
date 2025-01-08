import 'server-only';
import axios from 'axios';

interface GithubRepoInfo {
  starCount: number;
  repoUrl: string;
}

export async function getGithubStars(): Promise<GithubRepoInfo | null> {
  async function fetchStars() {
    'use cache';
    try {
      const response = await axios.get(
        'https://api.github.com/repos/rakibtweets/10minutedev',
        {
          headers: {
            Accept: 'application/vnd.github+json'
          }
        }
      );

      return {
        starCount: response.data.stargazers_count,
        repoUrl: response.data.html_url
      };
    } catch (error) {
      // console.error('Error fetching GitHub stars:', error);
      return null;
    }
  }

  return fetchStars();
}
