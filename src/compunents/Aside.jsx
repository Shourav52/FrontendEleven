import React from "react";
import { FaUsers, FaTachometerAlt, FaHandHoldingHeart, FaCogs } from "react-icons/fa";
import { NavLink } from "react-router";

const Aside = () => {
  return (
    <aside className="w-64 bg-gradient-to-b from-blue-50 to-blue-100 min-h-screen shadow-lg p-6">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-blue-600">Admin Panel</h2>
      </div>

      <nav className="flex flex-col gap-3">
        <NavLink
          to="/dashboard/main"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${
              isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
            }`
          }
        >
          <FaTachometerAlt /> Dashboard
        </NavLink>



        <NavLink
          to="/dashboard/create-donation"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${
              isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
            }`
          }
        >
          <FaHandHoldingHeart /> Create Donations
        </NavLink>

        <NavLink
          to="/admin/settings"
          className={({ isActive }) =>
            `flex items-center gap-3 p-3 rounded-lg font-semibold hover:bg-blue-200 transition ${
              isActive ? "bg-blue-200 text-blue-700" : "text-gray-700"
            }`
          }
        >
          <FaCogs /> Settings
        </NavLink>
      </nav>
    </aside>
  );
};

export default Aside;
