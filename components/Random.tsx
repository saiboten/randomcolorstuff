"use client";

import { useState } from "react";

export const Random: React.FC = () => {
  const [randomText, setRandomText] = useState("");

  const options: string[] = ["Gul", "Oransje", "Mørkeoransje", "Alle", "Ingen"];

  const handleClick = () => {
    const randomOption = options[Math.floor(Math.random() * options.length)];
    setRandomText(randomOption);
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <button
        onClick={handleClick}
        style={{ padding: "10px 20px", fontSize: "16px" }}
      >
        Trykk
      </button>
      {randomText && (
        <p style={{ marginTop: "20px", fontSize: "24px", fontWeight: "bold" }}>
          {randomText}
        </p>
      )}
    </div>
  );
};
