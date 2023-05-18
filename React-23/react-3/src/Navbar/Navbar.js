import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
     
       return(
        <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
          <Link to="/index" className="navbar-brand">Product CRUD Example</Link>
          <div className="ml-auto">
            <ul className="navbar-nav">
            <li className="nav-list"><Link className='nav-link' to="/products">Products</Link></li>
            <li className="nav-list"><Link className='nav-link' to="/createproduct">CreateProduct</Link></li>
                
            </ul>
          </div>
        </nav>
       )
        
}
export default Navbar