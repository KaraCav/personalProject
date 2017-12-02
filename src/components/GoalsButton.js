import React, { Component } from 'react';
import './Appointments.css';
import Header from './Header';
import { Link } from 'react-router-dom';

export default class Appointments extends Component {
  render() {
    return (
      <div>
        <div className="edit-container">
          <p>First Name</p>
          <input
            type="text"
            onChange={e => this.props.updateFirstName(e.target.value)}
          />
          <p>Last Name</p>
          <input
            type="text"
            onChange={e => this.props.updateLastName(e.target.value)}
          />
          <p>Gender</p>
          <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Gender-Fluid">Gender-Fluid</option>
            <option value="Robot">Robot</option>
          </select>
          <p>Eye Color</p>
          <select>
            <option value="Brown">Brown</option>
            <option value="Blue">Blue</option>
            <option value="Green">Green</option>
          </select>
        </div>
        <button
          onClick={console.log(this.props.firstName + this.props.lastName)}
        >
          Update
        </button>
      </div>
    );
  }
}
