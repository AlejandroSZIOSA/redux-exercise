import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Cart() {
  const shoppingCart = useSelector((state) => state.cartList);
  const totalSumma = useSelector((state) => state.totalSuma);
  const dispatch = useDispatch();

  useEffect(() => {
    handleTotalSumma();
    /* console.log(totalSumma); */
  }, [shoppingCart]);

  function handleRemoveProductById(id) {
    dispatch({ type: "REMOVE_PRODUCT", id: id });
  }

  function handleTotalSumma() {
    let totalSuma = 0;
    shoppingCart.forEach((p) => {
      totalSuma += p.price;
    });
    dispatch({ type: "TOTAL_SUMA", suma: totalSuma });
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
