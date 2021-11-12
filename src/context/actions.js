import * as actionTypes from './action-types'

export const changeMessageFC = () => {
  return { type: actionTypes.CHANGE_MESSAGE_FC };
};

export const changeMessageByParamFC = (message) => {
  return { type: actionTypes.CHANGE_MESSAGE_BY_PARAM_FC, payload: message };
};