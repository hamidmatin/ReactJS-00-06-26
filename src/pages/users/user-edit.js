import axios from 'axios'
import React, { Component } from 'react'
import { PageTitle } from '../../components/page-title'
import UserForm from './user-form'

export default class UserEdit extends Component {
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
  componentDidMount(){
    const {id} = this.props.match.params
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(result =>{
      this.setState({user: result.data})
    })
  }

  onSaveHandler = user =>{
    axios.put('https://jsonplaceholder.typicode.com/users/'+ user.id, user)
    .then(result => {
      
      this.props.history.push('/users', {user: result.data})
    })
    .catch(error => {
      console.log(error)
    })
  }
  render() {
    return (
      <div className='container'>
        <PageTitle title='Edit User' />
        <UserForm user={this.state.user} onSave={this.onSaveHandler}/>
      </div>
    )
  }
}
