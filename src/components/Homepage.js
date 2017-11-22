import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Appointments from './Appointments';
import './Appointments.css';
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

          <div id="motto">
            <h1>Welcome to Gateway Mentoring!</h1>
            <br />
            <h2>Unlocking Potential in Every Student</h2>
          </div>
        </div>
        <div className="homeBackground2">
          <div className={['animated fadeInLeft', 'homepageSecond'].join(' ')}>
            <div className="motto2">
              <h1>What's the definition of success?</h1>

              <p>
                Ask five people, and chances are good that you will end up with
                ten different answers. For some, success is rooted in education,
                meaning a child who completes advanced degrees or becomes a
                doctor has achieved success. For others, practical life skills
                take precedence. Can my child do well for herself? Can she
                balance a checkbook, write up a sound resume, and think
                critically about her goals?
              </p>
              <p>
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
            <h3>
              Developing a passion for learning doesn't have to be a struggle.
              Let us know how we can help you or your loved one to get excited
              about learning!
            </h3>
          </div>
        </div>
      </div>
    );
  }
}
