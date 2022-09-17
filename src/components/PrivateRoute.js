import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { Navigate, useLocation } from "react-router-dom";
import AuthContext from "../contexts/AuthContext";

export const PrivateRoute = () => {
  let {user} = useContext(AuthContext)
  const location = useLocation();
  const content = user ? (
    <Outlet />
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );

  return content;
};
