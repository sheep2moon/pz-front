import axios from "axios";

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
