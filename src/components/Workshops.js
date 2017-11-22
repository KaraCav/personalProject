import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';
import Appointments from './Appointments';
import './Appointments.css';
import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homeBackground">
        <Navbar />
        <Header />
        <div className="Workshop">
          <div>
            <img
              className="workshop1"
              src={require('../images/workshopFlyer.jpg')}
            />
          </div>
        </div>
      </div>
    );
  }
}
