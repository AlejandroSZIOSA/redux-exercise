import PRODUCTS_JSON from "../JSON/sinusApiData.json";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productListJson: PRODUCTS_JSON,
  cartList: [],
  totalSuma: 0,
};

//Testing multiple slices
const initialStateShoppingCart = {
  totalProducts: 0,
};

//Using keywords payload
const productsSlice = createSlice({
  name: "products",
  initialState: initialState,
  reducers: {
    ADD_PRODUCT(state, action) {
      // Mutating the array directly
      state.cartList.push(action.payload);
    },

    REMOVE_PRODUCT(state, action) {
      // Mutating the array directly
      const index = state.cartList.findIndex((p) => p.id === action.payload);
      if (index !== -1) state.cartList.splice(index, 1);
    },

    CHANGE_QUANTITY(state, action) {
      // Mutating the array directly
      const { id } = action.payload.p;
      let newQuantity = action.payload.newQuantity;
      const existingProduct = state.cartList.find((p) => p.id === id);
      if (existingProduct) {
        existingProduct.quantity = newQuantity;
      }
    },

    CHANGE_TOTAL_SUMMA(state, action) {
      state.totalSuma = action.payload.totalSuma;
    },
  },
});

const shoppingCartSlice = {
  name: "shoppingCartGlobalInfo",
  initialState: initialStateShoppingCart,

  reducers: {
    CHANGE_TOTAL_PRODUCTS_SHOPPING_CART(state, action) {
      state.totalProducts = action.payload;
    },
  },
};

const store = configureStore({ reducer: productsSlice.reducer });

export const productsSliceActions = productsSlice.actions;

export default store;
