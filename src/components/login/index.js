import React, { Component } from 'react';
import { connect } from 'react-redux';
import './style.css'
import { UpdateInfoUser, SignInAction } from '../../actions/index.js';
import RaisedButton from 'material-ui/RaisedButton';

const appImage = require('../../assets/app-icon.png');

class LoginComponent extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    this.handleChangeUser = this.handleChangeUser.bind(this);
    this.handleChangePass = this.handleChangePass.bind(this);
    this.loginUser = this.loginUser.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.answer !== undefined && nextProps.answer === true) {
      this.props.UpdateInfoUser({ prop: 'answer', value: undefined })
      this.props.history.push(`/home`);
    }

  }


  loginUser = () => {
    const { username, password } = this.state;
    console.log(password);
    this.props.SignInAction({ username, password });
  }

  handleChangeUser(event) {
    this.setState({username: event.target.value});
  }

  handleChangePass(event) {
    this.setState({password: event.target.value});
  }

  render() {
    return (
      <div className="container">
      	<div className="login-container">
          <div id="output"></div>
          <img src={appImage} className="app" alt="veapp"/>
          <div className="form-box">
            <form onSubmit={this.loginUser}>
              <input
                name="user"
                type="text"
                placeholder="Usuario"
                value={this.state.username}
                onChange={this.handleChangeUser}
              />
              <input
                type="password"
                placeholder="Contraseña"
                value={this.state.password}
                onChange={this.handleChangePass}
              />
              {this.props.answer === false ?
              <div class="alert alert-danger" role="alert">
                Usuario o contraseña incorrecta
              </div> :
              null
              }
              <RaisedButton className="btn-info btn-block login" onClick={this.loginUser} label="Iniciar" primary={true} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { answer } = state.auth;
  console.log(answer);
  return { answer }
};

export default connect(mapStateToProps,
{ UpdateInfoUser, SignInAction })(LoginComponent);
