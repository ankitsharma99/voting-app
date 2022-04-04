import React, { Component } from "react";
import { Provider } from "react-redux";

import api from "../services/api";

import {store} from '../store';

const App = () => (
  <Provider store={store}>
    <div>App is working</div>
  </Provider>
);

export default App;
