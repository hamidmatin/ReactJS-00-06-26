import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router'
import { PageTitle } from '../../components/page-title'
import { PostForm } from './post-form'

export const PostEdit = () => {
  const { id } =  useParams()

  const [post] = useState({
    title: '',
    body: ''
  })

  useEffect(() => {
    console.log(id)
    
  }, [])
  
  const onSaveHandler = (post) =>{
    //////
  }
  return (
    <div className='container'>
      <PageTitle title='Edit Post' />
      <PostForm post={post} onSave={onSaveHandler}/>
    </div>
  )
}
