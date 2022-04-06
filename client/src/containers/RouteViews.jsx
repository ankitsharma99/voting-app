import React from "react";
import { connect } from "react-redux";
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
  useParams,
} from "react-router-dom";

import AuthPage from "../pages/AuthPage";
import TestPage from "../pages/TestPage";

function withRouter(Component) {
  function ComponentWithRouterProp(props) {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
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
      <Route exact path="/test" element={<TestPage />}/>
    </Routes>
  </main>
);

export default withRouter(
  connect((store) => ({ auth: store.auth }))(RouteViews)
);
