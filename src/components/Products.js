import { useState, useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { productsActions, shoppingCartActions } from "../tools/store";

//Component
function ProductCardView(props) {
  const { name, price } = props.productInfo;
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  return (
    <div style={{ display: "flex", gap: 20, padding: "5px 0px 5px 0px" }}>
      <p>Product: {name}</p>
      <p>Price: {price}</p>
      <button
        /* Calling multiple functions */
        onClick={() => {
          props.handleAddProduct(props.productInfo);
          setIsBtnDisabled(true);
        }}
        disabled={isBtnDisabled}
      >
        Add to Cart
      </button>
    </div>
  );
}

//Component
export default function Products() {
  const products = useSelector((state) => state.PRODUCTS.productList); //1-Retrieve product list
  const shoppingCart = useSelector((state) => state.PRODUCTS.cartList);

  /*   console.log(shoppingCart.length); */
  const dispatch = useDispatch(); //2-Dispatch Actions

  //Fix problem
  useEffect(() => {
    dispatch(
      shoppingCartActions.CHANGE_TOTAL_PRODUCTS_SHOPPING_CART(
        shoppingCart.length
      )
    );
  }, [handleAddProduct]);

  //Callback FN
  function handleAddProduct(p) {
    const productCartInfo = {
      id: p.id,
      name: p.name,
      price: p.price,
      quantity: 0, //Add quantity
    };
    dispatch(productsActions.ADD_PRODUCT(productCartInfo));
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
