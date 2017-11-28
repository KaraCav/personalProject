import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import axios from 'axios';

////// making add to cart ////////////////////
// const ADD_TO_CART = 'ADD_TO_CART';
// const intialState = {
//   products,
//   productsInCart: []
// };
//////////////////////////////////////////////
export default class ZTestPage extends Component {
  constructor() {
    super();

    this.state = {
      productsList: [],
      productName: '',
      productPrice: 0
    };
    this.addToCart = this.addToCart.bind(this);
  }

  componentWillMount() {
    axios.get('http://localhost:3001/api/products').then(response => {
      this.setState({
        productsList: response.data
      });
    });
  }

  addToCart(name, price) {
    this.setState({ productName: name, productPrice: price });
    axios.post('/cart', {
      name: this.state.productName,
      price: this.state.productPrice
    });
  }

  //  addToCart() {
  //    axios.post('/cart', {});
  //  }

  render() {
    var products = this.state.productsList.map(function(product, index) {
      return (
        <div className={['animated fadeInRight', 'homepageFirst'].join(' ')}>
          <div id="motto2">
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p className="schoolStore">{product.description}</p>
            <div
              style={{ background: `url(${product.image_url})` }}
              className="product-img"
            />
            <button
              className="merchButton"
              onClick={() => this.addToCart(product.name, product.price)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      );
    }, this);

    return (
      <div className="homeBackground">
        <Navbar />
        <Header />
        <div className={['animated fadeInRight', 'homepageSecond'].join(' ')}>
          <div>
            <div>
              <img
                className="openbook4"
                src={require('../images/elementaryKids.jpg')}
              />
            </div>
          </div>

          <div id="motto">
            <h1>Gateway School Store</h1>
            <h2>Get some swag!</h2>
            <p className="schoolStore">
              Gateway is a proud contributer to Boston area schools. Every
              dollar you spend puts supplies in the hands of local kids and
              makes their schoolyear and future brighter.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
