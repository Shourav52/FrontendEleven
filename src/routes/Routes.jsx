import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import MainLayout from "../MainLayout/MainLayout.jsx";
import Home from "../Pages/Home.jsx";
import Login from "../Pages/Login.jsx";
import Signup from "../Pages/Signup.jsx";
import DashboardLayout from "../DashboardLayout/DashboardLayout.jsx";
import MainDashboard from "../Pages/Dashboard/MainDashboard/MainDashboard.jsx";
import CreateDonation from "../Pages/Dashboard/CreateDonation/CreateDonation.jsx";
import ManageDonation from "../ManageDonation/ManageDonation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
        {
            path: "/",
            element: <Home />,
        },
        {
            path: "/login",
            element: <Login />,
        },
        {
            path: "/signup",
            element: <Signup />,
        },
    ]
  },
  {
    path: "/dashboard",
    element: <DashboardLayout></DashboardLayout>,
    children: [
       {
        path: "/dashboard",
        element: <MainDashboard></MainDashboard>
       },
       {
        path: "create-donation",
        element: <CreateDonation></CreateDonation>
       },
       {
        path: "manage-donation",
        element: <ManageDonation></ManageDonation>
       },
    ]
  }
]);

export default router;
