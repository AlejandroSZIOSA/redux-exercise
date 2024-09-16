import PRODUCTS_JSON from "../JSON/sinusApiData.json";
import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState = {
  productList: PRODUCTS_JSON,
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

const shoppingCartSlice = createSlice({
  name: "shoppingCartGlobalInfo",
  initialState: initialStateShoppingCart,
  reducers: {
    CHANGE_TOTAL_PRODUCTS_SHOPPING_CART(state, action) {
      state.totalProducts = action.payload;
    },
  },
});

//3 Passing multiple slices to the store "Reducers"
const store = configureStore({
  reducer: {
    PRODUCTS: productsSlice.reducer,
    SHOPPING_CART_GLOBAL_INFO: shoppingCartSlice.reducer,
  },
});

//1 separate slices "Actions"
export const productsActions = productsSlice.actions;
//2 separate slices "Actions"
export const shoppingCartActions = shoppingCartSlice.actions;

export default store;
