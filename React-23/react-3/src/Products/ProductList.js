import React, { useEffect, Fragment }  from 'react'
import Axios from 'axios'
const ProductList = () => {
  let [products, setProducts] = React.useState([])
  let[errMessage,setErrMessage] = React.useState("")
  useEffect(() => {
    let url = 'http://127.0.0.1:5000/api/products'
    Axios.get(url)
        .then((response) => {
          setProducts(response.data)
        })
        .catch((err) => {
          setErrMessage(err)
        })
  }, []);
  return <>
    <div className="container">
      <div className="row">
        <div className="col-md-8">
            <h1>Product List</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing</p>
        </div>
      </div>
      <div className="row">
          {
            products.length > 0 ? <>
            {
               products.map(() => {
                return <div className="col-md-3">
                  <div className="card">
                    <div className="card-header">
                      <img src={products.image} />
                    </div>
                    <div className="card-body">
                      <ul className="list-group">
                        <li className="list-group-item">{products.list}</li>
                      </ul>
                    </div>
                  </div>
                </div>
               })
            }
            </> : <div> <h5>**** No Products****</h5> </div>
          }
        </div>
      </div>
    
  </>
}
export default ProductList