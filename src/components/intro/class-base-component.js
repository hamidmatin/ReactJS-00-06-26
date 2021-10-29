import React, { Component } from 'react';
import './style.css';

class ClassBaseComponent extends Component {
  constructor() {
    super();
    this.state = {
      isVisible: true,
    };
    // this.hideClickHandler = this.hideClickHandler.bind(this)
  }
  // hideClickHandler(){
  //   console.log(this)
  // }

  hideClickHandler = () => {
    // console.log(this);
    this.setState({ isVisible: false });
  };
  showClickHandler = () => {
    // console.log(this);
    this.setState({ isVisible: true });
  };
  toggleClickHandler = () => {
    // console.log(this);
    this.setState({ isVisible: !this.state.isVisible });
  };

  render() {
    // console.log(this.props);
    return (
      <div>
        <button onClick={this.hideClickHandler}>Hide</button>
        <button onClick={this.showClickHandler}>Show</button>
        <button onClick={this.toggleClickHandler}>Toggle</button>
        {this.state.isVisible ? (
          <div>
            <h2 className='title'>{this.props.title}</h2>
            <p className='message'>{this.props.message}</p>
            <div style={{ fontWeight: 'bold' }}>{this.props.children}</div>
          </div>
        ) : null}
      </div>
    );
  }
}

export { ClassBaseComponent };
