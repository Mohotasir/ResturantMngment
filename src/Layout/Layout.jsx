import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavBar from "../Pages/Shared/NavBar/NavBar";

export default function Layout() {
  const location = useLocation();
  const noHeaderFooter = location.pathname.includes('login')
  return (
    <div>
      <div>
        {noHeaderFooter || <NavBar></NavBar>}
      </div>
        <Outlet></Outlet>
       {noHeaderFooter ||  <Footer></Footer>}
    </div>
  )
}
