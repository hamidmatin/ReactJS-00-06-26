import React, { Component } from 'react'
import axios from 'axios'
import { PageTitle } from '../../components/page-title'
import UserForm from './user-form'

export default class UserNew extends Component {
  constructor(){
    super()
    this.state = {
      user : {
        name: '',
        username: '',
        email: '',
        phone: '',
      }
    }
  }

  onSaveHandler = (user) =>{
    console.log(user)

    axios.post('https://jsonplaceholder.typicode.com/users', user)
    .then(result => {
      console.log(result)
      console.log(this.props)
      
      // window.history.back()
      // window.location.pathname = '/users'
      // this.props.history.push({pathname:'/users', state:{id: 1}})
      this.props.history.push('/users', {user: result.data})
    })
    .catch(error => {
      console.log(error)
    })
  }

  render() {
    return (
      <div className='container'>
        <PageTitle title='New User' />
        <UserForm user={this.state.user} onSave={this.onSaveHandler}/>
      </div>
    )
  }
}
