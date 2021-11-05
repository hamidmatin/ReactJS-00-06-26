import React, { Component } from 'react';
import axios from 'axios';

import User from './user';
import { PageTitle } from '../../components/page-title';
import { Link } from 'react-router-dom';

export default class UsersIndex extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
    };
  }

  componentDidMount() {
    // console.log('Users',this.props)

    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      let userList = response.data
      if(this.props.location.state){
        userList = [...userList, this.props.location.state.user]
      }
      // console.log(userList);
      this.setState({ ...this.state, userList });
    });
  }

  deleteUserHandler = (id) => {
    console.log(id);
    axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`).then((response) => {
      console.log(response);

      let newUserList = [...this.state.userList];
      newUserList = newUserList.filter((user) => user.id !== id);
      console.log(newUserList);

      this.setState({ ...this.state, userList: newUserList });
    });
  };

  render() {
    return (
      <div className='container'>
        <PageTitle title='Users' />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to={`${this.props.match.path}/new`} className='btn btn-new'>
            New User
          </Link>
        </div>
        {this.state.userList.length > 0 ? (
          <div className='row'>
            {this.state.userList.map((user) => (
              <div className='col-md-6 col-lg-4' key={user.id}>
                <User
                  name={user.name}
                  userName={user.username}
                  email={user.email}
                  phone={user.phone}
                  editPath={`${this.props.match.path}/${user.id}/edit`}
                  onDelete={() => {
                    this.deleteUserHandler(user.id);
                  }}
                />
              </div>
            ))}
          </div>
        ) : (
          <p style={{ textAlign: 'center', fontWeight: '900' }}>List is empty</p>
        )}
      </div>
    );
  }
}
