import React, { Component } from "react";
import { connect } from "react-redux";

import { authUser, logout } from "../store/actions";

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit(e) {
    const { username, password } = this.state;
    const { authType } = this.props;

    e.preventDefault();

    this.props.authUser(authType || "login", { username, password });
  }

  render() {
    const { username, password } = this.state;

    return (
      <div>
        <form className='form' onSubmit={this.handleSubmit}>
          <label htmlFor='username' className="form-label">username</label>
          <input
            className='form-input'
            type='text'
            value={username}
            name='username'
            autoComplete='off'
            onChange={this.handleChange}
          />

          <label htmlFor='password' className="form-label">password</label>
          <input
            className='form-input'
            type='password'
            value={password}
            name='password'
            autoComplete='off'
            onChange={this.handleChange}
          />
          <div className='button_center'>
            <button className='button' type='submit'>
              Submit
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default connect(() => ({}), { authUser, logout })(Auth);
