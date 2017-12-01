import React, { Component } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import Tutoring from './Tutoring';
import './MentorLoggedIn.css';

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
      <div className="header" id="mentorHeader">
        <div className="logo">
          <Link to="/">
            <img src={require('../images/logoxs.png')} />
          </Link>
        </div>

        <div>
          {' '}
          <Link to="#" className="linksy">
            <h3>Email Admin</h3>
            <img className="mail" src={require('../images/email2.png')} />
          </Link>
        </div>
      </div>
    );
  }
}
