import React from "react";
import { Navigate, Outlet } from "react-router";
import { isUserLoggedIn } from "../service/auth";

const RequireAuth = () => {
  if (!isUserLoggedIn()) {
    return <Navigate to="/login" />;
  }
  return <Outlet />;
};

export default RequireAuth;
