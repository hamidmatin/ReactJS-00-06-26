import React, { Component } from 'react';

import classes from './user-form.module.css';

export default class UserForm extends Component {
  constructor() {
    super();
    this.state = {
      userData: {
        name: '',
        username: '',
        email: '',
        phone: '',
      },
    };
  }

  componentDidUpdate(prevProps) {
    // console.log(this.props.user)
    if (prevProps.user !== this.props.user)
      this.setState({ ...this.state, userData: this.props.user });
  }

  // onNameChangeHandler = (e) =>{
  //   console.log(e.target.value)
  //   const newUser = {...this.state.user, name: e.target.value}
  //   this.setState({...this.state, user : newUser})
  // }
  // onUserChangeHandler = (e) =>{
  //   const newUser = {...this.state.user, username: e.target.value}
  //   this.setState({...this.state, user : newUser})
  // }
  // onEmailChangeHandler = (e) =>{
  //   const newUser = {...this.state.user, email: e.target.value}
  //   this.setState({...this.state, user : newUser})
  // }
  // onPhoneChangeHandler = (e) =>{
  //   const newUser = {...this.state.user, phone: e.target.value}
  //   this.setState({...this.state, user : newUser})
  // }

  onInputChangeHandler = (e) => {
    // const newUser = {...this.state.user, [e.target.id]: e.target.value}
    // console.log(this.state)

    this.setState({ 
      ...this.state, 
      userData: {...this.state.userData, [e.target.name]: e.target.value} 
    });
  };

  onSubmitHandler = (e) => {
    e.preventDefault();
    //....
    this.props.onSave(this.state.userData);
  };

  render() {
    return (
      <form className={classes.userForm} onSubmit={this.onSubmitHandler}>
        <label htmlFor='name' className={classes.labelControl}>
          Name
        </label>
        <input
          id='name'
          name='name'
          type='text'
          className={classes.inputControl}
          value={this.state.userData.name}
          // onChange={this.onNameChangeHandler}
          onChange={this.onInputChangeHandler}
        />

        <label htmlFor='user-name' className={classes.labelControl}>
          User Name
        </label>
        <input
          id='user-name'
          name='username'
          type='text'
          className={classes.inputControl}
          value={this.state.userData.username}
          // onChange={this.onUserChangeHandler}
          onChange={this.onInputChangeHandler}
        />

        <label htmlFor='email' className={classes.labelControl}>
          E-mail
        </label>
        <input
          id='email'
          name='email'
          type='text'
          className={classes.inputControl}
          value={this.state.userData.email}
          // onChange={this.onEmailChangeHandler}
          onChange={this.onInputChangeHandler}
        />

        <label htmlFor='phone' className={classes.labelControl}>
          Phone
        </label>
        <input
          id='phone'
          name='phone'
          type='text'
          className={classes.inputControl}
          value={this.state.userData.phone}
          // onChange={this.onPhoneChangeHandler}
          onChange={this.onInputChangeHandler}
        />

        <button type='submit' className={classes.submit}>
          Save
        </button>
      </form>
    );
  }
}
