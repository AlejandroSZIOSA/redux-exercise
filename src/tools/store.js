import { createStore } from "redux";
import productsJson from "../JSON/sinusApiData.json";

const initialValuesProducts = productsJson;

const productsReducer = (
  state = {
    productList: initialValuesProducts,
    cartList: [],
    cartTotalSuma: 0,
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

  return state;
};

const store = createStore(productsReducer);

export default store;
