import React, { Component } from 'react'

class ContactList extends Component {
  render(){
    return(
      <div>
        <h1>Contact List</h1>
        <pre>{JSON.stringify(this.props)}</pre>
        <div className="container">
          <div className="row">
            <div className="col">
              <table className="table table-hover">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>City</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    this.props.contacts.map((contact)=> {
                      return <tr>
                        <td>{contact.login.uuid.substring(32, 36)}</td>
                        <td>{contact.name.first}</td>
                        <td>{contact.email}</td>
                        <td>{contact.location.city}</td>
                      </tr>
                    })
                  } 
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ContactList