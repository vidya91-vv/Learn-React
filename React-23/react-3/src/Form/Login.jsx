import React from 'react'
class  Login extends React.Component{
  state={
    email:"",
    password:""
  }

  emailHandler = (event) => {
    /*console.log(event)
    console.log(event.target)
    console.log(event.terget.value)*/
     this.setState({email:event.target.value})
  }
  passwordHandler = (event) => {
     console.log("Test Case 123 - pass")
     this.setState({password:event.target.value})
  }
  submitHandler = (event) => {event.preventDefault();
    console.log(this.state);
  }
  render(){
    return<div>
      <h2>Login Page</h2>
      <pre>{JSON.stringify(this.state)}</pre>
      <form onSubmit={this.submitHandler}>
        <lable htmlFor="">Email</lable>
        <input type="text"  onChange={this.emailHandler}/>
        <br />
        <br />
        <lable>Password</lable>
        <input type="text" onChange={this.passwordHandler} />
        <br />
        <br />
         <input type="submit" value="Login"/>
      </form>
    </div>
  }
}
export default Login