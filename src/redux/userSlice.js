import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getApiHeader } from "../helpers/auth.js";
import { callGetApi } from "../helpers/callApi.js";

export const fetchUserData = createAsyncThunk("api/user", async (ThunkApi) => {
  console.log("redux");
  const res = await callGetApi("api/test/user", { headers: getApiHeader() });
  console.log(res);
  return res.data;
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
  },
  reducers: {
    // updateUser: (state, action) => {
    //   const data = action.payload;
    //   console.log("userSlice.js", data);
    //   if (data) {
    //     state.avatarImg = data?.avatarImg;
    //     state.playlists = data?.playlists;
    //     state.rooms = data?.rooms;
    //   }
    // },
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
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUserData.fulfilled, (state, action) => {
      const data = action.payload;
      console.log(action.payload);
      if (data) {
        state.id = data.id;
        state.username = data.username;
        state.email = data.email;
        state.picture = data.picture;
        state.playlists = data.playlists;
        state.rooms = data.rooms;
      }
    });
  },
});

export const {
  addPlaylist,
  addRoom,
  removePlaylist,
  changeUsername,
  changePicture,
} = userSlice.actions;
export default userSlice.reducer;
