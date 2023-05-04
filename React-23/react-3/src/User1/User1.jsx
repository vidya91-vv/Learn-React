import React, { Component } from 'react'
import Axios from 'axios'
class User1 extends Component {
  constructor(props){
    super(props);
    this.state = {
      users:[]
    }
  }
  componentDidMount(){
    Axios.get('https://jsonplaceholder.typicode.com/user')
    .then((response)=>{
      this.setState({ users: response.data })
      console.log(response.data)
    })
    .catch(()=>{})
  }
  render(){
    return(
      <div>
        <div className="container mt-5">
          <div className="row">
          <pre>{JSON.stringify(this.state.users)}</pre>
          </div>
        </div>
      </div>
    )
  }
}
export default User1