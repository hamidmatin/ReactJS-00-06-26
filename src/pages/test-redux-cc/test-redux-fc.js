import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { changeMessageByParamFC, changeMessageFC } from '../../redux/actions'


export const TestReduxFC = () => {
  const message = useSelector(state => state.test)
  const dispatch = useDispatch()

  return (
    <div>
      <h3>Redux for Function Component</h3>

      <button onClick={()=>{
        dispatch(changeMessageFC())
      }}>Change Message</button>

      <button onClick={()=>{
       dispatch(changeMessageByParamFC('Message changed by Parameter in function component'))
      }}>Change Message by Param</button>

      <p>Message = {message}</p>
    </div>
  )
}
