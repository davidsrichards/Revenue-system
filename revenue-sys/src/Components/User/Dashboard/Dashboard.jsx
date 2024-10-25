import { Outlet } from "react-router-dom";
import DashboardItems from "./DashboardItems";
import UserSidebar from "./UserSidebar";
import UserNavBar from "./UserNavBar";

const UserDashboard = () => {
  return (
    <div>
   <UserSidebar/>
    <div className="flex-1 md:ml-64">
       <UserNavBar/>
      <div className="mt-24 flex items-center justify-center p-4">
        <Outlet />
      </div>
    </div>
  </div>
  );
};

export default UserDashboard;
