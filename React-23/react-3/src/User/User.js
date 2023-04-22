import React from 'react'
import Employee from '../Employee/Employee'
class User extends React.Component{
  users = [{id:101, name:"Rahul", sal:45000},
  {id:102, name:"Sonia", sal:450000}];
  render(){
    return<React.Fragment>
      <h2>User Component</h2>
      <hr />
      <Employee user_Data = {this.users}/>
    </React.Fragment>
  }
}
export default User