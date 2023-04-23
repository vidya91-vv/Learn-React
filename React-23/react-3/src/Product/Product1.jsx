import React, { Component } from 'react'

class Product1 extends    Component {
    state={
      product:{
      name: "POCO M4 5G (Cool Blue, 64 GB)",
    image:"https://rukminim1.flixcart.com/image/300/300/l2jcccw0/mobile/i/p/o/-original-imagdu8j9vxscfdh.jpeg?q=90",
    price: 19999,
    qty: 2
      }
    
  }
  incrHandler = () => {
    this.setState({
      product: {...this.state.product, qty: this.state.product.qty + 1}
    })
  }
  decrHandler = () => {
    this.setState({
      product:{...this.state.product, qty:this.state.product.qty - 1}
    })
  }
  render(){
    return(
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-8">
              <table className="table table-hover">
                <thead className="bg-info">
                  <th>Name</th>
                  <th>Image</th>
                  <th>Price</th>
                  <th>Qty</th>
                  <th>Totle Price</th>
                </thead>
                <tbody>
                  <tr>
                    <td>{this.state.product.name}</td>
                    <td><img src={this.state.product.image} /></td>
                    <td>{this.state.product.price}</td>
                    <td><i className="fa fa-minus-circle" onClick={this.incrHandler}></i>{this.state.product.qty}
                    <i className="fa fa-plus-circle" onClick={this.decrHandler}></i></td>
                    <td>{this.state.product.qty * this.state.product.price}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Product1