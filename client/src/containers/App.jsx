import React, { Component, Fragment } from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import decode from "jwt-decode";

import { setToken } from "../services/api";
import { store } from "../store";
import { setCurrentUser } from "../store/actions/auth";
import { addError } from "../store/actions/error";
import RouteViews from "./RouteViews";
import NavBar from "./NavBar";

// import api from "../services/api";

if (localStorage.jwtToken) {
  setToken(localStorage.jwtToken);
  try {
    store.dispatch(setCurrentUser(decode(localStorage.jwtToken)));
  } catch (err) {
    store.dispatch(setCurrentUser({}));
    store.dispatch(addError(err));
  }
}

const App = () => (
  <Provider store={store}>
    <Router>
      <Fragment>
        <NavBar />
        <RouteViews />
      </Fragment>
    </Router>
  </Provider>
);

export default App;
