import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiHeader } from "../service/auth.js";
import { callGetApi, callUpdateRoom } from "../service/callApi.js";

export const updateRoomData = createAsyncThunk(
  "api/room",
  async (roomCode, ThunkApi) => {
    const res = await callUpdateRoom(roomCode);
    console.log("redux", res);
    return res.data;
  }
);

export const roomSlice = createSlice({
  name: "room",
  initialState: {
    name: "",
    members: [],
    playlist: {},
    accessCode: "",
  },
  reducers: {
    updateRoom: (state, action) => {
      state.name = action.payload.name;
      state.members = action.payload.members;
      state.playlist = action.payload.playlist;
    },
    updateAccessCode: (state, action) => {
      state.accessCode = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(updateRoomData.fulfilled, (state, action) => {
      const data = action.payload;
      state.name = data.name;
      state.members = data.members;
      state.playlist = data.playlist;
    });
  },
});

export const { updateRoom, updateAccessCode } = roomSlice.actions;

export default roomSlice.reducer;
