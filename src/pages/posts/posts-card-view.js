import React from 'react'
import { Post } from './post'

export const PostCardView = ({ postList }) => {
  return (
    postList.length > 0 ? (
      <div className='row'>
        {postList.map((post) => (
          <div className='col-sm-6' key={post.id}>
            <Post title={post.title} body={post.body} />
          </div>
        ))}
      </div>
    ) : (
      <p style={{ textAlign: 'center', fontWeight: '900' }}>List is empty</p>
    )
  )
}
