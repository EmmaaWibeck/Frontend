import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container">
        <Link className='navbar-brand' to='/'> Issue handler </Link>
        <ul className="nav-links">
          <li><NavLink to='/' className='nav-link'>Issues</NavLink></li>
          <li><NavLink to='/create' className='nav-link'>Create</NavLink></li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar