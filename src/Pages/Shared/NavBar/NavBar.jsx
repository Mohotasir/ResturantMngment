import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";
import { IoCart } from "react-icons/io5";
import useCart from "../../../hooks/HookCart/useCart";
export default function NavBar() {
  const { user, logOut } = useContext(AuthContext);
  const [cart] = useCart();
  console.log(cart)
  const handleLogout = () => {
    logOut()
      .then()
      .catch((error) => console.log(error));
  };
  const options = (
    <>
      <li>
        <NavLink
          to="/"
          style={({ isActive }) => {
            return {
              color: isActive && "orange",
            };
          }}
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/menu"
          style={({ isActive }) => {
            return {
              color: isActive && "orange",
            };
          }}
        >
          Our Menu
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/service"
          style={({ isActive }) => {
            return {
              color: isActive && "orange",
            };
          }}
        >
          Service
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/order"
          style={({ isActive }) => {
            return {
              color: isActive && "orange",
            };
          }}
        >
          Our Shop
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/dashboard/usercart"
          style={({ isActive }) => {
            return {
              color: isActive && "orange",
            };
          }}
        >
          <button className="flex gap-2 justify-center items-center border rounded-xl p-1 ">
            <IoCart />
            <div className="badge badge-secondary">+{cart.length}</div>
          </button>
        </NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar fixed py-6 z-10 bg-opacity-80 bg-black text-white">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              {options}
            </ul>
          </div>
          <a className="btn btn-ghost text-xl">Bristo Boss</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="flex gap-8">{options}</ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <>
              <Link
                onClick={handleLogout}
                className="btn  btn-sm py-2 bg border-none mr-2"
              >
                Log out
              </Link>
              <img
                className="w-[30px] h-[30px] rounded-full"
                src={user.photoURL}
                alt=""
              />
            </>
          ) : (
            <>
              <Link
                className="btn  btn-sm py-2 bg border-none mr-2"
                to="/login"
              >
                Log in
              </Link>
              <Link
                className="btn  btn-sm py-2 bg border-none mr-2"
                to="/signup"
              >
                Sign up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
