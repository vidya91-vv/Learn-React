import React from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Message/Message'
import Message1 from './Message/Message1'
import Counter from './Counter/Counter'


 let App = () => {
  return (<div>
    <Navbar></Navbar>
    <h1>React State Component</h1>

    
    <Message1 />
    <Counter />

    <button className="btn btn-success">Test</button>
    </div>)
  
 }
 export default App