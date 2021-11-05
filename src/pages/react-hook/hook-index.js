import React, { useState } from 'react';
import HookSample from './hook-sample';

export const HookIndex = () => {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div className='container'>
      <button 
        style={{margin: '50px auto', display: 'block'}}
        onClick={() => {setIsVisible(!isVisible)}}
        >Toggle Show</button>
      {isVisible ? <HookSample message='React Hook Sample' /> : null}
    </div>
  );
};
