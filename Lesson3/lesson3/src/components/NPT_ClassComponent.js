import React, { Component } from 'react'

export class NPT_ClassComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname:"Tân",
            Lastname:"Nguyễn",
            Username:"K22cnt3"
        }
    }

    //Arrow functions
    Member=(props)=>{
    return(
        <div className='alert alert-success'>
            <h3>Xin chào {props.fullname} - Bạn đã {props.age} tuổi!</h3>
        </div>
    )
    }

    Listmember=(props)=>{
        return(
            <>
            <this.Member fullname="Tanami" age="20"/>
            <this.Member fullname="Lumina" age="20"/>
            <this.Member fullname="Usagiri" age="20"/>
            <this.Member fullname="Nyctophilia" age="20"/>
            <this.Member fullname="Holly" age="20"/>
            </>
        )
    }
render() {
return (
    <div className='alert alert-danger'>
        <h2>Class Components Demo</h2>
        <hr/>
        <h3>Data trong state</h3>
        <h4>Xin chào {this.state.firstname} {this.state.Lastname}</h4>
        <hr/>
        <h3>Data từ props</h3>
        <p>Company: {this.props.company}</p>
        <p>Course: {this.props.course}</p>

        <hr/>
        <this.Member fullname="Nguyễn Phong Tân" age="20"/>
        <hr/>
        {/* List members */}
        <this.Listmember/>
    </div>
    )
}
}
export default NPT_ClassComponent
