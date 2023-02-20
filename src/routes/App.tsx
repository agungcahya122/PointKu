import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";
import ListProduct from "../pages/ListProduct";

import { Profile, EditProfile } from "../pages/Profile";

import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import Profile from "../pages/Profile";
import ListMember from "../pages/ListMember";


function App() {
  const router = createBrowserRouter([
    {
      path: "/login",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/listProduct",
      element: <ListProduct />,
    },
    {
      path: "/addProduct",
      element: <AddProduct />,
    },
    {
      path: "/editProduct",
      element: <EditProduct />,
    },
    {
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/editProfile",
      element: <EditProfile />,
      path: "/listMember",
      element: <ListMember />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
