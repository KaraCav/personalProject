import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Homepage from './components/Homepage';
import Router from './Router';
import Checkout from './Checkout';

import Goals from './components/Goals.json';
import logo from './logo.svg';
import NewClient from './components/NewClient';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props: ', props);
  }

  render() {
    return (
      <div className="App">
        {/* <div>
          <div>
            <Link to="/">Home</Link>
            <Link to="/About">About</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div> */}
        <Router />
      </div>
    );
  }
}
export default App;
