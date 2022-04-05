import React from "react";
import { Routes, Route } from "react-router-dom";
import Auth from "../components/Auth";

const RouteViews = (props) => (
  <main>
    <Routes>
      <Route exact path='/login' element={<Auth authType='login' />} />
      <Route exact path='/register' element={<Auth authType='register' />} />
    </Routes>
  </main>
);

export default RouteViews;
