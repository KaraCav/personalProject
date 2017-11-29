import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';
import Appointments from './Appointments';
import './ZCart.css';

export default class ZCart extends Component {
  ////////////////////////////////////////////////
  constructor() {
    super();

    this.state = { productsList: [], productName: '', productPrice: 0 };
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3001/api/products').then(response => {
      this.setState({
        productsList: response.data
      });
    });
  }

  //Help me understand why this shit is happening!!

  addToCart(name, price) {
    console.log(name, price);
    ///Right here!@!!!@!@!
    //Hi Andy, it`s your buddy!
    this.setState({
      productName: name,
      productPrice: price
    });
    axios.post('http://localhost:3001/api/cart', {
      product_name: name,
      product_price: parseInt(price)
    });
  }
  ///////////////////////////////////////////////////////////
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
