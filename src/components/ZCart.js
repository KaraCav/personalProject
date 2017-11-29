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

        <div className={['homeBackground', 'cartPic'].join(' ')}>
          <div>
            <img
              className="cartPic1"
              src={require('../images/graduation day.jpeg')}
            />
          </div>
        </div>
      </div>
    );
  }
}
