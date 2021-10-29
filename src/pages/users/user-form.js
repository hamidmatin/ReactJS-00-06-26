import React, { Component } from 'react';

import classes from './user-form.module.css';

export default class UserForm extends Component {
  render() {
    return (
      <form className={classes.userForm}>
        <label htmlFor='name' className={classes.labelControl}>
          Name
        </label>
        <input id="name" type='text' className={classes.inputControl} />
        <label htmlFor='user-name' className={classes.labelControl}>
          User Name
        </label>
        <input id="user-name" type='text' className={classes.inputControl} />
        <label htmlFor='email' className={classes.labelControl}>
          E-mail
        </label>
        <input id="email" type='text' className={classes.inputControl} />
        <label htmlFor='phone' className={classes.labelControl}>
          Phone
        </label>
        <input id="phone" type='text' className={classes.inputControl} />

        <button type='submit' className={classes.submit}>Save</button>
      </form>
    );
  }
}
