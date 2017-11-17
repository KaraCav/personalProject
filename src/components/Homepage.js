import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Appointments from './Appointments';
import './Appointments.css';
import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homeBackground">
        <Navbar />
        <Header />
        <div className={['animated lightSpeedIn', 'openbook2'].join(' ')}>
          <div>
            <img
              className="openbook2"
              src={require('../images/openbook.jpg')}
            />
          </div>
        </div>
        <h1>HomePage!</h1>
      </div>
    );
  }
}
