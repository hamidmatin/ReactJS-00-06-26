import React from 'react'
import { changeMessageByParamFC, changeMessageFC } from '../../context/actions'
import { useMyContext } from '../../context/my-context'
// import { MyContext } from '../../context/my-context'

export const TestContextFC = () => {
  // const context = useMyContext()
  // console.log(context)
  const { myState, dispatch} = useMyContext()
  return (
    <div>
      <button onClick={()=>{
        dispatch(changeMessageFC())
      }}>Change</button>

      <button onClick={()=>{
        dispatch(changeMessageByParamFC('Message changed by Parameter in function component'))
      }}>Change</button>
      
      <p>Message = {myState.test}</p>
    </div>
  )
}
