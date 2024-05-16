import React from 'react'
import './App.css'
import Npt_useEffect from './Components/Npt_useEffect'
import Npt_useContext from './Components/Npt_useContext'
import Npt_useState from './components/npt_UseState'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Nguyen Phong Tan - Hook</h1>
      <hr/>
      <Npt_useState/>
      <hr/>
      <Npt_useEffect/>
      <hr/>
      <Npt_useContext/>
    </div>
  )
}
