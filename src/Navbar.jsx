// import React from 'react';
// import './Navbar.css';
// import { NavLink } from 'react-router-dom';

// function Navbar() {
//   return (
//     <div className='navbarcontainer'>
//       <span>Madelyn Torff</span>
//       <div>
//         <NavLink to="/about">About</NavLink>
//         <NavLink to="/home">Projects</NavLink>
//         <NavLink to="/contacts">Contacts</NavLink>
//       </div>
//     </div>
//   );
// }

// export default Navbar;



import React from 'react'
import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <nav className='navbar-container'>
      <span className='website-logo'>
         Madelyn Torff  
      </span>
      <ul className='nav-items-container'>
        <li className='nav-item'>
          <NavLink to="/" className="link">
            About
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/details" className="link">
            Projects
          </NavLink>
        </li>
        <li className='nav-item'>
          <NavLink to="/contactdetails" className="link">
            Contacts
          </NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Header;






















