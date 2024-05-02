import React, { Component } from 'react'

export default class NPT_Form3 extends Component {
    constructor(props) {
        super(props);
        this.state = {
            studentName:'Tanami',
            age:21,
            course:'ReactJs'
        }
    }
    handleChange = ev => {
        let name=ev.target.name;
        let val=ev.target.value;
        this.setState({
            [name]:val
        })
    }

    handleSubmit=(event)=> {
        event.preventDefault();
        alert(this.state.studentName +"\n" + this.state.age +"\n" + this.state.course);
        let obj = {
            studentName:this.state.studentName,
            age:this.state.age,
            course:this.state.course
        }
        this.props.onSubmit(obj)
    } 
  render() {
    
    return (
      <div>
        <form name="NPTForm">
            <div>
                <label>Name</label>
                <input name='studentName' value={this.state.studentName}
                    onChange={this.handleChange}/>
            </div>
            <div>
                <label>Age</label>
                <input age='age' value={this.state.age}
                    onChange={this.handleChange}/>
            </div>
            <div>
            <label>Course</label>
            <select value={this.state.course} name="corse" onChange={this.handleChange}>
                <option value='HTML'>HTML</option>
                <option value='CSS'>CSS</option>
                <option value='JS'>JS</option>
                <option value='ReactJs'>ReactJs</option>
            </select>
            </div>
            <button onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}
