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
          <Link className="third after" to="/Workshops">
            <span>Workshops</span>
          </Link>
        </div>
        <div>
          <Link className="third after" to="/Tutoring">
            <span>Tutoring</span>
          </Link>
        </div>
        <div>
          <Link className="third after" to="/merchandise">
            <span>Merchandise</span>
          </Link>
        </div>
        <div>
          <Link className="third after" to="/appointments">
            <span className="cartLogo">
              <img
                className="smallLogo"
                src={require('../images/cuteCart.png')}
              />
            </span>
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
