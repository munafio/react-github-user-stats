# react-github-user-stats

>

[![NPM](https://img.shields.io/npm/v/react-github-user-stats.svg)](https://www.npmjs.com/package/react-github-user-stats) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

<center>
<img src="/assets/demo-image.png">
</center>

This simple npm package provides you an easy way to get Github user's stats using React Hooks.

## Demo

[Click here](https://munafio.github.io/react-github-user-stats/)

## Install

```bash
npm install --save react-github-user-stats
```

## Usage

```tsx
import * as React from "react";
import useGithubStats from "react-github-user-stats";

const Example = () => {
  const { error, loading, userData } = useGithubStats("munafio");

  if (loading) return <h1>Loading data..</h1>;
  if (error) return <h1>ERROR: {error}</h1>;
  if (!userData) return <h1>Not found!</h1>;

  return (
    <div>
      <pre>{JSON.stringify(userData, null, 2)}</pre>
    </div>
  );
};
```

Do not forget to replace `munafio` with the username you want.

## Sample

The `userData` returned from this hook contains props as the below sample shows:

```json
{
  "data": {
    "id": 20261627,
    "name": "Munaf Aqeel Mahdi",
    "username": "munafio",
    "avatar_url": "https://avatars.githubusercontent.com/u/20261627?v=4",
    "url": "https://github.com/munafio",
    "type": "User",
    "company": "Full-Stack Web Developer",
    "website": "munafio.com",
    "location": "Babil ⇄ Iraq",
    "email": null,
    "bio": null,
    "twitter_username": "munafiofficial",
    "public_repos": 19,
    "public_gists": 1,
    "followers": 242,
    "following": 5,
    "total_stars": 1775,
    "total_forks": 462,
    "created_at": "2016-07-03T01:06:30Z",
    "updated_at": "2022-06-12T12:11:17Z"
  }
}
```

## License

MIT © [munafio](https://github.com/munafio)
