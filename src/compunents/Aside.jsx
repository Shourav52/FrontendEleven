import React, { useContext } from "react";
import { FaUsers, FaTachometerAlt, FaHandHoldingHeart, FaCogs } from "react-icons/fa";
import { NavLink } from "react-router";
import { AuthContext } from "../Provider/AuthProvider";
import { signOut } from "firebase/auth";
import auth from "../firebase/firebase.config";
import { ArrowRightIcon } from '@heroicons/react/24/outline';





const Aside = () => {
  const { role, roleLoading } = useContext(AuthContext)
  const handleLogOut = () => {
    signOut(auth)
  }


  return (
    <aside className="w-64 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen shadow-lg p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600">
          {role === "admin" && "Admin Panel"}
          {role === "donor" && "Donor Panel"}
          {role === "volunteer" && "Volunteer Panel"}
        </h2>
      </div>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/dashboard/my_profile"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
            }`
          }
        >
          <FaHandHoldingHeart />My Profile
        </NavLink>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
            }`
          }
        >
          <FaTachometerAlt /> Dashboard
        </NavLink>

        {
          role == 'donor' && (
            <NavLink
              to="/dashboard/create-donation"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
                }`
              }
            >
              <FaHandHoldingHeart /> Create Donations
            </NavLink>
          )
        }

        {
          role == 'donor' && (
            <NavLink
              to="/dashboard/manage-donation"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
                }`
              }
            >
              <FaHandHoldingHeart />My Requests
            </NavLink>
          )
        }


        {
          role == 'admin' && (<NavLink
            to="/dashboard/allusers"
            className={({ isActive }) =>
              `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
              }`
            }
          >
            <FaUsers />All Users
          </NavLink>
          )
        }

        {
          role == 'admin' && (
            <NavLink
              to="/admin/settings"
              className={({ isActive }) =>
                `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
                }`
              }
            >
              <FaCogs /> Add Volunteer
            </NavLink>
          )
        }

      </nav>
      <div className="mt-auto">
        <button onClick={handleLogOut} className="flex items-center gap-3 p-3 w-full text-left hover:bg-red-500 rounded-2xl">
          <ArrowRightIcon className="h-5 w-5 text-white" />

          Logout
        </button>

      </div>
    </aside>
  );
};

export default Aside;
