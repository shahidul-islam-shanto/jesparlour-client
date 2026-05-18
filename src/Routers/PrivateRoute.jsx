import React from "react";
import useAuth from "../hooks/useAuth";

const PrivateRoute = () => {
  const { user, loading } = useAuth();

  if (loading) {
    return <span className="loading loading-spinner loading-xl"></span>;
  }
  return <div></div>;
};

export default PrivateRoute;
