import React from "react";
import { Navigate } from "react-router-dom";


import Auth from "../components/Auth";
import ErrorMessage from "../components/ErrorMessage";

const AuthPage = ({ authType, isAuthenticated }) => {
  if (isAuthenticated) return <Navigate to='/' />;

  return (
    <div>
      <ErrorMessage />
      <Auth authType={authType} />
    </div>
  );
};

export default AuthPage;
