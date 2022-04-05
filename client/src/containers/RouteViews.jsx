import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../components/Auth";

const RouteViews = () => (
  <main>
    <Routes>
      <Route
        path='/login'
        render={() => {
          <Auth authType='login' />;
        }}
      />
      <Route
        path='/register'
        render={() => {
          <Auth authType='register' />;
        }}
      />
      
    </Routes>
  </main>
);

export default RouteViews;
