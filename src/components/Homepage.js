import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';

import './Homepage.css';

export default class Homepage extends Component {
  render() {
    return (
      <div className="homeBackground">
        <Navbar />
        <Header />
        <div className={['animated fadeInRight', 'homepageFirst'].join(' ')}>
          <div>
            <div>
              <img
                className="openbook1"
                src={require('../images/openbook.jpg')}
              />
            </div>
          </div>

          <div className="newmotto">
            <h1>Welcome to Gateway Mentoring!</h1>

            <h2>Unlocking Potential in Every Student</h2>
            <h4 className="raleway">Feel free to follow us on: </h4>
            <Link to="/facebook">
              <img
                className="smallLogo"
                src={require('../images/facebook_logo.png')}
              />
            </Link>
            <Link to="/instagram">
              <img
                className="smallLogo"
                src={require('../images/Instagram-logo.png')}
              />
            </Link>
            <Link to="/pinterest">
              <img
                className="smallLogo"
                src={require('../images/pinterestlogo.png')}
              />
            </Link>
          </div>
        </div>
        <div className="homeBackground2">
          <div className={['animated fadeInLeft', 'homepageSecond'].join(' ')}>
            <div className="motto2">
              <h1>How do you define success?</h1>

              <p className="raleway">
                Ask five people, and chances are good that you will end up with
                ten different answers. For some, success is rooted in education,
                meaning a child who completes advanced degrees has achieved
                success. For others, practical life skills take precedence. Can
                my child do well for herself? Can she balance a checkbook, write
                up a sound resume, and think critically about her goals?
              </p>
              <p className="raleway">
                ​ Our mentoring services are meant to recognize and fill in any
                gaps in knowledge a student may have. We offer a holistic,
                individualized approach to learning that can benefit anyone. Our
                services range from job search assistance, to college transition
                help, to tutoring services for students with a particular
                academic struggle.
              </p>
            </div>
            <div>
              <img
                className="openbook1"
                src={require('../images/girlwithbinder.jpg')}
              />
            </div>
          </div>
        </div>

        <div className={['homeBackground', 'homepageBottom'].join(' ')}>
          <div>
            <img
              className="openbook2"
              src={require('../images/firework.jpg')}
            />
          </div>

          <div className="motto3">
            <h1>Ready to ignite that spark?</h1>
            <p className="raleway">
              Developing a passion for learning doesn't have to be a struggle.
              We offer a holistic, individualized and compassionate approach to
              learning that can benefit anyone. Let us know how we can help you
              or your loved one with educational goals! <br />
            </p>
            <form>
              <label className="form">
                Name:
                <input type="text" name="name" className="inputForm" />
              </label>
              <hr />
              <label className="form">
                Email:
                <input type="text" name="name" className="inputForm" />
              </label>
              <hr />
              <label className="form">
                Subject:
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
