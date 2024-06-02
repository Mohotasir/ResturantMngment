import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import Order from "../Pages/Order/Order";
import Loginl from "../Pages/Login/Loginl";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout></Layout>,
      children:[
         {
          path : "/",
          element: <Home></Home>
         },
         {
          path: "/menu",
          element: <OurMenu></OurMenu>
         },
         {
          path:"/order",
          element:<Order></Order>
         },
         {
          path:"/login",
          element: <Loginl></Loginl>
         }
         
      ]
    },
  ]);