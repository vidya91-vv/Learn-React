import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'


 let App = () => {
  return (<div>
    <Navbar></Navbar>
    <h1>React State Component</h1>

    <Message />

    <button className="btn btn-success">Test</button>
    </div>)
  
 }
 export default App