import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';
import Appointments from './Appointments';
import './ZCart.css';

export default class ZCart extends Component {
  render() {
    return (
      <div className="homeBackground">
        <Navbar />
        <Header />
        <div className="myCartMain">
          <div className="myCart">
            <h2>My Cart</h2>
          </div>
          <hr className="rule" />

          <div>
            <h3>Cart Displayed</h3>
            <p>cart items.map into > li > </p>
            <button>Delete Item</button>
          </div>
        </div>

        <div className={['homeBackground', 'homepageBottom'].join(' ')}>
          <div>
            <img
              className="openbook2"
              src={require('../images/firework.jpg')}
            />
          </div>

          <div className="motto3">
            <h1>Ready to ignite that spark?</h1>
            <p>
              Developing a passion for learning doesn't have to be a struggle.
              Let us know how we can help you or your loved one to get excited
              about learning!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
