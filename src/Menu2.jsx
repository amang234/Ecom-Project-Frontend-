import React from 'react'
import { NavLink } from 'react-router-dom';
function Menu() {
    return (
        <>
            <div className="navbar2">
                
                <nav  >
                    <div className="nav-list2">
                        <NavLink to='/' className="nav-link2">Home</NavLink>
                        <NavLink to='/about' className="nav-link2">About</NavLink>


                    </div>
                </nav>

            </div>


        </>
    )
}

export default Menu
