import React, { Component } from 'react'

import './user.css'

export default class User extends Component {
  render() {
    return (
      <div className='user-card'>
        <h3>{this.props.name}</h3>
        <div className="card-body">
          <div className='card-text'>User Name: </div>
          <div className='card-text'>{this.props.userName}</div>
          
          <div className='card-text'>Email: </div>
          <div className='card-text'>{this.props.email}</div>
          
          <div className='card-text'>Phone: </div>
          <div className='card-text'>{this.props.phone}</div>

        </div>
          <div className="card-footer">
            <button className='btn btn-edit'>Edit</button>
            <button className='btn btn-delete'>Delete</button>
          </div>
      </div>
    )
  }
}
