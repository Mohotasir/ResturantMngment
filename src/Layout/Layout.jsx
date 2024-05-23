import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

export default function Layout() {
  return (
    <div>
      <div>
        <NavBar></NavBar>
      </div>
        <Outlet></Outlet>
        <Footer></Footer>
    </div>
  )
}
