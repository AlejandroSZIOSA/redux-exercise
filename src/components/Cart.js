import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { productsActions } from "../tools/store";

export default function Cart() {
  const shoppingCart = useSelector((state) => state.PRODUCTS.cartList);
  const totalSumma = useSelector((state) => state.PRODUCTS.totalSuma);
  const dispatch = useDispatch();

  useEffect(() => {
    handleTotalSumma();
  }, [shoppingCart]);

  function handleRemoveProductById(id) {
    dispatch(productsActions.REMOVE_PRODUCT(id));
  }

  function handleTotalSumma() {
    let totalSuma = 0;
    shoppingCart.forEach((p) => {
      totalSuma += p.price;
    });
    dispatch(productsActions.CHANGE_TOTAL_SUMMA({ totalSuma }));
  }

  //FIX:IF MULTIPLE VALUES, payload must be an object
  function handleQuantityProduct(p, newQuantity) {
    dispatch(productsActions.CHANGE_QUANTITY({ p, newQuantity }));
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
              <p>{p.quantity}</p>
              <label>Quantity:</label>
              <input
                type="number"
                onChange={(e) => handleQuantityProduct(p, e.target.value)}
              />
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
