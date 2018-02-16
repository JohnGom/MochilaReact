import {
  DATA_UPDATE
 } from './types';

export const UpdateInfoNotifAction = ({ prop, value }) => {
    return {
      type: DATA_UPDATE,
      payload: { prop, value }
    };
  };
