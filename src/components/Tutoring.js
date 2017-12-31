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
        <div className="homeBackground2">
          <div className={['animated fadeInLeft', 'homepageSecond'].join(' ')}>
            <div className="motto2">
              <h1>Tutoring for Students of All Ages</h1>

              <p className="raleway">
                From pre-K to post-graduate, our tutors are experienced and
                highly knowledgable. For some, success is rooted in education,
                meaning a child who completes advanced degrees has achieved
                success. For others, practical life skills take precedence. Can
                my child do well for herself? Can she balance a checkbook, write
                up a sound resume, and think critically about her goals?
              </p>
              <p className="raleway">
                ​ Our mentoring services are meant to recognize and fill in any
                gaps in knowledge a student may have. We offer a holistic,
                individualized approach to learning that can benefit anyone. Our
                services range from job search assistance, to college transition
                help, to tutoring services for students with a particular
                academic struggle.
              </p>
            </div>
            <div>
              <img
                className="openbook1"
                src={require('../images/eye-for-ebony-.jpg')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
