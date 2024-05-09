import React, { Component } from 'react'
import NptProductAdd from './components/Npt_ProductAdd';
import NptProductList from './components/Npt_ProductList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      products : [
        { title: 'Nguyen Phong Tan', id: 2210900123, status:1},
        { title: 'Garlic', id: 2 , status:2},
        { title: 'Apple', id: 3 , status:3},
        { title: 'Orange', id: 4 , status:4},
      ],
    };
  }

  nptHanldeSubmit = (param)=>{
    console.log("app",param);
    //add them du lieu
    let {products} = this.state;
    products.push(param);
    this.setState({
      products: products
    })
  }
  render() {
    return (
      <div className='container border-mt-5'>
        <h1>Nguyen Phong Tan - Render Data - Event Form</h1>
        <hr/>
        <NptProductList renderProducts={this.state.products}/>
        <hr/>
        <NptProductAdd onSubmit = {this.nptHanldeSubmit}/>
      </div>
    )
  }
}
