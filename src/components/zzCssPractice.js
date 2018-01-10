import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './zzCssPractice.css';

export default class Workshops extends Component {
  constructor() {
    super();

    this.state = { productsList: [], productId: '' };
  }

  componentWillMount() {
    var numberOfProducts = [];
    axios.get('http://api/gateway_cart').then(response => {
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
        <div>
          <div>
            <img
              className={['animated fadeInLeft', 'birdPic'].join(' ')}
              src={require('../images/chaffinch.jpg')}
            />
          </div>
          <div
            className={[
              'animated fadeInRight',
              'workshopMainText',
              'practice'
            ].join(' ')}
          >
            <h1>
              You may have seen our new <br />fliers around town!
            </h1>
            <h3>
              Gateway Mentoring is expanding- and as we grow, we develop more
              programs to keep students on track.{' '}
            </h3>

            <br />
            <p>
              You don't need to be a current student to attend a workshop or the
              risk-free trial class.
            </p>
            <div className="circle">cart</div>
          </div>
        </div>
      </div>
    );
  }
}
