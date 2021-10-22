import React, { Component } from 'react';
import { ClassBaseComponent } from '../../components/intro/class-base-component';
import ClassComponentLifecycle from '../../components/intro/class-component-lifecycle';
import { FunctionBaseComponent } from '../../components/intro/function-base-component';

export class ComponentIntroductionIndex extends Component {
  constructor() {
    super();
    this.state = {
      message: 'Class Component Lifecycle',
      isVisible: false,
    };
  }

  messageChangeHandler = (newMessage) => {
    this.setState({ ...this.state, message: newMessage });
  };

  render() {
    return (
      <div className='container'>
        <button onClick={this.messageChangeHandler.bind(this, 'My counter changed by bind')}>
          Change message
        </button>

        <button
          onClick={() => {
            this.messageChangeHandler('My counter changed by call method');
          }}
        >
          Change message
        </button>
        <button
          onClick={() => {
            this.setState({ ...this.state, isVisible: !this.state.isVisible });
          }}
        >
          Toggle Show
        </button>

        {this.state.isVisible ? <ClassComponentLifecycle message={this.state.message} /> : null}
        
        <hr />
        <ClassBaseComponent title='Class Base Component' message='Session 5' />
        <ClassBaseComponent title='Another Title' message='another message' />

        <ClassBaseComponent title='Component with content' message='Message'>
          <em>This is Content of Component</em>
        </ClassBaseComponent>
        <hr />
        <FunctionBaseComponent title='Function Base Component' message='Session 5' />
        <FunctionBaseComponent title='Another Title' message='another message' />
        <FunctionBaseComponent title='Component with content' message='Message'>
          <em>This is Content of Component</em>
        </FunctionBaseComponent>
      </div>
    );
  }
}
