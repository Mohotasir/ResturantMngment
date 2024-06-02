import { Outlet } from "react-router-dom";


export default function DashboardLayout() {
  return (
    <div className="flex gap-2">
        <div className="w-64 bg-orange-300 min-h-screen">
             
        </div>
        <div>
            <Outlet></Outlet>
        </div>
    </div>
  )
}
