import React from 'react';
import { Loading } from '../components/loading';

export const withLoading = ( component ) => {
  const Component = component;
  
  return ({ isLoading, ...props }) => {
    return isLoading ? <Loading /> : <Component {...props} />;
  };
};
