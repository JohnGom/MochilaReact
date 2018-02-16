import React, { Component } from 'react';
import Main from './router/index.js';
import firebase from 'firebase';
import MenuComponent from './menu/index.js'
import AppBar from 'material-ui/AppBar';
import FlatButton from 'material-ui/FlatButton';
import './style.css'

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.signOut = this.signOut.bind(this);
  }

  signOut = () => {
    firebase.auth().signOut().then(() => {
      this.props.history.push(`/login`);
    }).catch(function(error) {
      console.log('error');
    });
  }

  render() {
    return (
       <div className="row contain">
         <div className="col-sm-2 menuBar"><MenuComponent /></div>
         <div className="col-sm-10 content">
           <AppBar
              className="toolbar"
              title="Title"
              style={styles.bar}
              iconClassNameRight="muidocs-icon-navigation-expand-more"
              iconElementRight={<FlatButton onClick={this.signOut} label="Cerrar sesión" primary={true} />}
            />
           <Main />
         </div>
       </div>
    );
  }
}

const styles = {
  bar: {
    background: '#43A047',
    width: '100%'
  },
};

export default Home;
