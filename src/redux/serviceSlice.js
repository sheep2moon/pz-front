import { createSlice } from "@reduxjs/toolkit";

export const serviceSlice = createSlice({
  name: "loading",
  initialState: {
    loading: false,
    connection: false,
    invite: {},
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setConnection: (state, action) => {
      state.connection = action.payload;
    },
    setInvite: (state, action) => {
      state.invite = action.payload;
    },
  },
});

export const { setLoading, setConnection, setInvite } = serviceSlice.actions;

export default serviceSlice.reducer;
