import React, { Component } from 'react'
import User from './user';

export default class UsersCardView extends Component {
  render() {
    return (
      this.props.userList.length > 0 ? (
        <div className='row'>
          {this.props.userList.map((user) => (
            <div className='col-md-6 col-lg-4' key={user.id}>
              <User
                name={user.name}
                userName={user.username}
                email={user.email}
                phone={user.phone}
                editPath={`${this.props.editPath}/${user.id}/edit`}
                onDelete={() => {
                  this.props.onDelete(user.id);
                }}
              />
            </div>
          ))}
        </div>
      ) : (
        <p style={{ textAlign: 'center', fontWeight: '900' }}>List is empty</p>
      )
    )
  }
}
