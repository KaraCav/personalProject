import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import axios from 'axios';
import './ZCart.css';
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
    axios.get('http://api/products').then(response => {
      console.log('response here ', response);
      this.setState({
        productsList: response.data
      });
    });
  }

  addToCart(name, price) {
    alert('Item added to cart!');

    this.setState({ productName: name, productPrice: price });
    axios.post('http://api/cart', {
      product_name: name,
      product_price: parseInt(price)
    });
  }

  //  addToCart() {
  //    axios.post('/cart', {});
  //  }

  render() {
    var products = this.state.productsList.map(function(product, index) {
      return (
        <div className={['animated fadeInRight', 'zTestPage'].join(' ')}>
          <div className="productDiv">
            <h1>{product.name}</h1>
            <p>${product.price}</p>
            <p className="schoolStore">{product.description}</p>
            <div
              style={{
                background: `url(${product.image_url})`,
                height: 200,
                width: 'auto',
                backgroundPosition: 'center',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat'
              }}
              className="product-img"
            />
            <button
              className="merchButton"
              onClick={() => this.addToCart(product.name, product.price)}
            >
              Add to Cart
            </button>
            <hr />
          </div>
        </div>
      );
    }, this);

    return (
      <div className="homeBackground">
        <Navbar />
        <Header />
        <div
          className={[
            'animated fadeInRight',
            'homepageSecond',
            'myTestPageMain'
          ].join(' ')}
        >
          <div>
            <div>
              <img
                className="openbook4"
                src={require('../images/elementaryKids.jpg')}
              />
            </div>
          </div>

          <div className="testMotto">
            <h1>Gateway School Store</h1>
            <h2>Get some swag!</h2>
            <p className="schoolStore">
              Gateway is a proud contributer to Boston area schools. Every
              dollar you spend puts supplies in the hands of local kids and
              makes their schoolyear and future brighter.
            </p>
          </div>
        </div>
        {products}
      </div>
    );
  }
}
