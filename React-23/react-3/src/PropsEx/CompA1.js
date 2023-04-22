import CompB1 from'./CompB1'
let CompA1 = () => {
  let ename="Rahul"
  let salary = 45000;
  return <div>
    <h1>Component A</h1>
    <hr />
    <CompB1 one={"GM"} emp_Name={ename} e_sal={salary}/>
    
  </div>
}
export default CompA1