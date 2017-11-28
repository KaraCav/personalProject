import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import { BrowserRouter } from 'react-router-dom';
import Appointments from './components/Appointments';
import NewClient from './components/NewClient';
import Merchandise from './components/Merchandise';
import Workshops from './components/Workshops';
import Tutoring from './components/Tutoring';

export default class Router extends Component {
  constructor(props) {
    super(props);
    this.state = {
      goal: '',
      firstName: '',
      lastName: '',
      ageGrouping: ''
    };

    this.updateFirstName = this.updateFirstName.bind(this);
    this.updateLastName = this.updateLastName.bind(this);
    this.updateAgeGrouping = this.updateAgeGrouping.bind(this);
  }

  updateFirstName(userInput) {
    this.setState({ firstName: userInput });
  }

  updateLastName(userInput) {
    this.setState({ lastName: userInput });
  }
  updateAgeGrouping(userInput) {
    this.setState({ ageGrouping: userInput });
  }

  // addToGoals() {
  //   const id = Goals[Goals.length - 1].id + 1;
  //   const newGoal = {
  //     id: id,
  //     goal: this.state.goal
  //   };
  // }
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route exact path="/Appointments" component={NewClient} />
        <Route exact path="/Merchandise" component={Merchandise} />
        <Route exact path="/Tutoring" component={Tutoring} />

        <Route
          path="/facebook"
          component={() =>
            (window.location = 'https://www.facebook.com/GatewayMentoringLLC/')
          }
        />
        <Route
          path="/instagram"
          component={() =>
            (window.location = 'https://www.instagram.com/gatewaymentoringllc/')
          }
        />
        <Route
          path="/pinterest"
          component={() =>
            (window.location = 'https://www.pinterest.com/gatewaymentoringllc/')
          }
        />
        <Route exact path="/Workshops" component={Workshops} />
      </Switch>
    );
  }
}
