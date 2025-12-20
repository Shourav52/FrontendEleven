import React, { useContext } from 'react'
import { Link, NavLink } from 'react-router'
import { AuthContext } from '../Provider/AuthProvider';
import { signOut } from 'firebase/auth';
import auth from '../firebase/firebase.config';
import Donate from '../Pages/Donate/Donate';
import bicon from '../assets/bicon.png'
const Navbar = () => {
  const { user } = useContext(AuthContext);
  const logout = () => {
    signOut(auth)
  }
  return (
    <div className=''>
      <div className="navbar bg-gradient-to-r from-red-500 to-red-300 text-yellow-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown ">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
              <li>
              <NavLink
                to="/allrequest"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-100 text-red-700 font-semibold"
                    : "text-slate-700"
                }
              >
                All Request
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-100 text-red-700 font-semibold"
                    : "text-slate-700"
                }
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  isActive
                    ? "bg-emerald-100 text-emerald-700 font-semibold"
                    : "text-slate-700"
                }
              >Donate</NavLink>
            </li>
            </ul>
          </div>
         <div className='flex justify-center items-center gap-3'>
          <Link to={'/'}> <img className='w-11 h-10 rounded-4xl' src={bicon} alt="" /></Link>
         
           <Link to={'/'} className="text-xl font-bold ">Blood Donation Center</Link>
         </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 font-extrabold">
            <li>
              <NavLink
                to="/allrequest"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-100 text-red-700 font-semibold"
                    : "text-yellow-200"
                }
              >
                All Request
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/search"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-100 text-red-700 font-semibold"
                    : "text-yellow-200"
                }
              >
                Search
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/donate"
                className={({ isActive }) =>
                  isActive
                    ? "bg-red-100 text-red-700 font-semibold"
                    : "text-yellow-200"
                }
              >Donate</NavLink>
            </li>
          </ul>
        </div>
        <div className="navbar-end gap-3">
          <Link to={"/dashboard"} className="bg-red-500 hover:bg-red-400 hover:font-extrabold text-yellow-100  px-4 py-2 rounded-lg font-semibold  transition">Dashboard</Link>
          {
            user ? <button onClick={logout} className="hover:bg-red-300 bg-gradient-to-r btn from-red-800 to-red-500 text-slate-200">Logout</button> : <Link to={'/login'} className="btn bg-gradient-to-r from-red-800 to-red-500 hover:bg-red-300 text-yellow-100 rounded-lg">Login</Link>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar
