import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class Navbar extends Component {
     render() {
       return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/index" className="navbar-brand">React Contact App</Link>
          <div className="navbar-nav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <link to="/contact" className="nav-link">Contact</link>
              </li>
            </ul>
          </div>
        </nav>
       )
     }   
}
export default Navbar