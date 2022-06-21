import React from "react";
import { useState } from "react";

export default function Navbar({ onChange = () => false, value }) {
  const [input, setInput] = useState(value);

  const handleInputChange = (e) => {
    setInput(e.target.value.trim());
  };

  return (
    <div className="navbar">
      <div>
        <input
          placeholder="Enter Github username"
          onChange={handleInputChange}
          value={input}
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            onChange(input);
          }}
        >
          fetch
        </button>
      </div>

      <div>
        <a href="https://github.com/munafio/react-github-user-stats">
          View on Github
        </a>
      </div>
    </div>
  );
}
