import React from "react";
import { connect } from "react-redux";
import { Routes, Route, withRouter } from "react-router-dom";

import AuthPage from "../pages/AuthPage";

const RouteViews = ({ auth }) => (
  <main>
    <Routes>
      <Route
        exact
        path='/login'
        element={
          <AuthPage authType='login' isAuthenticated={auth.isAuthenticated} />
        }
      />
      <Route
        exact
        path='/register'
        element={
          <AuthPage
            authType='register'
            isAuthenticated={auth.isAuthenticated}
          />
        }
      />
    </Routes>
  </main>
);

export default connect((store) => ({ auth: store.auth }))(RouteViews);
