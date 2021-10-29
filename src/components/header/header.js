import React from 'react'
import { NavLink } from 'react-router-dom'
import './header.css'

export const Header = () => {
  return (
    <div>
      <header className='header'>
        Header
      </header>
      <nav className='nav'>
        <NavLink to="/" exact activeStyle={{fontStyle: 'italic'}}>Home</NavLink>
        <NavLink to="/users" activeClassName='active-link'>Users</NavLink>
      </nav>
    </div>
  )
}
