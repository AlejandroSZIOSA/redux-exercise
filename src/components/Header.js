import React from "react";
import { useSelector } from "react-redux";

export default function Header() {
  const totalProducts = useSelector(
    (state) => state.SHOPPING_CART_GLOBAL_INFO.totalProducts
  );
  return (
    <header
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 60,
      }}
    >
      <h2>Sinnus Shopping Cart Web-App</h2>
      <p>🛒 : {totalProducts}</p>
    </header>
  );
}
