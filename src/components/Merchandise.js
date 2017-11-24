import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import Appointments from './Appointments';
import './Appointments.css';
import './Homepage.css';
import './Merchandise.css';

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
              <button
                className="merchButton"
                onClick={console.log(
                  this.props.firstName + this.props.lastName
                )}
              >
                Add to Cart
              </button>
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
            <h1>Notepad Organizer</h1>
            <p className="schoolStore">
              The schoolwork organizer that can fit in your pocket! Use this to
              make notes for later, bookmark your textbooks, and keep track of
              exam dates!
            </p>
            <button
              className="merchButton"
              onClick={console.log(this.props.firstName + this.props.lastName)}
            >
              Add to Cart
            </button>
          </div>
        </div>

        <div className="homeBackground2">
          <div className={['animated fadeInLeft', 'homepageSecond'].join(' ')}>
            <div className="motto2">
              <h1>Assorted Pencils</h1>

              <p className="schoolStore">
                Brighten up your student's day with our colorful, #2 pencils.
              </p>
              <button
                className="merchButton"
                onClick={console.log(
                  this.props.firstName + this.props.lastName
                )}
              >
                Add to Cart
              </button>
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
