import React from 'react';
import { Route, Redirect } from 'react-router-dom';

export const PrivateRoute = ({ component: Component, user, ...rest }) => (
    <Route {...rest} render={props => (
      user !== null
      ? <Redirect to={{ pathname: '/home', state: { from: props.location } }} />
      : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
    )} />
)
