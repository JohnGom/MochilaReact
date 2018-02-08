import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MenuComponent extends Component {
  render() {
    return (
      <ul class="list-group list-group-flush">
        <li class="list-group-item list-group-item-action">
         <Link to='/home'>Home</Link>
        </li>
       <li class="list-group-item list-group-item-action">
        <Link to='/home/users'>Usuarios</Link>
       </li>
       <li class="list-group-item list-group-item-action">
        <Link to='/home/notif'>Notificaciones</Link>
       </li>
       <Link to='/home/stats'><li class="list-group-item list-group-item-action">
        Estadisticas
       </li></Link>
      </ul>
    );
  }
}

export default MenuComponent;
