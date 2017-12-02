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
    this.updateStudentName = this.updateStudentName.bind(this);
    this.updateApptDate = this.updateApptDate.bind(this);
    this.updateApptTime = this.updateApptTime.bind(this);
    this.updateHours = this.updateHours.bind(this);
  }
  componentWillMount() {
    axios.get('http://localhost:3001/api/appts').then(response => {
      console.log('response here:', response.data);
      this.setState({
        apptsList: response.data
      });
    });
  }
  addAppt(name, date, time, hours) {
    // this.setState({
    //   student_name: name,
    //   appt_date: date,
    //   appt_time: time,
    //   hours: hours
    // });
    axios.post('http://localhost:3001/api/addAppt', {
      student_name: this.state.student_name,
      appt_date: this.state.appt_date,
      appt_time: this.state.appt_time,
      hours: this.state.hours
    });
  }

  updateStudentName(userInput) {
    this.setState({ student_name: userInput });
    console.log(this.state.student_name);
  }

  updateApptDate(userInput) {
    this.setState({ appt_date: userInput });
    console.log(this.state.appt_date);
  }
  updateApptTime(userInput) {
    this.setState({ appt_time: userInput });
    console.log(this.state.appt_time);
  }
  updateHours(userInput) {
    this.setState({ hours: userInput });
    console.log(this.setState.hours);
  }

  //////////
  render() {
    // ============================================ //
    var appointments = this.state.apptsList.map((e, index) => (
      <div key={index}>
        <div>
          <hr className="cartRule" />
          <h3>{e.student_name}</h3>
          <div className="dateTime">
            <h3>{e.appt_date} a</h3>
            <h3>t {e.appt_time}</h3>{' '}
          </div>
          <h3>Hours: {e.hours}</h3>
        </div>
        <div />
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

            <div>
              <div className="addAppointment">
                <p>Student Name</p>
                <input
                  type="text"
                  onChange={e => this.updateStudentName(e.target.value)}
                />
                <p>Appointment Date</p>
                <input
                  type="date"
                  onChange={e => this.updateApptDate(e.target.value)}
                />
                <p>Appointment Time</p>
                <input
                  type="text"
                  onChange={e => this.updateApptTime(e.target.value)}
                />
                <p>Expected Hours</p>
                <input
                  type="text"
                  onChange={e => this.updateHours(e.target.value)}
                />
              </div>
              <button
                className="apptButton"
                onClick={() =>
                  this.addAppt(
                    this.student_name,
                    this.state.appt_date,
                    this.state.appt_time,
                    this.state.hours
                  )
                }
              >
                Add Appointment
              </button>
            </div>
          </div>
          <div>
            <div className="mentormotto2">
              <h1>Weekly Appointments</h1>
              <div>{appointments}</div>
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
