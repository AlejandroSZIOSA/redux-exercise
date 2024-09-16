//import { createStore } from "redux";
import productsJson from "../JSON/sinusApiData.json";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  initialValuesProducts: productsJson,
  cartList: [],
  totalSuma: 0,
};

const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    GET_PRODUCT_LIST_FN(state) {
      return state.initialValuesProducts;
    },

    /* ADD_PRODUCT_FN(state) {
      return { ...state, cartList: [...state.cartList, action.product] };
    }, */
  },
});

/* const productsReducer = (
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

  if (action.type === "CHANGE_QUANTITY") {
    return {
      ...state, // Copy existing state
      cartList: state.cartList.map(
        (p) =>
          p.id === action.payload.id // Check if the product matches the given id
            ? { ...p, ...(p.quantity = action.payload.newQuantity) } // Update the product with new data
            : p // Keep the other products unchanged
      ),
    };
  }

  return state;
}; */

const store = configureStore({ reducer: productsSlice.reducer });

export const productsSliceActions = productsSlice.actions;

export default store;
