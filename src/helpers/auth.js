import { callApi } from "./callApi.js";

const logout = () => {
  localStorage.removeItem("user");
};

const getApiHeader = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) return { "x-access-token": user.accessToken };
  else return {};
};
