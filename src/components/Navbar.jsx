import React from 'react'
import { Outlet,Link } from 'react-router-dom'
import useAuth from '../hooks/AuthProvider'

const Navbar = () => {
  return (
    <>
    <nav>
    <div className="container">
      <div className="navbar">
        <ul>
          <li>
          <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/goals">Goals</Link>
          </li>
          {useAuth.isAuth && (
            <li>
              <Link to="/profile">Profile</Link>
            </li>
          )}
        </ul>

        {useAuth.isAuth && (
          <ul>
            <li>
              <button onClick={() => useAuth.logoutAction()}>Logout</button>
            </li>
          </ul>
         )}
      </div>
    </div>
  </nav>   
  </>
  )
}

export default Navbar