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
