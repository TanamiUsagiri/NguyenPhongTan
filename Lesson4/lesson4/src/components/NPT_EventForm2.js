import React from 'react'

export default function NPT_EventForm2() {

    const eventHandleClick1 = (content)=>{
        console.log('================================');
        console.log(content);
        console.log('================================');
    }
  return (
    <div className ='alert alert-success'>
      <h2>Event Demo - Function Components</h2>
      <button onClick={eventHandleClick1("Nguyễn Phong Tân")}>CLick here(render)</button>
      <button onClick={()=>eventHandleClick1("K22CNT3 - ReactJs")}>CLick here(click)</button>
    </div>
  )
}
