import React, { Component } from 'react';
import Header from './Header';
import axios from 'axios';
import './Tutoring.css';

export default class Tutoring extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="tutorImage">
          <img
            className="tutoringPic"
            src={require('../images/tutoring.jpg')}
          />
          <h2 className="tutoringH2">Tutoring!</h2>
        </div>
      </div>
    );
  }
}
