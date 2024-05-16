import React, { createContext, useContext, useState } from 'react'
import Npt_useContext1 from './Npt_useContext1';
export const ThemeContext = createContext(); //tạo ngữ cảnh để chia sẻ
export default function Npt_useContext() {
    //state
    const [theme, settheme] = useState('Green');
    // const toggleTheme = () => {
    //     settheme(theme === 'red' ? 'dark' : 'light')
    // }

    //hàm thay đổi theme
    const npthandlechange = (toggle) =>{
        settheme(theme === 'Green' ? 'Pink' : 'Green')
    }
  return (
    <ThemeContext.Provider value = {theme}>
    <div className='alert'>
        <h2>Demo useContext</h2>
        <Npt_useContext1/>
        <button onClick={npthandlechange}>Change Color</button>
    </div>
    </ThemeContext.Provider>
  )
}