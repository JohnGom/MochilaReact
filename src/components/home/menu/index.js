import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {List, ListItem} from 'material-ui/List';
import Subheader from 'material-ui/Subheader';
import Divider from 'material-ui/Divider';
import Avatar from 'material-ui/Avatar';
import './style.css';

const appImage = require('../../../assets/app-icon.png');

class MenuComponent extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="listLeft">
      <List>
        <ListItem
          primaryText="LaMochila"
          leftAvatar={<img src={appImage} className="image" alt="veapp" />}
        />
      </List>
      <Divider />
      <List>
      <Link to='/home'>
        <ListItem
          primaryText="Principal"
          secondaryText="Home"
          leftIcon={<i class="material-icons">home</i>}
        />
      </Link>
      </List>
      <Divider />
      <List>
        <Subheader>Actividades</Subheader>
        <Link to='/home/users'>
          <ListItem primaryText="Usuarios" leftIcon={<i class="material-icons">supervisor_account</i>}/>
        </Link>
        <Link to='/home/notif'>
          <ListItem primaryText="Notificaciones" leftIcon={<i class="material-icons">notifications_active</i>}/>
        </Link>
        <Link to='/home/stats'>
          <ListItem primaryText="Estadisticas" leftIcon={<i class="material-icons">dashboard</i>}/>
        </Link>
      </List>
      <Divider />
      </div>
    );
  }
}

export default MenuComponent;
