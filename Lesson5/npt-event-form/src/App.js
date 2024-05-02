import React, { Component } from 'react'
import NPT_Form1 from './components/NPT_Form1'
import NPT_Form2 from './components/NPT_Form2'
import NPT_Form3 from './components/NPT_Form3'

export default class App extends Component {

  handleSubmit = (param) => {
    console.log(param);
  }
  render() {
    return (
      <div>
        <h1>Event Form - Control Components</h1>
        <NPT_Form1/>
        <NPT_Form2/>
        <NPT_Form3 onSubmit={this.handleSubmit}/>
      </div>
    )
  }
}
