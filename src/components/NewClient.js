import React, { Component } from 'react';
import './NewClient.css';
import Header from './Header';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Appointments from './Appointments';

export default class NewClient extends Component {
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <div className="newClientDiv">
          <div>
            <h2>Information</h2>
            <p>Lots of info here for new students! So interesting!</p>
            <h3>Sound good? Of course it does!</h3>
            <p>
              Lots of info here for new students! So interesting! SO MUCH
              information that your head can't handle it! Heads exploding left
              and right! Where can I buy your amazing tutoring skills? I will
              sell my first born for this!{' '}
            </p>
          </div>
        </div>

        <Appointments />
      </div>
    );
  }
}
