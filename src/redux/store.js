import { configureStore } from "@reduxjs/toolkit";
import fakeStoreReducer from "./fakeStore/fakeStoreSlice";
import userStoreReducer from "./userStore/userStoreSlice";

export default configureStore({
  reducer: {
    fakeStore: fakeStoreReducer,
    userStore: userStoreReducer
  },
  
});
