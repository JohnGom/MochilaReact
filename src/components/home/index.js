import React, { Component } from 'react';
import Main from './router/index.js';
import MenuComponent from './menu/index.js'

class Home extends Component {
  render() {
    return (
     <div class="container-fluid">
       <div class="row">
         <div class="col-sm-3"><MenuComponent /></div>
         <div class="col-sm-9"><Main /></div>
       </div>
    </div>
    );
  }
}

export default Home;
