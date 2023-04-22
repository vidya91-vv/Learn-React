import React from 'react'
class Counter extends React.Component{
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
    return<div>
      <h1>Counter Component</h1>
      <h2>Qty: {this.state.qty}</h2>
      <button onClick={this.decrHandler}>Decr</button>
      <button onClick={this.incrHandler}>Incr</button>
    </div>
  }
}
export default Counter