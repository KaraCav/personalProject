import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Appointments from './Appointments';
import Tutoring from './Tutoring';

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
      <div className="header">
        <div className="logo">
          <Link to="/">
            <img src={require('../images/logoxs.png')} />
          </Link>
        </div>
        <div>
          <Link to="/Workshops">
            <h3>Workshops</h3>
          </Link>
        </div>
        <div>
          <Link to="/Tutoring">
            <h3>Tutoring</h3>
          </Link>
        </div>
        <div>
          <Link to="/merchandise">
            <h3>Merchandise</h3>
          </Link>
        </div>
        <div>
          <Link to="/appointments">
            <h3>New to us? Click here!</h3>
          </Link>
        </div>
        <div>
          <button className="loginButton" onClick={this.handleLogin}>
            {' '}
            Mentor Login{' '}
          </button>
        </div>
      </div>
    );
  }
}
