import * as actionTypes from '../redux/action-types';

export const changeMessageCC = () => {
  return { type: actionTypes.CHANGE_MESSAGE_CC };
};

export const changeMessageByParamCC = (message) => {
  return { type: actionTypes.CHANGE_MESSAGE_BY_PARAM_CC, payload: message };
};

export const changeMessageFC = () => {
  return { type: actionTypes.CHANGE_MESSAGE_FC };
};

export const changeMessageByParamFC = (message) => {
  return { type: actionTypes.CHANGE_MESSAGE_BY_PARAM_FC, payload: message };
};
