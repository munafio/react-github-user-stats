import React, { useState } from "react";

import useGithubStats from "react-github-user-stats";
import Stats from "./components/Stats";
import Avatar from "./components/Avatar";
import DataViewer from "./components/DataViewer";
import Navbar from "./components/Navbar";

const App = () => {
  const [username, setUsername] = useState("munafio");
  const { error, loading, userData } = useGithubStats(username);

  if (loading) return <h1>Loading data..</h1>;
  if (error) return <h1>ERROR: {error}</h1>;
  if (!userData) return <h1>Not found!</h1>;

  return (
    <div className="container">
      <Navbar onChange={(input: any) => setUsername(input)} value={username} />
      <div className="info-card">
        <Avatar user={userData} />
        <h1>
          <a className="name" href={userData.url || "#"} target="_blank">
            {userData.name}
          </a>
        </h1>
        <h2 className="username">@{userData.username}</h2>
        <Stats user={userData} />

        <p>Bio: {userData.bio || "--"}</p>
        <p>🏠 {userData.location || "--"}</p>
        <p>🚀 {userData.website || "--"}</p>
        <p>🌍 {userData.company || "--"}</p>
        <p>🐤 Twitter @{userData.twitter_username || "--"}</p>
        <p className="createdAt">
          This Github account was created at <span>{userData.created_at}</span>
        </p>
      </div>

      <DataViewer data={userData} />
    </div>
  );
};
export default App;
