import React, { Component } from 'react'

export class Registration extends Component {
  state={
    username: "",
    email: "",
    password: "",
    mobile: "",
    termsconditions: false

  }
  updateFormHandler = (event) => {
    this.setState({ [event.target.name]: event.target.value })
  }
  submitHandler = (event) => {
    event.preventDefault();
    console.log(this.state)
  }
  render(){
    return(
      <div className="container mt-5">
        <pre>{JSON.stringify(this.state)}</pre>
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <form onSubmit={this.submitHandler}>
                  <div className="form-group">
                    <input type="text" name="userName" className="form-control" placeholder="User Name" onChange={this.updateFormHandler}></input>
                  </div>

                  <div className="form-group">
                    <input type="text" name="Email" className="form-control" placeholder="Email Id" onChange={this.updateFormHandler}></input>
                  </div>

                  <div className="form-group">
                    <input type="text" name="Password" className="form-control" placeholder="Password" onChange={this.updateFormHandler}></input>
                  </div>
     
                  <div className="form-group">
                    <input type="text" name="Mobile" className="form-control" placeholder="Mobile No" onChange={this.updateFormHandler}></input>
                  </div>

                  <div>
                    <input type="checkbox" /> pleace accept terms and conditions
                  </div>
                  <br />

                  <div className="form-group">
                    <input type="submit" className="btn btn-primary" onChange={this.updateFormHandler}></input>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Registration