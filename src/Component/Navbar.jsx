import React from 'react'
import { NavLink } from 'react-router';



const Navbar = () => {
  return (
    <div style={{ 
      display: 'flex', 
      justifyContent: 'space-around', 
      alignItems: 'center', 
      backgroundColor: '#f0f0f0', 
      padding: '10px',
      borderRadius: '5px'
    }}>
      
      <NavLink to="/home" style={({ isActive }) => ({
         color: isActive ? "red" : "#007BFF",
       })}>Home</NavLink>
      <NavLink to="/about" style={({ isActive }) => ({
         color: isActive ? "red" : "#007BFF",
       })} >About</NavLink>
      <NavLink to="/contact" style={({ isActive }) => ({
         color: isActive ? "red" : "#007BFF",
       })}>Contact</NavLink>
      
    </div>
  )
}

export default Navbar
