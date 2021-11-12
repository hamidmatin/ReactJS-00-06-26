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
        <NavLink to="/hook" activeClassName='active-link'>Hook</NavLink>
        <NavLink to="/users" activeClassName='active-link'>Users</NavLink>
        <NavLink to="/posts" activeClassName='active-link'>Posts</NavLink>
        <NavLink to="/hoc-intro" activeClassName='active-link'>HOC Introduction</NavLink>
        <NavLink to="/test-redux" activeClassName='active-link'>Redux</NavLink>
        <NavLink to="/test-context" activeClassName='active-link'>Context</NavLink>
      </nav>
    </div>
  )
}
