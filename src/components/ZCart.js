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

    this.state = {
      productsList: [],
      productsPrice: ''
      // productName: '',
      // productPrice: 0
    };

    // this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3001/api/gateway_cart').then(response => {
      this.setState({
        productsList: response.data
      });
    });
  }

  // addToCart(name, price) {
  //   console.log(name, price);
  //   this.setState({
  //     productName: name,
  //     productPrice: price
  //   });
  deleteFromCart(name, price) {
    this.setState({
      // productsList: productsList
    });
  }
  //   axios.post('http://localhost:3001/api/cart', {
  //     product_name: name,
  //     product_price: parseInt(price)
  //   });
  // }
  ///////////////////////////////////////////////////////////
  render() {
    const products = this.state.productsList.map(e => (
      <div className="cartProducts">
        <div>
          <h3>{e.product_name}</h3>
          <h3>${e.product_price}</h3>
          <hr className="cartRule" />
        </div>
        <div>
          <button
            className="cartButton"
            //onClick={() => this.addToCart(product.name, product.price)}
          >
            Delete Item
          </button>
        </div>
      </div>
    ));
    //////////////////////////// TOTAL ////////////////////////////
    const total = function(product_price) {};

    //////////////////////////// TOTAL ////////////////////////////

    return (
      <div className="cartBackground">
        <Navbar />
        <Header />
        <div className="myCartMain">
          <div className="myCart">
            <h2>My Cart</h2>
          </div>
          <hr className="rule" />

          <div>{products}</div>
          <div className="checkoutButton">
            <div>
              <h3>Total: </h3>{' '}
            </div>
            <div>
              {' '}
              <button className="cartButton">Pay Now</button>
            </div>
          </div>
        </div>

        <div className={['cartBackground', 'cartPic'].join(' ')}>
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
