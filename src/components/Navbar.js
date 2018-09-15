import React from 'react';
import { NavLink } from 'react-router-dom';

export default ({ currentPath }) => (
  <nav className='navbar'>
    <ul className='nav-links'>
      <li className='nav-link'><NavLink disabled={currentPath === '/'} to='/'>Home</NavLink></li>
      <li className='nav-link'><NavLink disabled={currentPath === '/projects/all'} to='/projects/all'>Projects</NavLink></li>
      <li className='nav-link'><NavLink disabled={currentPath === '/contact'} to='/contact'>Contact</NavLink></li>
    </ul>
  </nav>
);