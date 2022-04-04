import React, { Component } from "react";
import decode from "jwt-decode";

import Auth from "../components/Auth";
import ErrorMessage from "../components/ErrorMessage";
import { Provider } from "react-redux";
import { setToken } from "../services/api";
import { store } from "../store";
import { setCurrentUser } from "../store/actions/auth";
import { addError } from "../store/actions/error";
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
    <div>
      <Auth authType={"login"} />
      <ErrorMessage />
    </div>
  </Provider>
);

export default App;