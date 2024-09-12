import { createStore } from "redux";
import productsJson from "../JSON/sinusApiData.json";

const initialValuesProducts = productsJson;

const productsReducer = (
  state = {
    productList: initialValuesProducts,
    cartList: [],
    totalSuma: 0,
  },
  action
) => {
  if (action.type === "ADD_PRODUCT") {
    return {
      ...state, // Copy existing state
      cartList: [...state.cartList, action.product], // Create a new array with the new product
    };
  }

  if (action.type === "REMOVE_PRODUCT") {
    return {
      ...state, // Copy the existing state
      cartList: state.cartList.filter((product) => product.id !== action.id),
    };
  }

  if (action.type === "TOTAL_SUMA") {
    return {
      productList: state.productList, //holds the values of the Product List
      cartList: state.cartList, //holds the values of the cart
      totalSuma: action.suma,
    };
  }

  return state;
};

const store = createStore(productsReducer);

export default store;
