/**
 * Github base uri.
 *
 */
export const GITHUB_URI = `https://api.github.com/users`;

/**
 * Get User's total stars of all time.
 *
 * @param {string} username
 * @param {number | string} per_page
 * @returns {Promise<number>}
 */
export const getUserTotalStars = (
  username: string,
  per_page: number | string = 100
): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    fetch(`${GITHUB_URI}/${username}/repos?per_page=${per_page}`)
      .then((response) => {
        response.json().then((data) => {
          if (!data) reject("Data not found!");
          const stars = data.reduce((prev: any, curr: any) => {
            return prev + curr.stargazers_count;
          }, 0);
          resolve(stars);
        });
      })
      .catch(reject);
  });
};

/**
 * Get User's total forks of all time.
 *
 * @param {string} username
 * @param {number | string} per_page
 * @returns {Promise<number>}
 */
export const getUserTotalForks = (
  username: string,
  per_page: number | string = 100
): Promise<number> => {
  return new Promise<number>((resolve, reject) => {
    fetch(`${GITHUB_URI}/${username}/repos?per_page=${per_page}`)
      .then((response) => {
        response.json().then((data) => {
          if (!data) reject("Data not found!");
          const forks = data.reduce((prev: any, curr: any) => {
            return prev + curr.forks;
          }, 0);
          resolve(forks);
        });
      })
      .catch(reject);
  });
};

/**
 * Get User's github profile data.
 *
 * @param {string} username
 * @returns {Promise<any>}
 */
export const getUserProfileData = (username: string) => {
  return new Promise<any>((resolve, reject) => {
    fetch(`${GITHUB_URI}/${username}`)
      .then((response) => {
        response.json().then((data) => {
          resolve(data);
        });
      })
      .catch(reject);
  });
};
