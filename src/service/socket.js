import io from "socket.io-client";
import { getApiHeader } from "./auth.js";
import { callPostApi } from "./callApi.js";

export const socket = io("http://localhost:5050");

export const registerSocket = async () => {
  const res = await callPostApi(
    "api/test/socket",
    { socketid: socket.id },
    { headers: getApiHeader() }
  );
  console.log("resgisterSocket", res);
};
