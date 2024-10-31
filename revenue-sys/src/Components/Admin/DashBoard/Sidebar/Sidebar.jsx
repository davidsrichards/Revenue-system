import { HiOutlineComputerDesktop } from "react-icons/hi2";
import { FaBriefcase } from "react-icons/fa";
import { MdOutlinePayment } from "react-icons/md";
import { FaMoneyCheckAlt } from "react-icons/fa";
import { CgMenuGridO } from "react-icons/cg";
import { MdAccessTime } from "react-icons/md";
import { FaUserPlus } from "react-icons/fa";
import { IoIosSettings } from "react-icons/io";
import {IoMdLogOut} from "react-icons/io";
import { FaMobile} from "react-icons/fa";
import GlobalSidebar from "../../GlobalComponent/GlobalSidebar";

function Sidebar() {
  return (
    <div className="h-screen flex-1 md:w-64 w-0 fixed transition-al top-0 duration-300 ease-in-out overflow-auto bg-black text-[#fff] py-8">
      <ul className="h-auto">
        <GlobalSidebar
          icon={<HiOutlineComputerDesktop />}
          title={"Dashboard"}
          to={"/admin-dashboard/statistics"}
        />
        <GlobalSidebar icon={<FaBriefcase />} title={"View Payment"} to={"/admin-dashboard/payment"}/>
        <GlobalSidebar icon={<MdOutlinePayment />} title={"view Invoice"}  to={"/admin-dashboard/invoice"}/>
        <GlobalSidebar icon={<FaMoneyCheckAlt />} title={"Manage Localities"} to={"/admin-dashboard/localities"}/>
        <GlobalSidebar icon={<CgMenuGridO />} title={"Generate Report"}  to={"/admin-dashboard/report"}/>
        <GlobalSidebar icon={<MdAccessTime />} title={"Manage Users"} to={"/admin-dashboard/manage-user"} />
        <GlobalSidebar icon={<IoIosSettings />} title={"Manage Businesses"} to={"/admin-dashboard/manage-business"}/>
        <GlobalSidebar icon={<FaUserPlus />} title={"Profile"} />
        <GlobalSidebar icon={<IoMdLogOut  />} title={"Log Out"} to={'/'}/>
      </ul>
    </div>
  );
}

export default Sidebar;
