import React from "react";

export default function Stats({ user }: any) {
  return (
    <div className="stats">
      <div>
        <h1>{user.followers}</h1>
        <h3>Followers</h3>
      </div>
      <div>
        <h1>{user.following}</h1>
        <h3>Following</h3>
      </div>
      <div>
        <h1>{user.public_gists}</h1>
        <h3>Gists</h3>
      </div>
      <div>
        <h1>{user.public_repos}</h1>
        <h3>Repos</h3>
      </div>
      <div>
        <h1>{user.total_stars}</h1>
        <h3>Stars</h3>
      </div>
      <div>
        <h1>{user.total_forks}</h1>
        <h3>Forks</h3>
      </div>
    </div>
  );
}
