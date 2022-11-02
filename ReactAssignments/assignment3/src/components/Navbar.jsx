import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg " style={{ backgroundColor: "#5093b3" }}>
  

  <div className="container-fluid">
  <Link to='/Home' className="nav-link active">Home</Link>
  
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
      
        <li className="nav-item">
          <Link to='/Login' style={{color: 'black', marginRight: '10px'}}>Login</Link>
        </li>
        <li className="nav-item">
        <Link to='/Register' style={{color: 'black', marginRight: '10px'}}>Register</Link>
        </li>
        
      </ul>
    </div>
  </div>
</nav>

  )
}
