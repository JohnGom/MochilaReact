import React, { Component } from 'react';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import reducer from './reducers/index.js';
import Router from './router';
import config from './config/firebase';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  componentDidMount() {
    const initFire = firebase.initializeApp(config);
    if (initFire) {
      this.setState({ isReady: true });
    }
  }

  render() {
    const store = createStore(
      reducer,
      applyMiddleware(
        ReduxThunk,
      )
    )
    if (this.state.isReady) {
      return (
        <Provider store={store}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </Provider>
      );
    } else {
      return (
        <div>
        <h1>Loading...</h1>
        </div>
      );
    }

  }
}

export default App;
