import axios from "axios";
import { getApiHeader } from "./auth.js";

export const url = "http://localhost:3000/";

export const callPostApi = async (endpoint, data, config = {}) => {
  try {
    const res = await axios.post(url + endpoint, { ...data }, config);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const callGetApi = async (endpoint, config = {}) => {
  try {
    const res = await axios.get(url + endpoint, config);
    return res;
  } catch (error) {
    return error.response;
  }
};

export const joinTheRoom = async (code) => {
  try {
    const res = await callPostApi(
      "api/test/joinroom",
      { code },
      { headers: getApiHeader() }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const searchUsers = async (searchTerm) => {
  try {
    const res = await callPostApi(
      "api/test/searchusers",
      { searchterm: searchTerm },
      { headers: getApiHeader() }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const addToFriends = async (username) => {
  try {
    const res = await callPostApi(
      "api/test/addfriend",
      { friendname: username },
      { headers: getApiHeader() }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const showFriends = async () => {
  try {
    const res = await callGetApi("api/showfriends", {
      headers: getApiHeader(),
    });
    return res;
  } catch (error) {
    return error.response;
  }
};

export const leaveTheRoom = async (code) => {
  try {
    const res = await callPostApi(
      "api/test/leaveroom",
      { code },
      { headers: getApiHeader() }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};

export const callUpdateRoom = async (code) => {
  try {
    const res = await axios.post(
      url + "api/test/updateroom",
      { code },
      {
        headers: getApiHeader(),
      }
    );
    return res;
  } catch (error) {
    return error.response;
  }
};
