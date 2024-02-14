import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const createfromAction = createAsyncThunk(
  "loginSlices/created",
  async (formData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post(
        `http://localhost:4000/api/user/login`,
        formData
      );
      console.log("login", data);
      return data;
    } catch (error) {
      if (!error?.response) throw error;
      return rejectWithValue(error?.response?.data);
    }
  }
);

const loginSlices = createSlice({
  name: "loginSlices",
  initialState: {
    loading: false,
    isCreated: false,
    fromCreated: null,
    appErr: null,
    serverErr: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createfromAction.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(createfromAction.fulfilled, (state, action) => {
      state.fromCreated = action?.payload;
      state.loading = false;
      state.isCreated = true;
      state.appErr = null;
      state.serverErr = null;
    });
    builder.addCase(createfromAction.rejected, (state, action) => {
      state.loading = false;
      state.appErr = action?.payload?.message;
      state.serverErr = action?.error?.message;
    });
  },
});

export default loginSlices.reducer;