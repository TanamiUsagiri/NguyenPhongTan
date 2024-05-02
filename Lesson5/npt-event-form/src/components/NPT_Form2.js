import React, { Component } from 'react'

export default class NPT_Form2 extends Component {
    constructor(props) {
        super(props);
        this.state= {
            Khoahoc:"ReactJs"
        }
    }
    handlechange=(ev)=> {
        this.setState({
            Khoahoc:ev.target.value
        })
    }
    handleSubmit=(event)=> {
        event.preventDefault();
        alert(this.state.Khoahoc)
    }   
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Khóa học</label>
            <select value={this.state.Khoahoc} name="KhoaHoc" onChange={this.handlechange}>
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='JS'>JS</option>
                <option value='ReactJs'>ReactJs</option>
            </select>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
