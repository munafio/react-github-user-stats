import { useEffect, useState } from "react";
import { UseGithubStats, UserData } from "../../types";
import {
  getUserProfileData,
  getUserTotalForks,
  getUserTotalStars,
} from "../Api";

function useGithubStats(username: string, per_page: number | string = 100) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [userData, setUserData] = useState<UserData | null>(null);

  const getUserData = async () => {
    if (!username) {
      setError("Missing parameter `username` on `useGithubStats` hook!");
      return;
    }
    setLoading(true);
    try {
      const data = await getUserProfileData(username);
      const stars = await getUserTotalStars(username, per_page);
      const forks = await getUserTotalForks(username, per_page);

      setUserData({
        id: data?.id,
        name: data?.name,
        username,
        avatar_url: data?.avatar_url,
        url: data?.html_url,
        type: data?.type,
        company: data?.company,
        website: data?.blog,
        location: data?.location,
        email: data?.email,
        bio: data?.bio,
        twitter_username: data?.twitter_username,
        public_repos: data?.public_repos,
        public_gists: data?.public_gists,
        followers: data?.followers,
        following: data?.following,
        total_stars: stars,
        total_forks: forks,
        created_at: data?.created_at,
        updated_at: data?.updated_at,
      });
    } catch (e) {
      const error: any = e;
      console.log(error);
      setError(error?.message || "An error occurred while fetching user' data");
    }
    setLoading(false);
  };

  useEffect(() => {
    getUserData();
  }, [username, per_page]);

  return { error, loading, userData } as UseGithubStats;
}

export default useGithubStats;
