import React, { Component } from 'react'

export default class NptProductAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id:0,
            title:'',
            status:0,
        }
    }
    nptHandleChange=(event)=> {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]:value
        })
    }
    nptHandleSubmit=(event)=> {
        event.preventDefault();

        this.props.onSubmit(this.state);
    }
  render() {
    return (
      <div>
        <h2>Them moi san pham</h2>
        <form className='col-md-6'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Basic-addon1">
            Id
          </span>
          <input
            type="text"
            className="form-control"
            name='id'
            value={this.state.id}
            onChange={this.nptHandleChange}
              />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Basic-addon2">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            name='title'
            value={this.state.title}
            onChange={this.nptHandleChange}
              />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="Basic-addon3">
            Status
          </span>
          <input
            type="text"
            className="form-control"
            name='status'
            value={this.state.status}
            onChange={this.nptHandleChange}
              />
        </div>
        <button className='btn btn-success' onClick ={this.nptHandleSubmit}>Add</button>
        </form>
      </div>
    )
  }
}
