import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Sidebar from "./Sidebar/Sidebar";

function DashBoard() {
  return (
    <div>
      <Sidebar />
      <div className="flex-1 md:ml-64">
        <Navbar />
        <div className="mt-24 flex items-center justify-center p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default DashBoard;
