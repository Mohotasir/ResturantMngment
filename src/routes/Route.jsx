import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/Menu/OurMenu";
import Order from "../Pages/Order/Order";
import Loginl from "../Pages/Login/Loginl";
import Logout from "../Pages/Signup/Signup";
import DashboardLayout from "../Layout/DashboardLayout";
import UserHome from "../Pages/userDashBoard/UserHome/UserHome";
import UserCart from "../Pages/userDashBoard/userCart/UserCart";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <OurMenu></OurMenu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Loginl></Loginl>,
      },
      {
        path: "/signup",
        element: <Logout></Logout>,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
    children: [
      {
        path: "/dashboard/userHome",
        element: <UserHome></UserHome>,
      },{
        path:"/dashboard/usercart",
        element: <UserCart></UserCart>
      }
    ],
  },
]);
