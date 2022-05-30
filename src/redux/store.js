import { configureStore } from "@reduxjs/toolkit";
import loadingSlice from "./loadingSlice.js";
import roomSlice from "./roomSlice.js";
import userSlice from "./userSlice.js";

export default configureStore({
  reducer: {
    user: userSlice,
    room: roomSlice,
    loading: loadingSlice,
  },
});
