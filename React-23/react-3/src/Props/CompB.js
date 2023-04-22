import React from 'react'
class CompB extends React.Component{
  //eid=101;
  //ename="Rahul";
  render(){
    return <div>
      <hr />
      <h2>Component B</h2>
      <pre>{JSON.stringify(this.props)}</pre>
      <h2>Wish Message: {this.props.one}</h2>
      <h3>Employee Name: {this.props.emp_Name}</h3>
      <h4>Employee Salary: {this.props.e_sal}</h4>

    </div>
  }
}
export default CompB;