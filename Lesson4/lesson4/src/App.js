import React, { Component } from 'react'
import NPT_EventForm1 from './components/NPT_EventForm1'
import NPT_EventForm2 from './components/NPT_EventForm2'
import NPT_EventForm3 from './components/NPT_EventForm3'
import NPT_EventForm4 from './components/NPT_EventForm4'

export default class App extends Component {
  render() {
    return (
      <div className='container'>
        <h1>Event Form Demo</h1>
        <NPT_EventForm1/>
        <NPT_EventForm2/>
        <NPT_EventForm3/>
        <NPT_EventForm4 name="Nguyễn Phong Tân"/>
      </div>
    )
  }
}
