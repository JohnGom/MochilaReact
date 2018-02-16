import firebase from 'firebase';
import {
  LOGIN_USER
} from './types';

export const SignInAction = ({ username, password }) => {

  const email = `${username}@lamochilaweb.com`;
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((info) => {
      dispatch({ type: LOGIN_USER, payload: true });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/user-not-found') {
        dispatch({ type: LOGIN_USER, payload: false });
      } else if (errorCode === 'auth/wrong-password') {
        dispatch({ type: LOGIN_USER, payload: false });
      }
    });
  };
};
