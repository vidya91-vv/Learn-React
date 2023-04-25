import React, { Component } from 'react'

class Employee1 extends Component {
   constructor(props){
    super(props)
    console.log("First Constructor will execute automatically");
    this.state = {
      currentTime:new Date().toLocaleTimeString()
    }
   }
   componentDidMount(){
    setInterval(()=>{ 
      this.setState = ({
        currentTime:new Date().toLocaleTimeString()
      })
    }, 1000)
    console.log("Third - CompDidMount method will excute, after comp fully loaded")
   }
   render(){
    console.log("Second - Render method Will execute")
    return(
      <div>
        <h2>Employee Sal Component</h2>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="card">
                <div className="card-header bg-primary">
                  <h3>Time -- {this.state.currentTime}</h3>
                </div>
                <div className="card-body"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
   }
}
export default Employee1