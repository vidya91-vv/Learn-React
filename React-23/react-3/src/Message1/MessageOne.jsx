import React, { Component } from 'react'

class MessageOne extends Component {
  state = {
    msg: "Hello"
  }
  
  messageHandler = (msg) => {
    this.setState({msg: msg})
  }
  gaHandler = () => { }
  gnHandler = () => { }
  render(){
    return(
      <div>
        <h2>Wish Message : {this.state.msg}</h2>
        <button onClick={this.messageHandler.bind(this,"GM")}>GM</button>
        <button onClick={this.messageHandler.bind(this,"GA")}>GA</button>

        <button onClick={()=>{this.setState({msg: "Good Night, Go for Dinner"})}}>GN</button>
      </div>
    )
  }
}
export default MessageOne