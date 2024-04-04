import React, { Component } from 'react'

export default class Class_NguyenPhongTan extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fullname:"NguyenPhongTan",
            class:"K22CNT3"
        }
    }
    user = {
        name: "Nguyễn Phong Tân",
        school: "Đại học Nguyễn Trãi"
    }

    //Processing function
    handlechange = event => {
        this.setState({
            fullname:"Tanami"
        })
    }
render() {
    return (
    <div>
        <h2>
            Class Components Demo
        </h2>
        {this.user.name} - {this.user.school}
        <hr/>
        <h3>Info: {this.props.info}</h3>
        <h3>Time: {this.props.time}</h3>
        <hr/>
        <h3>State:
            fullname: {this.state.fullname} -
            class: {this.state.class}
        </h3>
        <button onClick={this.handlechange}>Change Name</button>
    </div>
    )
}
}
