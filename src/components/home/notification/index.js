import React, { Component } from 'react';

class NotificationComponent extends Component {
  render() {
    return (
      <div>
        <ul>
          <li>6/5 @ Evergreens</li>
          <li>6/8 vs Kickers</li>
          <li>6/14 @ United</li>
        </ul>
        <button type="button" class="btn btn-primary">Primary</button>
      </div>
    );
  }
}

export default NotificationComponent;
