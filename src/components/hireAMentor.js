import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './zzCssPractice.css';
import './hireAMentor.css';

export default class Workshops extends Component {
  constructor() {
    super();

    this.state = { productsList: [], productId: '' };
  }

  componentWillMount() {
    var numberOfProducts = [];
    axios.get('http://localhost:3001/api/gateway_cart').then(response => {
      this.setState({
        productsList: response.data
      });
      numberOfProducts = response.data.length;
    });
    return numberOfProducts;
  }

  render() {
    // var shoppingCart = function() {
    //   var obj = {},
    //     items = [];

    return (
      <div>
        <Navbar />
        <Header />
        <div className="workshop">
          <div>
            <img
              className={['animated fadeInLeft', 'birdPic'].join(' ')}
              src={require('../images/chaffinch.jpg')}
            />
          </div>
          <div
            className={['animated fadeInRight', 'workshopMainText'].join(' ')}
          >
            <form>
              <h2>Interested in learning more?</h2>
              <label className="form">
                Your Name:
                <input type="text" name="name" className="inputForm" />
              </label>
              <hr />
              <label className="form">
                Email:
                <input type="text" name="name" className="inputForm" />
              </label>
              <hr />
              <label className="form">
                I am looking for help with:
                <input type="text" name="name" className="inputForm" />
              </label>
              <input className="merchButton" type="submit" value="Submit" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}
