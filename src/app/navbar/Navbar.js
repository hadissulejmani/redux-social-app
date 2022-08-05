import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <nav>
        <Link to="/" className="brand">
          <h1 style={{ color: 'white' }}>Social App</h1>
        </Link>
        <Link to="/create-post">Create</Link>
      </nav>
    </div>
  )
}

export default Navbar
