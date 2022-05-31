import { configureStore } from "@reduxjs/toolkit";
import serviceSlice from "./serviceSlice.js";
import roomSlice from "./roomSlice.js";
import userSlice from "./userSlice.js";

export default configureStore({
  reducer: {
    user: userSlice,
    room: roomSlice,
    service: serviceSlice,
  },
});
