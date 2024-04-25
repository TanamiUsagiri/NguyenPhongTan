import React, { Component } from 'react'

export default class NPT_EventForm1 extends Component {

    eventHandleClick1 = ()=>{
        alert("Event handle1")
    }
    eventHandleClick2 = ()=>{
        alert("Event handle2")
    }
  render() {
    return (
      <div className='alert alert-danger'>
        <h2>Event Form Handle</h2>
        {/* Goi ham xu li khi render */}
        {/* <button onClick={this.eventHandleClick1()}>Click 1</button> */}
        {/* Goi ham xu lis khi click */}
        <button onClick={this.eventHandleClick2}>Click 2</button>
      </div>
    )
  }
}
