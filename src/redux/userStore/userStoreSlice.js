import { createSlice } from "@reduxjs/toolkit";
import { LoginApi, RegisterApi } from "./asyncReducer";

const initialState = {
  userIsLogged: false,
  token: "",
};

/**
 * userStoreSlice is used to initialize the redux state for the user
 */
export const userStoreSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    /**
     * LogoutUSer sets the userIsLogged to false and also resets the token
     * @param {} state 
     */
    logoutUser: (state) => {
      state.userIsLogged = false;
      state.token = "";
    },
  },
  extraReducers(builder) {
    builder.addCase(LoginApi.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.userIsLogged = true;
        state.token = action.payload.data;
      } else {
        state.userIsLogged = false;
        state.token = "";
      }
    });

    builder.addCase(RegisterApi.fulfilled, (state, action) => {
      if (action.payload.success) {
        state.userIsLogged = true;
        state.token = action.payload.data;
      } else {
        state.userIsLogged = false;
        state.token = "";
      }
    });
  },
});

export const { logoutUser } = userStoreSlice.actions;

export default userStoreSlice.reducer;
