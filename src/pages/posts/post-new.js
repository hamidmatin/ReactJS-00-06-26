import axios from 'axios'
import React, { useState } from 'react'
import { useHistory } from 'react-router'
import { PageTitle } from '../../components/page-title'
import { PostForm } from './post-form'

export const PostNew = () => {
  const history = useHistory()

  const [post] = useState({
    title: '',
    body: ''
  })

  const onSaveHandler = (post) =>{
    axios.post('https://jsonplaceholder.typicode.com/posts', post)
    .then(result =>{
      history.push('/users', {post: result.data})
    })
    .catch(error=>{
      console.log(error)
    })
  }

  return (
    <div className='container'>
      <PageTitle title='New Post' />
      <PostForm post={post} onSave={onSaveHandler}/>
    </div>
  )
}
