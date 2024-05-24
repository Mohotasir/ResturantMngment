import {
    createBrowserRouter,
  } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";

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
         }
         
      ]
    },
  ]);