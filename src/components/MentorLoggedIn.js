import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Appointments from './Appointments';
import './MentorLoggedIn.css';
import MentorHeader from './MentorHeader';

export default class MentorLoggedIn extends Component {
  render() {
    return (
      <div className="homeBackground">
        <MentorHeader />
        <div className={['animated fadeInRight', 'homepageFirst'].join(' ')}>
          <div>
            <div>
              <img
                className="openbook1"
                src={require('../images/writing.jpg')}
              />
            </div>
          </div>

          <div id="motto">
            <h1>My Calendar</h1>
          </div>
        </div>
        <div className="homeBackground2">
          <div>
            <div className="motto2">
              <h1>Student List</h1>

              <p>
                Pull the signed-in tutor's students list and map through
                <br />
                Name : Age Group <br />
                List notes for each student<br />
                Add goals or notes for each student here
              </p>
              <button>Add note</button>
              <input type="text" />
            </div>
          </div>
        </div>

        <div className="mentorBottomDiv">
          <h1>
            Gateway is nothing without its passionate mentors. <br />THANK YOU
            for all that you do!
          </h1>
        </div>
      </div>
    );
  }
}
