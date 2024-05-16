import React, { useContext } from 'react'
import { ThemeContext } from './Npt_useContext'

export default function Npt_useContext2() {
    const theme = useContext(ThemeContext);
  return (
    <div className={theme}>
        <h2>Npt_useContext2</h2>
        <p>
            <b>2210900123</b>
            <b>Nguyen Phong Tan</b>
            <i>k22Cnt3</i>
        </p>
    </div>
  )
}