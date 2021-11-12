import React, { Component } from 'react';
import axios from 'axios';

import { PageTitle } from '../../components/page-title';
import { Link } from 'react-router-dom';
import UsersCardView from './users-card-view';
import { withLoading } from '../../HOC/with-loading';
export default class UsersIndex extends Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    // console.log('Users',this.props)

    axios.get('https://jsonplaceholder.typicode.com/users').then((response) => {
      let userList = response.data;
      if (this.props.location.state) {
        userList = [...userList, this.props.location.state.user];
      }
      // console.log(userList);
      this.setState({ userList, isLoading: false });
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
    const UsersCardViewWithLoading = withLoading(UsersCardView);

    return (
      <div className='container'>
        <PageTitle title='Users' />
        <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Link to={`${this.props.match.path}/new`} className='btn btn-new'>
            New User
          </Link>
        </div>

        <UsersCardViewWithLoading
          isLoading={this.state.isLoading}
          userList={this.state.userList}
          editPath={this.props.match.path}
          onDelete={this.deleteUserHandler}
        />
      </div>
    );
  }
}
