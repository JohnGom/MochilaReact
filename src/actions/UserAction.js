import _ from 'lodash';
import firebase from 'firebase';
import { INFO_USER, USER_UPDATE } from './types.js';

export const UpdateInfoUser = ({ prop, value }) => {
    return {
      type: USER_UPDATE,
      payload: { prop, value }
    };
  };

export const getInfoUsersAction = () => {
    return (dispatch) => {
      firebase.database().ref('/users/')
        .on('value', snapshot => {
          const info = snapshot.val();
          _.forEach(info, (value, key) => {
            info[key].uid = key;
          });
          dispatch({
            type: INFO_USER,
            payload: info
          });
        });
    };
  };
