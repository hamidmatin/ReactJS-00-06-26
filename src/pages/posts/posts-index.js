import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { PageTitle } from '../../components/page-title';
import { Post } from './post';

export const PostIndex = () => {
  console.log(useState([]));
  const match = useRouteMatch()
  const [postList, setPostList] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result => {
        setPostList(result.data)
      })
  }, [])

  console.log(postList)
  return (
    <div className='container'>
      <PageTitle title='Posts' />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={`${match.path}/new`} className='btn btn-new'>
            New Post
          </Link>
        </div>
        {postList.length > 0 ? (
          <div className='row'>
            {postList.map((post) => (
              <div className='col-sm-6' key={post.id}>
                <Post title={post.title} body={post.body} />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', fontWeight: '900' }}>List is empty</p>
        )}
      </div>
    
  );
};
