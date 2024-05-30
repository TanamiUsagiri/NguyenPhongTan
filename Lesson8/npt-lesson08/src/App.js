import React, { Component } from 'react'
import NptListTasks from './component/NptListTasks';
import NptTaskAdd from './component/NptTaskAdd';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state ={
      products :[
        { npt_taskId:1,npt_taskName:"Học lập trình frontend", npt_level:"Small" },
        { npt_taskId:2, npt_taskName:"Học lập trình reactjs",npt_level:"Medium"},
        { npt_taskId:3, npt_taskName:"Lập trình với Frontend - Reactjs",npt_level:"High"},
        { npt_taskId:4, npt_taskName:"Lập trình Fullstack (PHP, Java, NetCore)",npt_level:"Small"},
      
      ]
    }
  }
  nptHandldSumit=(param)=>{
    console.log("App:",param);
    let {products}=this.state;
    products.push(param);
    this.setState({
      products:products
    })
  }
  render() {
    return (
     
      <div className='container border mt-5'>
      <h1>npt-2210900123</h1>
      <hr/>
      <NptListTasks renderProducts={this.state.products}/>
      <hr/>
      <NptTaskAdd onSummit={this.nptHandldSumit}/>
      </div>
    )
  }
}
