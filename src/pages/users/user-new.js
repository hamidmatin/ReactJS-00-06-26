import React, { Component } from 'react'
import { PageTitle } from '../../components/page-title'
import UserForm from './user-form'

export default class UserNew extends Component {
  render() {
    return (
      <div className='container'>
        <PageTitle title='New User' />
        <UserForm />
      </div>
    )
  }
}
