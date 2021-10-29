import React from 'react'
import classes from './pgae-title.module.css'

export const PageTitle = ({ title }) => {
  console.log(classes)
  return (
    // <h2 className={classes['text-center']}>
    //   <span>{title}</span>
    // </h2>

    // <h2 className={classes.textCenter}>
    //   <span>{title}</span>
    // </h2>
    
    // <h2 className={`${classes.title} ${classes.textCenter}`}>
    //   <span>{title}</span>
    // </h2>
    
    // <h2 className={[classes.title, classes.textCenter].join(' ')}>
    //   <span>{title}</span>
    // </h2>
    
    // <h2 className={[classes.title, classes['text-center']].join(' ')}>
    //   <span>{title}</span>
    // </h2>
    
    <h2 className={classes.title}>
      <span>{title}</span>
    </h2>
  )
}
