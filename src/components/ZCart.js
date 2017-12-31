import React, { Component } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';
import Checkout from '../Checkout';

import './ZCart.css';

export default class ZCart extends Component {
  ////////////////////////////////////////////////
  constructor() {
    super();

    this.state = { productsList: [], productsPrice: '', productId: '' };
    // productName: '',
    // productPrice: 0

    this.totalCost = this.totalCost.bind(this);
    this.deleteFromCart = this.deleteFromCart.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3001/api/gateway_cart').then(response => {
      this.setState({
        productsList: response.data
      });
    });
  }

  totalCost = productsList => {
    let total = 0;
    for (let i = 0; i < productsList.length; i++) {
      total += productsList[i].product_price;
    }
    return total;
  };
  ////////////////////// DELETE FROM CART /////////////////////////////////

  deleteFromCart(id) {
    alert('Item removed from cart!');
    axios
      .delete('http://localhost:3001/api/item_delete/' + id)
      .then(response => {
        this.setState({
          productsList: response.data
        });
      });
  }
  ////////////////////////////////////////////////////////////////////////
  render() {
    var products = this.state.productsList.map(e => (
      <div key={e.product_name} className="cartProducts">
        <div>
          <h3>{e.product_name}</h3>
          <h3>${e.product_price}</h3>
          <hr className="cartRule" />
        </div>
        <div>
          <button
            className="cartButton"
            onClick={() => this.deleteFromCart(e.id)}
          >
            Delete Item
          </button>
        </div>
      </div>
    ));

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
              {<h3>Total: ${this.totalCost(this.state.productsList)}</h3>}
            </div>
            <div className="cartButton">
              <Checkout
                name={'Gateway Mentoring'}
                description={'Merchandise'}
                amount={this.totalCost(this.state.productsList)}
              />
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
