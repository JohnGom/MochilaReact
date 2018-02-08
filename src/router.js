import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import { PrivateRoute } from './privateRoute/index.js';
import HomeComponent from './components/home/index';
import LoginComponent from './components/login/index';

class Main extends Component {
  render() {
    const { currentUser } = firebase.auth();
    return (
      <main>
        <Switch>
          <PrivateRoute exact path='/' user={currentUser} component={HomeComponent} />
          <Route path='/login' component={LoginComponent}/>
          <Route path='/home' component={HomeComponent}/>
        </Switch>
      </main>
    );
  }
}

export default Main
