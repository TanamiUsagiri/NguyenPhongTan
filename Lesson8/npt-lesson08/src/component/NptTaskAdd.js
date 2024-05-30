import React, { Component } from 'react'

export default class NptTaskAdd extends Component {
    constructor(props) {
        super(props);
        this.state = {
            npt_taskld: 0,
            npt_taskName: '',
            npt_level: ''
        }

    }
    nptHandleChange = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        this.setState({
            [name]: value
        })
    }
    //submid form
    nptHandleSubmit = (ev) => {
        console.log("Form2", this.state);
        ev.preventDefault();
        this.props.onSummit(this.state);
    }
  render() {
    return (
        <div>
        <h2>them moi lop hoc</h2>
        <form className='col-md-6'>

            <div className="input-group mb-3">
                <span className="input-group-text" id="basic-addon1">
                    npt_taskld
                </span>
                <input
                    type="text"
                    className="form-control"

                    name='npt_taskld'
                    value={this.state.npt_taskld}
                    onChange={this.nptHandleChange}
                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="t">
                    npt_taskName
                </span>
                <input
                    type="text"
                    className="form-control"

                    name='npt_taskName'
                    value={this.state.npt_taskName}
                    onChange={this.nptHandleChange}

                />
            </div>
            <div className="input-group mb-3">
                <span className="input-group-text" id="title">
                    npt_level
                </span>
                <input
                    type="text"
                    className="form-control"

                    name='npt_level'
                    value={this.state.npt_level}
                    onChange={this.nptHandleChange}

                />
            </div>
            <button className='btn btn-success' onClick={this.nptHandleSubmit}>ghi lai</button>

        </form>
    </div>
    )
  }
}
