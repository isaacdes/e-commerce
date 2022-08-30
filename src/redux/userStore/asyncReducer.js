import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "../../apis/reqresApi";

/**
 * LoginApi uses a middleware called thunk to login a user by sending a post request to the server
 */
export const LoginApi = createAsyncThunk("LoginUser", async (data) => {
  try {
    const response = await axios.post("/api/login", data);
    // console.log("rs", response.data);
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    return {
      success: false,
      data: e.message,
    };
  }
});

/**
 * RegisterApi uses a middleware called thunk to register a user by sending a post request to the server
 */
export const RegisterApi = createAsyncThunk("RegisterUser", async (data) => {
  try {
    const response = await axios.post("/api/register", data);
    return {
      success: true,
      data: response.data,
    };
  } catch (e) {
    return {
      success: false,
      data: e.message,
    };
  }
});
