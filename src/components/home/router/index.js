import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import UsersComponent from '../users/index.js';
import IntroComponent from '../intro/index.js';
import NotificationComponent from '../notification/index.js';
import StatistiComponent from '../stats/index.js';


class Router extends Component {
  render() {
    return (
      <Switch>
        <Route exact path='/home' component={IntroComponent}/>
        <Route path='/home/users' component={UsersComponent}/>
        <Route path='/home/notif' component={NotificationComponent}/>
        <Route path='/home/stats' component={StatistiComponent}/>
      </Switch>
    );
  }
}

export default Router;
