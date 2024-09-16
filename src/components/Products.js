import React from "react";

import { useSelector, useDispatch } from "react-redux";
import { productsSliceActions } from "../tools/store";

function ProductCardView(props) {
  const { name, price } = props.productInfo;
  return (
    <div style={{ display: "flex", gap: 20, padding: "5px 0px 5px 0px" }}>
      <p>{name}</p>
      <p>Price: {price}</p>
      <button onClick={() => props.handleAddProduct(props.productInfo)}>
        Add to Cart
      </button>
    </div>
  );
}

export default function Products() {
  const products = useSelector((state) => state.initialValuesProducts); //1-Retrieve product list

  const dispatch = useDispatch(); //2-Dispatch Actions

  //Add new Product to the shopping cart List
  //Callback FN with Params Object

  console.log(products);

  function handleAddProduct(p) {
    const productCartInfo = {
      id: p.id,
      name: p.name,
      price: p.price,
      quantity: 0, //Add quantity
    };
    dispatch({
      type: "ADD_PRODUCT",
      product: productCartInfo,
    });
  }

  return (
    <div>
      <h1>Product Component</h1>
      <ul>
        {products.map((p) => (
          <li key={p.id}>
            <ProductCardView
              productInfo={p}
              handleAddProduct={handleAddProduct}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
