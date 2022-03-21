import axios from "axios";

const url = "http://localhost:3000/api/";

export const callApi = async (endpoint, data) => {
  try {
    const res = await axios.post(url + endpoint, { ...data });
    return res;
  } catch (error) {
    return error.response;
  }
};
