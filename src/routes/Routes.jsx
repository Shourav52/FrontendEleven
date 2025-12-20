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
import AllUsers from "../AllUsers/AllUsers.jsx";
import PrivateRoute from "./PrivateRoute.jsx";
import Donate from "../Pages/Donate/Donate.jsx";
import PaymentSuccess from "../Pages/PaymentSuccess/PaymentSuccess.jsx";
import SearchRequest from "../Pages/SearchRequest/SearchRequest.jsx";
import Request from "../Pages/Request.jsx";
import Details from "../Pages/Details.jsx";
import MyProfile from "../Pages/Dashboard/MyProfile.jsx";
import Edit from "../Pages/Dashboard/Edit.jsx";
import AdminDashboard from "../Pages/Dashboard/AdminDashboard.jsx";
import DashboardHome from "../Pages/Dashboard/DeshboardHome.jsx";
import AllUserRequest from "../Pages/Dashboard/AllUserRequest.jsx";
import Volenteer from "../Pages/Dashboard/Volenteer.jsx";
import AllBdDonationReq from "../Pages/Dashboard/AllBdDonationReq.jsx";

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
        {
            path: "/donate",
            element:<PrivateRoute><Donate></Donate></PrivateRoute> ,
        },
        {
            path: "/allrequest",
            element:<Request></Request> ,
        },
        {
            path: "/donation-request/:id",
            element:<PrivateRoute><Details></Details></PrivateRoute> ,
        },
        {
            path: "/payment-success",
            element: <PaymentSuccess></PaymentSuccess>,
        },
        {
            path: "/search",
            element: <SearchRequest></SearchRequest>,
        },
    ]
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
       {
        path: "/dashboard",
        element: <DashboardHome></DashboardHome>
       },
       {
        path: "/dashboard",
        element: <AdminDashboard></AdminDashboard>
       },
       {
        path: "/dashboard",
        element: <Volenteer></Volenteer>
       },
       {
        path: "/dashboard/all-blood-donation-request",
        element: <AllBdDonationReq></AllBdDonationReq>
       },
       {
        path: "allusersRequest",
        element: <AllUserRequest></AllUserRequest>
       },
       
       {
        path: "/dashboard/my_profile",
        element: <MyProfile></MyProfile>
       },

       {
        path: "/dashboard/edit-donation/:id",
        element: <Edit></Edit>
       },
       {
        path: "create-donation",
        element: <CreateDonation></CreateDonation>
       },
       {
        path: "allusers",
        element: <AllUsers></AllUsers>
       },
       {
        path: "manage-donation",
        element: <ManageDonation></ManageDonation>
       },
      
    ]
  }
]);

export default router;
