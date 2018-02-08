import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'

const appImage = require('../../assets/app-icon.png');

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      isReady: false,
    };
  }

  componentDidMount() {
  }

  render() {
    return (
      <div class="container">
      	<div class="login-container">
          <div id="output"></div>
          <img src={appImage} class="app" alt="veapp"/>
          <div class="form-box">
            <form action="" method="">
              <input name="user" type="text" placeholder="username" />
              <input type="password" placeholder="password" />
              <button class="btn btn-info btn-block login" type="submit">Login</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {

};

export default connect(mapStateToProps,
{ })(LoginComponent);
