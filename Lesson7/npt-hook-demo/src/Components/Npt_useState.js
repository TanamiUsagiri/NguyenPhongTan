import React, { useState } from 'react'

export default function Npt_useState() {
    const [count, setCount] = useState(10);

    //mảng 
    const [list, setlist] = useState([0]);

    //hàm xử lý sự kiện "Gacha Nhé"
    const NpthandleList =()=>{
        //sinh ngẫu nhiên một giá trị số
        let num = parseInt(Math.random()*100);
        // cập nhật lại state: list
        setlist([
            ...list,
            num
        ])
        // // cách khác
        // let lst = list.push(num);
        // setlist(lst);

    }
  return (
    <div>
        <p>You Clicked {count} times</p>
        <button onClick={() => setCount(count + 5)}>
            Click me
        </button>
        <hr/>
        <h3>List: {list.toString()}</h3>
        <button onClick={NpthandleList}>Press start</button>
    </div>
  )
}