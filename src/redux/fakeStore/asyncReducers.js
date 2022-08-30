import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../apis/fakeStoreApi";

/**
 * fetch_Product() uses a middleware  called thunk, and gets all products from the server
 */
export const fetch_Products = createAsyncThunk("fetchProducts", async () => {
  try {
    const response = await axios.get("/products");
    return response.data;
  } catch (e) {
    console.log("Error in fetching", e.message);
  }
});

/**
 * getProductDetail() uses a middleware called thunk to get a particular product from the server by passing the product id
 */
export const getProductDetail = createAsyncThunk(
  "getProductDetail",
  async (id) => {
    try {
      const response = await axios.get(`/products/${id}`);
      return response.data;
    } catch (e) {
      console.log("Error in retrieving, ", e.message);
    }
  }
);
