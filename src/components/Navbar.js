import React, { Component } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import logosx from '../images/logoxs.png';

export default class Navbar extends Component {
  render() {
    return (
      <div className="mainNav">
        <div className="centerNav">
          <h1>Gateway Mentoring</h1>
        </div>
        <div className="leftNav">
          <h3>Call Today! (518)755-6444 </h3>
          {/* <img className="logo" src={require('../images/homelogo.png')} />
          <img className="logo" src={require('../images/searchlogo.png')} /> */}
        </div>
      </div>
    );
  }
}
