import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Appointments from './Appointments';

export default class Header extends Component {
  constructor() {
    super();

    this.state = {};

    this.handleLogin = this.handleLogin.bind(this);
  }

  handleLogin() {
    window.location.href = 'http://localhost:3001/login';
  }

  render() {
    return (
      <div>
        <div className="logo">
          <Link to="/">
            <img src={require('../images/logoxs.png')} />
          </Link>
          <Link to="/appointments">
            <img src={require('../images/logoxs.png')} />
          </Link>

          <button onClick={this.handleLogin}> Login </button>
        </div>
      </div>
    );
  }
}
