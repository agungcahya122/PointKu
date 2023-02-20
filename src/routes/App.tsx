import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useEffect, useState } from "react";

import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";
import ListProduct from "../pages/ListProduct";
import { Profile, EditProfile } from "../pages/Profile";

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
      path: "/profile",
      element: <Profile />,
    },
    {
      path: "/editProfile",
      element: <EditProfile />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
