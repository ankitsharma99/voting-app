import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import { logout } from "../store/actions";

const NavBar = ({ auth, logout }) => (
  <div>
    <ul>
      <li>
        <Link to='/'>Home</Link>
      </li>
      <li>
        <Link to='/register'>Register</Link>
      </li>
      <li>
        <Link to='/login'>Login</Link>
      </li>
      <li>
        <Link to='/test'>Test</Link>
      </li>
      <li>
        <button onClick={logout}>Logout</button>
      </li>
    </ul>
    {auth.isAuthenticated && <p>Logged in as {auth.user.username}</p>}
  </div>
);

export default connect((store) => ({ auth: store.auth }), { logout })(NavBar);
