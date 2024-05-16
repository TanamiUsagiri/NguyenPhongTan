import React, { useEffect, useState } from 'react'

export default function Npt_useEffect() {
    // state : count
    const [count, setCount] = useState(0);

    //hàm xử lý sự kiện Ấn Đi Cha
    const NpthandleClick = ()=>{
        setCount(prev => prev + 1);
    }

    // sử dụng hàm useEffect để cập nhật lại title; có một tham số 
    useEffect(()=>{
        document.title += `Nguyen Phong Tan : You Clicked ${count} times`
        console.log(`You Clicked ${count} times`);
    });
    //useEffect : tham số thứ 2 là mảng rỗng 
    useEffect(()=>{
        console.log("First run - One");
    },[]);

    // [deps]
    useEffect(()=>{
         console.log(`useEffect count Click:`,count)
    },[count]);
  return (
    <div>
        <h2>Demo - useEffect : You Clicked {count} times</h2>
        <button onClick={NpthandleClick}>
            Click me
        </button>
    </div>
  )
}