import React, { Component } from 'react'

export default class NptListTasks extends Component {
    constructor(props) {
        super(props);
        this.state = {
          editingIndex: null,
          newTask: {
            npt_taskId: '',
            npt_taskName: '',
            npt_level: ''
          }
        }
      }
    
      handleEdit = (index) => {
        this.setState({ editingIndex: index, newTask: { ...this.props.renderProducts[index] } });
      }
    
      handleSave = () => {
        let { renderProducts } = this.props;
        let { editingIndex, newTask } = this.state;
      
        // Validate the new task data
        if (!newTask.npt_taskId || !newTask.npt_taskName || !newTask.npt_level) {
          alert('Please fill in all the fields.');
          return;
        }
      
        // Update the existing task
        renderProducts[editingIndex] = { ...newTask };
        this.setState({ editingIndex: null, newTask: { npt_taskId: '', npt_taskName: '', npt_level: '' } });
        this.props.onUpdate(renderProducts);
      }
    
      handleCancel = () => {
        this.setState({ editingIndex: null, newTask: { npt_taskId: '', npt_taskName: '', npt_level: '' } });
      }
    
      handleDelete = (index) => {
        let { renderProducts } = this.props;
        renderProducts.splice(index, 1);
        this.props.onUpdate(renderProducts);
      }
    
      handleInputChange = (e) => {
        this.setState({ newTask: { ...this.state.newTask, [e.target.name]: e.target.value } });
      }
    
      render() {
        let { renderProducts } = this.props;
        let { editingIndex, newTask } = this.state;
    
        let elementProduct = renderProducts.map((item, index) => {
          if (index === editingIndex) {
            return (
              <tr key={index}>
                <td><input type="text" name="npt_taskId" value={newTask.npt_taskId} onChange={this.handleInputChange} /></td>
                <td><input type="text" name="npt_taskName" value={newTask.npt_taskName} onChange={this.handleInputChange} /></td>
                <td><input type="text" name="npt_level" value={newTask.npt_level} onChange={this.handleInputChange} /></td>
                <td>
                  <button onClick={this.handleSave}>Save</button>
                  <button onClick={this.handleCancel}>Cancel</button>
                </td>
              </tr>
            );
          } else {
            return (
              <tr key={index}>
                <td>{item.npt_taskId}</td>
                <td>{item.npt_taskName}</td>
                <td>{item.npt_level}</td>
                <td>
                  <button onClick={() => this.handleEdit(index)}>Edit</button>
                  <button onClick={() => this.handleDelete(index)}>Delete</button>
                </td>
              </tr>
            );
          }
        });
    
        return (
          <div>
            <h2>Danh sách lớp học</h2>
            <table className='table table-bordered'>
              <thead>
                <tr>
                  <th>npt_taskId</th>
                  <th>npt_taskName</th>
                  <th>npt_level</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {elementProduct}
              </tbody>
            </table>
          </div>
        )
      }
    }
