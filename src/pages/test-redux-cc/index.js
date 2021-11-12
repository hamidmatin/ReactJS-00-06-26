import React, { Component } from 'react'
import { PageTitle } from '../../components/page-title'
import TestReduxCC from './test-redux-cc'
import { TestReduxFC } from './test-redux-fc';

export default class TestReduxIndex extends Component {

  render() {
    console.log(this.props);
    return (
      <div className='container'>
        <PageTitle title='Test Redux' />
        <TestReduxCC />
        <hr />
        <TestReduxFC />
      </div>
    )
  }
}
