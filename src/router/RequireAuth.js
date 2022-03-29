import React from "react";
import { Navigate } from "react-router";
import { isUserLoggedIn } from "../helpers/auth";

const RequireAuth = ({ dest = "/" }) => {
  if (isUserLoggedIn()) {
    return <Navigate to={dest} />;
  } else {
    return <Navigate to="/login" />;
  }
};

export default RequireAuth;
