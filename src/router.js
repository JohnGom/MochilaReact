import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import firebase from 'firebase';
import { PrivateRoute } from './privateRoute/index.js';
import HomeComponent from './components/home/index';
import LoginComponent from './components/login/index';

class Main extends Component {
  constructor() {
    super();
    this.state = {
      user: '',
    };
  }
  componentDidMount() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setState({ user });
    });
  }
  render() {
    if(this.state.user !== ''){
      return (
        <main>
          <Switch>
            <PrivateRoute exact path='/' user={this.state.user} component={HomeComponent} />
            <Route path='/login' component={LoginComponent}/>
            {this.state.user !== null  ?
              <Route path='/home' component={HomeComponent}/> : null
            }
          </Switch>
        </main>
      );
    } else {
      return null
    }
  }
}

export default Main
