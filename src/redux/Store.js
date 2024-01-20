import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "./slices/CartSlice";

export const store = configureStore({
  reducer: {
    // key : value
    // in key we write the name of the slice
    // & in value we write the name of the reducer which is CartSlice
    cart: CartSlice,
  },
});
