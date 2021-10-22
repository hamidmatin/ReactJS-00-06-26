import React from 'react';
import './style.css'

// function Component(){
//   return JSX
// }

// const Component = () => {
//   return JSX
// }


// function FunctionBaseComponent(props) {
//   console.log(props);
//   return (
//     <div>
//       <h2>{props.title}</h2>
//       <p>{props.message}</p>
//       <div>{props.children}</div>
//     </div>
//   );
// }

function FunctionBaseComponent({title, message, children}) {
  return (
    <div>
      <h2 className='title'>{title}</h2>
      <p className='message'>{message}</p>
      <div style={{fontWeight: 'bold'}}>{children}</div>
    </div>
  );
}


export { FunctionBaseComponent };
