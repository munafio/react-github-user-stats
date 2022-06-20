import { useEffect, useState } from "react";

function useGithubStats(username: string, per_page: string = "1000") {
  const URI = `https://api.github.com/users/${username}`;

  const [loading, setLoading] = useState(false);
  const [totalStars, setTotalStars] = useState(0);
  const [userData, setUserData] = useState(null);

  /**
   * Get User's total stars of all time.
   *
   */
  const getUserTotalStars = () => {
    setLoading(true);
    fetch(`${URI}/repos?per_page=${per_page}`)
      .then((response) => {
        response.json().then((data) => {
          const stars = data.reduce((prev: any, curr: any) => {
            if (curr.fork) return 0;
            return prev + curr.stargazers_count;
          }, 0);
          setTotalStars(stars);
          setLoading(false);
        });
      })
      .catch((err) => {
        if (err || err.status === 404) {
          setLoading(false);
        }
      });
  };

  /**
   * Get User's data.
   *
   */
  const getUserData = () => {
    setLoading(true);
    fetch(`${URI}`)
      .then((response) => {
        response.json().then((data) => {
          setUserData(data);
          setLoading(false);
        });
      })
      .catch((err) => {
        if (err || err.status === 404) {
          setLoading(false);
        }
      });
  };

  useEffect(() => {
    getUserTotalStars();
    getUserData();
  }, []);

  return { loading, totalStars, userData };
}

export default useGithubStats;
