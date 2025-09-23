import React from 'react'
import { NavLink } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
    <ul className="navbar-nav ml-auto">
        <li className="nav-item">
            <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>Home</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/about" className={({ isActive }) => (isActive ? "active" : "")}>About</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/course" className={({ isActive }) => (isActive ? "active" : "")}>Course</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/event" className={({ isActive }) => (isActive ? "active" : "")}>Event</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/blog" className={({ isActive }) => (isActive ? "active" : "")}>Blog</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/teacher" className={({ isActive }) => (isActive ? "active" : "")}>Teacher</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>Contact</NavLink>
        </li>
        <li className="nav-item">
            <NavLink to="/login" className={({ isActive }) => (isActive ? "active" : "")}>login</NavLink>
        </li>
    </ul>
    </>
  )
}

export default Navigation