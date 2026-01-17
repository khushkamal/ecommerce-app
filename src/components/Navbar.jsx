import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <h1 className="text-white text-2xl font-bold">E-Commerce</h1> 

        <Link to="/login" className="text-gray-300 hover:text-white ml-4">Login</Link> 
      </nav>
    </div>
  )
}

export default Navbar