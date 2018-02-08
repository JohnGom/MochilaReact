import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const usersImage = require('../../../assets/users.png');

class IntroComponent extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="jumbotron">
          <h1 class="display-4">Hello, world!</h1>
          <p class="lead">This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>
          <hr class="my-4" />
          <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
        </div>
        <div class="row">
          <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={usersImage} alt="Usuarios" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/home/users' class="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
          <div class="card" style={{ width: '18rem' }}>
            <img class="card-img-top" src={usersImage} alt="Usuarios" />
            <div class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
              <Link to='/home/users' class="btn btn-primary">Go somewhere</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default IntroComponent;
