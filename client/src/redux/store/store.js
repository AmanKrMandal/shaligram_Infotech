import { configureStore } from "@reduxjs/toolkit";
import signSlices from "../slices/signSlices"
const store = configureStore({
  reducer: {
    signSlices
  },
});

export default store;
