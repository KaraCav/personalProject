import React, { Component } from 'react';
import Navbar from './Navbar';
import Header from './Header';
import { Link } from 'react-router-dom';

import './Homepage.css';
import './Workshops.css';

export default class Workshops extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Header />
        <div className="workshop">
          <div>
            <img
              className={['animated fadeInLeft', 'workshop'].join(' ')}
              src={require('../images/summerWorkshops.jpg')}
            />
          </div>

          <div
            className={['animated fadeInRight', 'workshopMainText'].join(' ')}
          >
            <h1>
              You may have seen our new <br />fliers around town!
            </h1>
            <h3>
              Gateway Mentoring is expanding- and as we grow, we develop more
              programs to keep students on track.{' '}
            </h3>
            <p>
              In addition to our popular college Admissions Program, we offer a
              personalized workshop of 3 to 10 one-on-one sessions where our
              mentors work with the student to set goals. Most of our workshops
              are designed for small groups, with fewer than twelve students per
              session. Our programs ensure individualized attention and
              admirable results as a result.{' '}
            </p>
            <br />
            <h3>
              We strive for excellence and have the student success stories to
              prove it
            </h3>
            <p>
              Not only do our students see an improvement in grades, but parents
              generally report their students are more passionate about learning
              and excited to go to school.
            </p>
            <br />
            <h3>Attend a no-risk, free workshop at one of our orientations</h3>
            <p>
              You don't need to be a current student to attend a workshop or the
              risk-free trial class. Let us know which one interests you, and
              we'll have materials ready when you arrive. See for yourself why
              the Gateway Mentoring family is growing so fast!
            </p>
          </div>
        </div>
      </div>
    );
  }
}
