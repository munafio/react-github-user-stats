import React from "react";

export default function Avatar({ user }: any) {
  return (
    <div
      className="avatar"
      style={{
        background: `url(${user.avatar_url}) center center no-repeat`,
        backgroundSize: "cover",
      }}
    ></div>
  );
}
