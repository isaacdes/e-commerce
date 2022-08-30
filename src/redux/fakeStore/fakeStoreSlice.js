import { createSlice } from "@reduxjs/toolkit";
import { fetch_Products, getProductDetail } from "./asyncReducers";

const initialState = {
  products: [],
  cart: [],
  total: 0,
};

/**
 * fakeStoreSlice is  used to initialize the redux state for fakeStore
 */
export const fakeStoreSlice = createSlice({
  name: "fakeStore",
  initialState,
  reducers: {
    /**
     * addToCart first checks if the product is already in the cart,
     * if yes then it only increases its quantity by 1
     * else it adds the new product to the existing cart state
     * @param {*} state
     * @param {*} action
     */
    addToCart: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      if (existingProduct) {
        existingProduct.quantity += 1;
      } else {
        state.cart = [{ ...action.payload }, ...state.cart];
      }
    },

    /**
     * chnageQuantity first finds the peoduct in the cart and then updates its quantity
     * @param {*} state
     * @param {*} action
     */
    changeQuantity: (state, action) => {
      const existingProduct = state.cart.find(
        (product) => product.id === action.payload.id
      );
      existingProduct.quantity = action.payload.quantity;
    },

    /**
     * removeFromCart remove the entire product from the cart 
     * @param {*} state 
     * @param {*} action 
     */
    removeFromCart: (state, action) => {
      state.cart = state.cart.filter((prod) => prod.id !== action.payload);
    },

    /**
     * calculateTotal updates the total cost of all the products in the cart
     * @param {*} state 
     */
    calculateTotal: (state) => {
      let total = 0;
      state.cart.forEach((product) => {
        total += product.price * product.quantity;
      });

      state.total = total.toFixed(2);
    },

    /**
     * clearState clears the products and cart as empty array,
     * this is mostly used during logout
     * @param {} state 
     */
    clearState: (state) => {
      state.cart = [];
      state.products = [];
    },

    /**
     * clearCart clears the cart as empty array,
     * this is used while placing the order
     * @param {*} state 
     */
    clearCart: (state) => {
      state.cart = [];
    },
  },
  extraReducers(builder) {
    builder
      .addCase(fetch_Products.fulfilled, (state, action) => {
        state.products = action.payload;
      })
      .addCase(getProductDetail.fulfilled, (state, action) => {
        state.selectedProduct = action.payload;
      });
  },
});

export const {
  addToCart,
  changeQuantity,
  removeFromCart,
  calculateTotal,
  clearState,
  clearCart,
} = fakeStoreSlice.actions;

export default fakeStoreSlice.reducer;
