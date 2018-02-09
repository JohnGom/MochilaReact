import firebase from 'firebase';
import { INFO_USER } from './types.js';

export const getInfoUsersAction = () => {
    return (dispatch) => {
      firebase.database().ref('/users/')
        .on('value', snapshot => {
          dispatch({
            type: INFO_USER,
            payload: snapshot.val()
          });
        });
    };
  };
