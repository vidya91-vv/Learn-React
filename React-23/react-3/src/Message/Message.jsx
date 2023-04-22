import React from 'react'
class Message extends React.Component{
  message = "Hello";
  getHandler = () => {
    this.message = "Good Morning"
    this.forceUpdate()
  }
  render(){
    return<>
    <h1>Message Component</h1>
    <h3>Message: {this.message}</h3>
    <button onClick={this.getHandler}>GM</button>
    
    <button>GN</button>
    </>
  }
}
export default Message