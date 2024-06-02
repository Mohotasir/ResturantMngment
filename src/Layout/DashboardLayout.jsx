import { NavLink, Outlet } from "react-router-dom";

export default function DashboardLayout() {
  const isAdmin = true;
  return (
    <div className="flex gap-2 ">
      <div className="w-64 bg-orange-300 min-h-screen py-24 text-lg font-semibold  ">
        {isAdmin ? (
          <>
            <ul className="flex flex-col gap-6 justify-center text-center items-center">
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/adminHome"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                Admin Home
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/addItems"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                 Add Items
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/manageItems"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                  Manage Items
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/manageBooking"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                  Manage Booking
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/allUsers"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                  All Users
                </NavLink>
              </li>
            </ul>
          </>
        ) : (
          <>
            <ul className="flex flex-col gap-6 justify-center text-center items-center">
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/userHome"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                  User Home
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/reservation"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                 Add Items
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/usercart"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                  My cart
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/paymenthistory"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                  Payment History
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/addreview"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                  Add Review
                </NavLink>
              </li>
              <li className="w-full   border-b-2">
                <NavLink
                  to="/dashboard/userbooking"
                  style={({ isActive }) => {
                    return {
                      color: isActive && "white",
                    };
                  }}
                >
                  My Booking
                </NavLink>
              </li>
            </ul>
          </>
        )}
        <ul className="flex flex-col gap-6 justify-center text-center items-center">
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
        </ul>
      </div>
      <div className=" flex-1">
        <Outlet></Outlet>
      </div>
    </div>
  );
}
