import React, { useState } from 'react';
import Axios from 'axios';

const CreateProduct = () => {
  const [product, setProduct] = useState({ name: '', image: '', price: '', qty: 1, info: '' });
  const [errorMessage, setErrorMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const changeInput = (event) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const changeImageHandler = async (event) => {
    const imageFile = event.target.files[0];
    const reader = new FileReader();

    reader.addEventListener('load', () => {
      if (reader.result) {
        setProduct({
          ...product,
          image: reader.result,
        });
      } else {
        alert('Error');
      }
    });

    reader.readAsDataURL(imageFile);
  };

  const submitProduct = (event) => {
    event.preventDefault();
    const url = 'http://127.0.0.1:5000/api/products/';

    Axios.post(url, product)
      .then((response) => {
        setSubmitted(response.data);
      })
      .catch((err) => {
        setErrorMessage(err);
      });
  };

  return (
    <React.Fragment>
      <div className="container mt-5">
        <pre>{JSON.stringify(product)}</pre>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <div className="card-header">
                <h3>Create Product</h3>
              </div>
              <div className="card-body">
                <form onSubmit={submitProduct}>
                  <div className="form-group">
                    <input
                      type="text"
                      name="name"
                      onChange={changeInput}
                      className="form-control"
                      placeholder="Product Name"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="file"
                      name="image"
                      id="customerFile"
                      required
                      onChange={changeImageHandler}
                      className="form-control"
                      placeholder="Product Image"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="price"
                      onChange={changeInput}
                      className="form-control"
                      placeholder="Price"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="qty"
                      onChange={changeInput}
                      className="form-control"
                      placeholder="Qty"
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="text"
                      name="info"
                      onChange={changeInput}
                      className="form-control"
                      placeholder="Information"
                    />
                  </div>
                  <input type="submit" value="Create Product" className="btn btn-primary" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default CreateProduct;
