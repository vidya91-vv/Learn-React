
import Greet from './components/Greet'
import Greet1 from './components/Greet1'
import Welcome from './components/Welcome'
import Navbar from './Navbar/Navbar'
import One from './components/One'
import Message from './Message/Message'

 let App = () => {
  return (<div>
    <Greet1 />
    <Greet></Greet>
    <Welcome />

    <Navbar></Navbar>
    <One></One>
      
    <Message />

    </div>)
  
 }
 export default App