import React, { Component } from 'react'
import Navbar from './Navbar/Navbar'
import Message from './Hooks/Message'
import Counter1 from './Hooks/Counter1'
//import Index from './Home/Index'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


//import ContactApp from './ContactApp/ContactApp'


 class App extends Component {
  render(){
  return (
    <div>

    <Router>
       <Navbar />
       <Routes>
           <Route path="/useState" element={<Message />} />
           <Route path="/counter1" element={<Counter1 />} />
       </Routes>
    </Router>

    </div>)
  }
 }
 export default App