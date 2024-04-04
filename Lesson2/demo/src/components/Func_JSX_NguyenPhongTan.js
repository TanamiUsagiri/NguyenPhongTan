import React from 'react';
export default function Func_JSX_NguyenPhongTan(props) {
    const user = {
        name: "Nguyễn Phong Tân",
        school: "Đại học Nguyễn Trãi"
    }
    return(
        <div>
            <h2>Function Component Demo</h2>
            <h3>Hello {user.name} - From {user.school}</h3>
            <hr></hr>
            <h3>Props:
                <br/> Fullname: {props.fullname}
                <br/> From: {props.school}
            </h3>
        </div>
    );
}

