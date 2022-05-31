import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiHeader } from "../service/auth.js";
import { callGetApi } from "../service/callApi.js";

export const fetchUserData = createAsyncThunk("api/user", async (ThunkApi) => {
  const res = await callGetApi("api/test/user", { headers: getApiHeader() });
  if (res.status === 200) return res.data;
  else return { error: { status: res.status, message: "api/test/user error" } };
});

export const userSlice = createSlice({
  name: "user",
  initialState: {
    id: "",
    username: "",
    email: "",
    picture: "",
    playlists: [],
    rooms: [],
    friends: [],
  },
  reducers: {
    addPlaylist: (state, action) => {
      state.playlists.push(action.payload);
    },
    addRoom: (state, action) => {
      state.rooms.push(action.payload);
    },
    removePlaylist: (state, action) => {
      state.playlists = state.playlists.filter(
        (playlist) => playlist.id !== action.payload
      );
    },
    changeUsername: (state, action) => {
      state.username = action.payload;
    },
    changePicture: (state, action) => {
      state.picture = action.payload;
    },
    updateFriends: (state, action) => {
      state.friends = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUserData.fulfilled, (state, action) => {
        const data = action.payload;
        console.log("builder: ", data);
        if (data.message) console.log(data.message);
        else {
          state.id = data.id;
          state.username = data.username;
          state.email = data.email;
          state.picture = data.picture;
          state.playlists = data.playlists;
          state.rooms = data.rooms;
        }
      })
      .addCase(fetchUserData.rejected, (state, action) => {
        console.log("redux fetch data rejected");
      });
  },
});

export const {
  addPlaylist,
  addRoom,
  removePlaylist,
  changeUsername,
  changePicture,
  updateFriends,
} = userSlice.actions;
export default userSlice.reducer;
