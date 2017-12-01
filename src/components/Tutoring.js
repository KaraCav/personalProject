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
          <h2 className="tutoringH2">Tutoring Services</h2>
          <div className={['animated fadeInDownBig', 'tutoringP'].join(' ')}>
            <h2>A Variety of Resources for Varying Needs</h2>
            <p className="Raleway">
              At Gateway Mentoring, we understand that every student is coming
              from a different place in their learning. Our mentoring services
              are meant to recognize and fill in any gaps in knowledge a student
              may have. We offer a holistic, individualized approach to learning
              that can benefit anyone. Our services range from job search
              assistance, to college transition help, to tutoring services for
              students with a particular academic struggle.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
