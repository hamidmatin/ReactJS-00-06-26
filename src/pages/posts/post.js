import React from 'react'
import {postCard, postText} from './posts.module.css'

export const Post = ({title, body}) => {
  return (
    <div className={postCard}>
      <h3>{title}</h3>
      <div className={postText}>Body: </div>
      <div className={postText}>{body}</div>
      
    </div>
  )
}
