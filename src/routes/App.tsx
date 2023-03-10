import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { useEffect, useState } from "react";

import Register from "../pages/Auth/Register";
import Login from "../pages/Auth/Login";
import Home from "../pages/Home";
import ListProduct from "../pages/ListProduct";

import { Profile, EditProfile } from "../pages/Profile";

import AddProduct from "../pages/AddProduct";
import EditProduct from "../pages/EditProduct";
import { AddMember, EditMember, ListMember } from "../pages/ListMember";
import useCookies from "react-cookie/cjs/useCookies";

import { Report } from "../pages/Report";
import DetailTransaksi from "../pages/DetailTransaksi";
import axios from "axios";

function App() {
  const [cookie, , removeCookie] = useCookies(["token"]);
  const [responseToken, setResponseToken] = useState<string>("");
  // console.log(responseToken);
  const checkToken = cookie.token;

  axios.interceptors.request.use(function (config) {
    config.headers = config.headers ?? {};
    config.headers.Authorization = `Bearer ${cookie.token}`;
    return config;
  });

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("token") || "{}");
    setResponseToken(data);
  }, []);

  const router = createBrowserRouter([
    {
      path: "/home",
      element: checkToken && responseToken ? <Home /> : <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/listProduct",
      element: checkToken ? <ListProduct /> : <Navigate to={"/"} />,
    },
    {
      path: "/addProduct",
      element: checkToken ? <AddProduct /> : <Navigate to={"/"} />,
    },
    {
      path: "/editProduct/:product_id",
      element: checkToken ? <EditProduct /> : <Navigate to={"/"} />,
    },
    {
      path: "/profile",
      element: checkToken ? <Profile /> : <Navigate to={"/"} />,
    },
    {
      path: "/editProfile",
      element: checkToken ? <EditProfile /> : <Navigate to={"/"} />,
    },
    {
      path: "/listMember",
      element: checkToken ? <ListMember /> : <Navigate to={"/"} />,
    },
    {
      path: "/addMember",
      element: checkToken ? <AddMember /> : <Navigate to={"/"} />,
    },
    {
      path: "/editMember/:customer_id",
      element: checkToken ? <EditMember /> : <Navigate to={"/"} />,
    },
    {
      path: "/report",
      element: checkToken ? <Report /> : <Navigate to={"/"} />,
    },
    {
      path: "/addMember",
      element: <AddMember />,
    },
    {
      path: "/editMember",
      element: <EditMember />,
    },
    {
      path: "/detail-transaksi",
      element: <DetailTransaksi />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
