import firebase from 'firebase';
import {
  LOGIN_USER
} from './types';

export const SignInAction = ({ username, password, language }) => {

  const email = `${username}@lamochila.com`;
  return (dispatch) => {
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((info) => {

      dispatch({
        type: LOGIN_USER,
      });
    })
    .catch((error) => {
      const errorCode = error.code;
      if (errorCode === 'auth/user-not-found') {
        console.log('user no found');
      } else if (errorCode === 'auth/wrong-password') {
        console.log('user no found');
      }
    });
  };
};
