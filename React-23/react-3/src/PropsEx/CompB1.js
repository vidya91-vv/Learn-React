import React from 'react'
let CompB1 = (props) => {
  return <div>
    <h2>Component B</h2>
    <pre>{JSON.stringify(this.props)}</pre>
    <h2>Wish Message: {this.props.one}</h2>
    <h3>Employee Nmae: {this.props.emp_Name}</h3>
  </div>
}
export default CompB1;