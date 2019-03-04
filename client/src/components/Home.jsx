import React, { Component } from 'react'

export default class Home extends Component {
    state ={
        st:"sk"
      }
  render() {
    return (
      <div>
        <div>Home</div>
        <div>{this.state.st}</div>
      </div>
    )
  }
}
