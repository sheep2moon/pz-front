import { createSlice } from "@reduxjs/toolkit";

export const loadingSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
    connection: false,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setConnection: (state, action) => {
      state.connection = action.payload;
    },
  },
});

export const { setLoading, setConnection } = loadingSlice.actions;

export default loadingSlice.reducer;
