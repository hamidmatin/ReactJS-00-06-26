import React from 'react'
import { PageTitle } from '../../components/page-title'
import { TestContextFC } from './test-context-fc'

export const TestContextIndex = () => {
  return (
    <div className='container'>
      <PageTitle title='Test Context'/>
      <TestContextFC />
    </div>
  )
}
