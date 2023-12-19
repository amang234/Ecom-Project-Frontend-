import React from 'react'
import { NavLink } from 'react-router-dom';
function Menu() {
  return (
    <>
    <div className="navbar">
      <div className="menu-main">
        <div className="brand-logo">
          <h1>Befap</h1>
        </div>
      </div>
      <nav  >
        <div className="nav-list">
          <NavLink to='/' className="nav-link">Home</NavLink>
          <NavLink to='/about' className="nav-link">About</NavLink>
          

        </div>
      </nav>

    </div>


    </>
  )
}

export default Menu
