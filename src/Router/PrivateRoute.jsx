import React, { use } from "react";
import { AuthContext } from "../Context/AuthContext";
import { Navigate } from "react-router";
import Animation from "../utility/Animation";

const PrivateRoute = ({ children }) => {
  const { user, loading } = use(AuthContext);
  if (loading) {
    return <Animation />;
  }
  if (!user) {
    return <Navigate state={location?.pathname} to={"/login"}></Navigate>;
  }
  return children;
};

export default PrivateRoute;
