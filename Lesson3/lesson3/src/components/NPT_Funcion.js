import React from 'react'

export default function NPT_Funcion(props) {
  return (
    <div>
      <hr/>
      <h2>Function components demo</h2>
      <h3>Sử dụngn thuộc tính của props</h3>
      <p>Username: {props.username}</p>
      <p>Fullname: {props.fullname}</p>
      <p>Age: {props.age}</p>
    </div>
  )
}
