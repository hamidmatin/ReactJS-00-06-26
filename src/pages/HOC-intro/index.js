import React, { useState } from 'react';
import { withLoading } from '../../HOC/with-loading';
import { HOCSample } from './hoc-sample';

export const HOCIndex = () => {
  const [isLoading, setIsLoading] = useState(true);

  const HOCSampleWithLoading = withLoading(HOCSample);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return <HOCSampleWithLoading isLoading={isLoading} price={92112} />;
};
