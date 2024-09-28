import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

export default function Navbar() {
  const[searchQuery,setSearchQuery]=useState('Delhi')
  return (
    <div>
      <div className='nav-container' >
        <Link to={'/'} className='link-btn'>Home</Link>
        <Link to={'/about'} className='link-btn'>About</Link>
        <Link to={'/contact'} className='link-btn'>Contact</Link>
        <input type='text' className='input-search' placeholder="Search Any News" />
        <Link to={'/signup'} className='link-btn'>SignUp</Link>
        
        <Link to={'/login'} className='link-btn'>LogIn</Link>
      </div>
      
    </div>
  )
}
