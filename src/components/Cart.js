import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const [totalSumma, setTotalSuma] = useState(0);
  const shoppingCart = useSelector((state) => state.cartList);

  const dispatch = useDispatch();

  useEffect(() => {
    setTotalSuma(handleTotalSumma);
  }, [shoppingCart]);

  function handleRemoveProductById(id) {
    dispatch({ type: "REMOVE_PRODUCT", id: id });
  }

  function handleTotalSumma() {
    let totalSum = 0;

    shoppingCart.forEach((p) => {
      totalSum += p.price;
    });
    return totalSum;
  }

  return (
    <div>
      <h1>Shopping Cart Component</h1>
      <ul>
        {shoppingCart.map((p) => (
          <li key={p.id}>
            <div
              style={{
                display: "flex",
                height: 50,
                alignItems: "center",
                gap: 20,
                padding: "5px 0px 5px 0px",
              }}
            >
              <h2>{p.name}</h2>
              <label>Quantity:</label>
              <input type="number" />
              <button onClick={() => handleRemoveProductById(p.id)}>
                Remove
              </button>
            </div>
          </li>
        ))}
      </ul>
      <h3>Total Suma: {totalSumma}</h3>
    </div>
  );
}
