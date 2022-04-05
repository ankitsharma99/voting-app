import React from "react";
import { connect } from "react-redux";
import { Routes, Route } from "react-router-dom";
import { useLocation, useNavigate, useParams } from "react-router-dom";

import AuthPage from "../pages/AuthPage";


function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return (
      <Component
        {...props}
        router={{ location, navigate, params }}
      />
    );
  }

  return ComponentWithRouterProp;
}

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

export default withRouter(connect((store) => ({ auth: store.auth }))(RouteViews));
