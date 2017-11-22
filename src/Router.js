import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import { BrowserRouter } from 'react-router-dom';
import Appointments from './components/Appointments';
import NewClient from './components/NewClient';
import Merchandise from './components/Merchandise';
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
      </Switch>
    );
  }
}
