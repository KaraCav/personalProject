import React, { Component } from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './MentorLoggedIn.css';
import MentorHeader from './MentorHeader';

export default class MentorLoggedIn extends Component {
  //////////
  constructor() {
    super();

    this.state = {
      apptsList: [],
      student_name: '',
      appt_date: '',
      appt_time: '',
      hours: 0
    };
  }
  componentWillMount() {
    axios.get('http://localhost:3001/api/appts').then(response => {
      console.log('response here:', response.data);
      this.setState({
        apptsList: response.data
      });
    });
  }
  //////////
  render() {
    // ============================================ //
    var appointments = this.state.apptsList.map((e, index) => (
      <div key={index}>
        <div>
          <h3>{e.student_name}</h3>
          <div className="dateTime">
            <h3>{e.appt_date} a</h3>
            <h3>t {e.appt_time}</h3>{' '}
          </div>
          <h3>Hours: {e.hours}</h3>
          <hr className="cartRule" />
        </div>
        <div>
          {/* <button
            className="cartButton"
            onClick={() => this.deleteFromCart(e.id)}
          >
            Add Appt
          </button> */}
        </div>
      </div>
    ));
    // ============================================ //

    return (
      <div>
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

          {/* <div className="homeBackground2"> */}
          <div>
            <div className="mentormotto2">
              <h1>Weekly Appointments</h1>
              <div>{appointments}</div>

              <button>Add note</button>
              <input type="text" />
            </div>
          </div>
          {/* </div> */}
          {/* <div id="motto">
            <h1>My Calendar</h1>
          </div> */}
        </div>
        {/* <div className="homeBackground2">
          <div>
            <div className="mentormotto2">
              <h1>Student List</h1>
              <div>{appointments}</div>

              <button>Add note</button>
              <input type="text" />
            </div>
          </div>
        </div> */}

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
