import { configureStore } from "@reduxjs/toolkit";
import signSlices from "../slices/signSlices";
import loginSlices from "../slices/loginSlices";
import bookingSlices from "../slices/bookingSlices";


const store = configureStore({
  reducer: {
    signSlices,
    loginSlices,
    bookingSlices
  },
});

export default store;
