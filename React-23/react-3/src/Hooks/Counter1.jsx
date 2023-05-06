import React, { useState } from 'react'

const Counter1 = () => {
  let [product, setProduct] = useState({
    prod_Name: "iPhone 14 Pro",
    image: "https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcSOO1JDPUNwcPiqzHYhaL_zpJA0Ymlr6mD9sSgTPad_JYdrk-o",
    price: 49900,
    qty: 1
  });
  let increHandler = () => { 
    setProduct({ ...product, qty: product.qty + 1 })
  }
  let decrHandler = () => {
    setProduct({ ...product, qty: product.qty - 1 })
   }
  return(
    <div className="container mt-5">
     <div className="row">
      <div className="col-md-6">
        <table className="table table-hover">
          <thead className="bg-dark text-white">
            <tr>
              <th>Product Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Qty</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{product.prod_Name}</td>
              <td><img src={product.image} height="50px"/></td>
              <td>{product.price}</td>
              <td><i className="fa fa-minus-circle" onClick={decrHandler}></i>{product.qty}<i className="fa fa-plus-circle" onClick={increHandler}></i></td>
              <td>{product.qty * product.price}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    </div>
  )
}
export default Counter1