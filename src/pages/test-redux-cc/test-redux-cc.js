import React, { Component } from 'react'
import { connect } from 'react-redux'
import { changeMessageByParamCC, changeMessageCC } from '../../redux/actions';

class TestReduxCC extends Component {
  render() {
    // console.log(this.props);
    return (
      <div >
        <h3>Redux for Class Component</h3>
        <button onClick={this.props.changeMessage}>Change Message</button>
        <button onClick={()=>{
          this.props.changeMessageByParam('Message changed by Parameter in class component')
        }}>Change Message by Param</button>
        <p>Message = {this.props.message}</p>
      </div>
    )
  }
}

const mapStateToProps = state =>{
  // console.log('IN COMPONENT state = ', state);
  return {
    message: state.test
  }
}

const mapDispatchToProps = dispatch =>{
  return {
    changeMessage: () =>{
      dispatch(changeMessageCC())
    },
    changeMessageByParam: (message) =>{
      dispatch(changeMessageByParamCC(message))
    }
  }
}
// const c1 = connect(mapStateToProps)
// console.log(c1)

export default connect(mapStateToProps, mapDispatchToProps)(TestReduxCC)
