import React, { Component } from 'react'

class Product extends Component {
  state={
    product_Name:"APPLE iPhone 13",
    image:"https://rukminim1.flixcart.com/image/300/300/ktketu80/mobile/s/l/c/iphone-13-mlpf3hn-a-apple-original-imag6vzz5qvejz8z.jpeg?q=90",
    price: 61999,
    qty: 1
  }
  incrHandler = () => {
    this.setState({
      qty:this.state.qty+1
    })
  }
  decrHandler = () => {}
  render(){
    return(
      <div>
        <div className="container mt-5">
          <div className="row">
            <div className="col-md-7">
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
                    <td>{this.state.product_Name}</td>
                    <td><img src={this.state.image} /></td>
                    <td>{this.state.price}</td>
                    <td><i class="fa fa-minus-circle"></i>{this.state.qty}
                    <i class="fa fa-plus-circle" onClick={this.incrHandler}></i></td>
                    <td>{this.state.qty * this.state.price}</td>
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
export default Product