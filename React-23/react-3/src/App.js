import React from 'react'
import Navbar from './Navbar/Navbar'
//import Message from './Message/Message'
//import Message1 from './Message/Message1'
import Counter from './Counter/Counter'
import Counter1 from './Counter/Counter1'


 let App = () => {
  return (<div>
    <Navbar></Navbar>
    

    
    
    <Counter />
    <Counter1 />

    <button className="btn btn-success">Test</button>
    </div>)
  
 }
 export default App