import * as actionTypes from './action-types'
const initState = {
  test: 'Test Redux'
}

export const rootReducer = (state = initState, action) =>{
  console.log('Action in reducer', action)
  console.log('State in reducer', state)

  switch (action.type) {
    case actionTypes.CHANGE_MESSAGE_CC:
      return{
        ...state,
        test: "Message changed in class component"
      }
  
    case actionTypes.CHANGE_MESSAGE_BY_PARAM_CC:
      return{
        ...state,
        test: action.payload
      }
    case actionTypes.CHANGE_MESSAGE_FC:
      return{
        ...state,
        test: "Message changed in fucntion component"
      }
  
    case actionTypes.CHANGE_MESSAGE_BY_PARAM_FC:
      return{
        ...state,
        test: action.payload
      }
  
    default:
      return state
  }
  
}