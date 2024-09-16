import React from "react";

export default function Header() {
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 60,
      }}
    >
      <h2>Sinnus Shoping Cart Web-App</h2>
      <p>🛒</p>
    </header>
  );
}
