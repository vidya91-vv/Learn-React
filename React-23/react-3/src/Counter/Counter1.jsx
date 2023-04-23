import React from 'react'
class Counter1 extends React.Component{
  state = {
    qty: 1
  }
  decrHandler = () => {
    this.setState({
      qty: this.state.qty-1
    })
  }
  incrHandler = () => {
    this.setState({
      qty: this.state.qty+1
    })
  }
  render(){
    return <React.Fragment>
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-6">
            <div className="card">
              <div className="card-header">
                <h5>Qty:{this.state.qty}</h5>
                 <div className="card-body">
                  <button className="btn btn-success mr-5 onClick={this.decrHandler}">DECR</button>
                  <button className="btn btn-warning onClick={this.incrHandler}">INCR</button>
                 </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  }
}
  export default Counter1