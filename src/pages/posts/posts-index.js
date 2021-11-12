import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch } from 'react-router-dom';
import { PageTitle } from '../../components/page-title';
import { withLoading } from '../../HOC/with-loading';
import { PostCardView } from './posts-card-view';

export const PostIndex = () => {
  console.log(useState([]));
  const match = useRouteMatch()
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(result => {
        setPostList(result.data)
        setIsLoading(false)
      })
  }, [])

  const PostCardViewWithLoading = withLoading(PostCardView)
  return (
    <div className='container'>
      <PageTitle title='Posts' />

      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Link to={`${match.path}/new`} className='btn btn-new'>
            New Post
          </Link>
        </div>
        <PostCardViewWithLoading isLoading={isLoading} postList={postList} />
      </div>
    
  );
};
