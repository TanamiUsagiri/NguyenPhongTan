import React, { Component } from 'react'

export default class NPT_Form1 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName:"Tanami"
        }
    }

    handleChange = (ev) => {
        let ten = ev.target.name;
        let gtri = ev.target.value;

        this.setState({
            [ten]: gtri,
            studentName:ev.target.value
        })
    }
    handleSubmit = (ev) => {
        ev.preventDefault();
        alert(this.state.studentName)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <div>
                <label>Name</label>
                <input name='studentName' value={this.state.studentName}
                    onChange={this.handleChange}
                    // onchange={(ev)=>{this.setState(ev.target.value)}}
                    />
            </div>
            <button>Submit</button>
        </form>
      </div>
    )
  }
}
