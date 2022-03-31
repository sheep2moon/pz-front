import React from "react";
import { Navigate } from "react-router";
import { isUserLoggedIn } from "../helpers/auth";

const RequireAuth = ({ dest = "/" }, children) => {
  if (isUserLoggedIn()) {
    return <Navigate to={dest} />;
  }
  return children;
};

export default RequireAuth;
