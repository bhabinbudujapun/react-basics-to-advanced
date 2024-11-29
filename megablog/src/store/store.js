import { configureState } from "@reduxjs/toolkit";
import authSlice from "./authSlice";

const store = configureState({
  reducer: { authSlice },
});

export default store;
