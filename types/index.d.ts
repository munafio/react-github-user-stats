export type UserData = {
  id: number;
  name: string;
  username: string;
  avatar_url: string | null;
  url: string | null;
  type: string;
  company: string | null;
  website: string | null;
  location: string | null;
  email: string | null;
  bio: string | null;
  twitter_username: string | null;
  public_repos: number;
  public_gists: number;
  followers: number;
  following: number;
  total_stars: number;
  total_forks: number;
  created_at: string;
  updated_at: string;
};

export type UseGithubStatsObject = {
  error: string | any;
  loading: boolean;
  userData: UserData;
};

export type UseGithubStats = (
  username: string,
  per_page: string | number
) => UseGithubStatsObject;
