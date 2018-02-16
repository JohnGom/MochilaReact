import {
  INFO_STATS
 } from './types';

 export const getInfoStats = (country, text) => {
    return (dispatch) => {
      const URL = 'https://us-central1-mochila-e62f2.cloudfunctions.net/infoReport';
        fetch(`${URL}`)
        .then(response => response.json())
          .then(data => {
            dispatch({ type: INFO_STATS, payload: data });
        });
      };
  };
