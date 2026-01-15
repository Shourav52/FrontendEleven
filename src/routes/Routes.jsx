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
import ForgetPass from "../Pages/ForgetPass.jsx";
import GetBlood from "../compunents/GetBlood.jsx";
import Events from "../compunents/Events.jsx";
import BecomeVolunteer from "../compunents/BecomeVolunteer.jsx";
import RequestTraining from "../compunents/RequestTraining.jsx";
import About from "../compunents/About.jsx";
import Contact from "../compunents/contact.jsx";
import Blog from "../compunents/Blog.jsx";
import Support from "../compunents/Support.jsx";
import Privacy from "../compunents/Privacy.jsx";
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
            path:"/forget/:email",
            element: <ForgetPass></ForgetPass>
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
            element:<Details></Details>,
        },
        {
            path: "/payment-success",
            element: <PaymentSuccess></PaymentSuccess>,
        },
        {
            path: "/get-blood",
            element: <GetBlood></GetBlood>,
        },
        {
            path: "/events",
            element: <Events></Events>,
        },
        {
            path: "/become-a-volunteer",
            element: <BecomeVolunteer></BecomeVolunteer>,
        },
        {
            path: "/training",
            element: <RequestTraining></RequestTraining>,
        },
        {
            path: "/search",
            element: <SearchRequest></SearchRequest>,
        },
        {
            path: "/about",
            element: <About></About>,
        },
        {
            path: "/contact",
            element: <Contact></Contact>,
        },
        {
            path: "/blog",
            element: <Blog></Blog>,
        },
        {
            path: "/support",
            element: <Support></Support>,
        },
        {
            path: "/privacy-policy",
            element:<Privacy></Privacy>,
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
