import React, { Component } from 'react';
import './Appointments.css';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  updateFirstName,
  updateLastName,
  updateAgeGrouping
} from '../ducks/reducer';
import axios from 'axios';

class Appointments extends Component {
  constructor() {
    super();

    this.state = {};
  }

  // componentDidMount() {
  //   console.log(this.props.firstName, this.props.lastName);
  // }

  // reqAppt() {
  //   axios.post('/api/appts', {
  //     student_name: this.props.firstName,
  //     parent_name: this.props.lastName
  //   });
  // }

  render() {
    return (
      <div>
        <button onClick={this.reqAppt}>SEND TO MY GODDAMN SERVER</button>

        <div className="edit-container">
          <p>Student's First Name</p>
          <input
            type="text"
            onChange={e => this.props.updateFirstName(e.target.value)}
          />
          <p>Parent/ Contact Person's Full Name</p>
          <input
            type="text"
            onChange={e => this.props.updateLastName(e.target.value)}
          />

          <h3>Age Grouping</h3>
          <select onChange={e => this.props.updateAgeGrouping(e.target.value)}>
            <option value="Select">Please Select</option>

            <option value="Elementary">Elementary</option>
            <option value="Junior High">Junior High</option>
            <option value="High School">High School</option>
            <option value="College Prep">College Prep</option>
            <option value="College Courses">College Courses</option>
          </select>
          <hr />
          <h2>Availability</h2>
          <div className="availibility">
            <h3 className="days">Weekdays AM</h3>
            <input type="checkbox" />
            <h3 className="days">Weekdays PM</h3>
            <input type="checkbox" />
            <h3 className="days">Saturdays</h3>
            <input type="checkbox" />
            <h3 className="days">Sundays</h3>
            <input type="checkbox" />
          </div>
          <hr />
          <select>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { firstName, lastName, ageGrouping } = state;
  return {
    firstName,
    lastName,
    ageGrouping
  };
}

export default connect(mapStateToProps, {
  updateFirstName,
  updateLastName,
  updateAgeGrouping
})(Appointments);
