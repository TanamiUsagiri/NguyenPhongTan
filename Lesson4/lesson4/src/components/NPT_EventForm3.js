import React, { Component } from 'react'
//Xu lis so kien voi prop va state
export default class NPT_EventForm3 extends Component {
    constructor(props){
        super(props);
        //Tao doi tuong du lieu thong qua state
        this.state = {
            name: 'Nguyễn Phong Tân',
            job:'Dev'
        }
    }

    //Ham xu li su kien
    handleChangeName =(ev)=>{
        this.setState({
            name:"Tanami - ReactJs"
        })
    }
    handleChangeJob =(ev)=>{
        this.setState({
            job:"K22CNT3 - ReactJs"
        })
    }
  render() {
    return (
      <div className='alert alert-primary'>
        <h2> Thay đổi dữ liệu trong state</h2>
        <p>Dữ liệu: {this.state.name} - {this.state.job}</p>
        <button onClick={this.handleChangeName}>Thay đổi tên</button>
        <button onClick={this.handleChangeJob}>Thay đổi job</button>
      </div>
    )
  }
}
