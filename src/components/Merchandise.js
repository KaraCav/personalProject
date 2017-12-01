import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
//import Appointments from './Appointments';
import axios from 'axios';
//import './Appointments.css';
import './Homepage.css';
import './Merchandise.css';

////// making add to cart ////////////////////
// const ADD_TO_CART = 'ADD_TO_CART';
// const intialState = {
//   products,
//   productsInCart: []
// };
//////////////////////////////////////////////
export default class Merchandise extends Component {
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
        <div className="homeBackground2">
          <div className={['animated fadeInLeft', 'homepageSecond'].join(' ')}>
            <div className="motto2">
              <h1>Day Planner</h1>

              <p className="schoolStore">
                The easiest way to reach a big goal is with a series of small
                steps. This three month daily planner helps break down
                formidable tasks and keep things in focus. There are even
                special pages for our mentors to fill in suggestions and
                achievements for the week!
              </p>
              <button className="merchButton">Add to Cart</button>
            </div>
            <div>
              <img
                className="openbook1"
                src={require('../images/Planner.jpg')}
              />
            </div>
          </div>
        </div>

        <div
          className={[
            'homeBackground',
            'homepageBottom',
            'merchandiseBackground'
          ].join(' ')}
        >
          <div>
            <img
              className="openbook3"
              src={require('../images/Notepad2.jpg')}
            />
          </div>

          <div className={['notepad'].join(' ')}>
            <h1>Notepad Organizer ($3.50)</h1>
            <p className="schoolStore">
              The schoolwork organizer that can fit in your pocket! Use this to
              make notes for later, bookmark your textbooks, and keep track of
              exam dates!
            </p>
            <button className="merchButton">Add to Cart</button>
          </div>
        </div>

        <div className="homeBackground2">
          <div className={['animated fadeInLeft', 'homepageSecond'].join(' ')}>
            <div className="motto2">
              <h1>Assorted Pencils</h1>

              <p className="schoolStore">
                Brighten up your student's day with our colorful, #2 pencils.
              </p>
              <button className="merchButton">Add to Cart</button>
            </div>
            <div>
              <img
                className="openbook1"
                src={require('../images/Pencils.jpg')}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
